"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { Value } from "react-phone-number-input";

import { Button } from "@/components/ui/button";
import {
  interestOptions,
  type ContactModalOptions,
} from "@/lib/contact";

import {
  PhoneInputField,
  validatePhoneNumber,
} from "./phone-input";

const selectChevronClassName =
  "appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.1rem] bg-[right_0.5rem_center] bg-no-repeat pr-7";

const fieldClassName =
  "w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
  ).filter((element) => element.offsetParent !== null);
}

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  options?: ContactModalOptions;
};

export function ContactModal({
  isOpen,
  onClose,
  options = {},
}: ContactModalProps) {
  const { defaultInterest = "", showCompanyField = false } = options;
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState<Value>();
  const [phoneError, setPhoneError] = useState("");
  const titleId = useId();
  const descriptionId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;

    const inertTargets = document.querySelectorAll("header, main, footer");
    inertTargets.forEach((element) => element.setAttribute("inert", ""));

    const panel = panelRef.current;
    const focusableElements = panel ? getFocusableElements(panel) : [];
    focusableElements[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panel) return;

      const elements = getFocusableElements(panel);
      if (elements.length === 0) return;

      const first = elements[0];
      const last = elements[elements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      inertTargets.forEach((element) => element.removeAttribute("inert"));
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function handlePhoneBlur() {
    setPhoneError(validatePhoneNumber(phone) ?? "");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextPhoneError = validatePhoneNumber(phone);
    if (nextPhoneError) {
      setPhoneError(nextPhoneError);
      return;
    }

    setPhoneError("");
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        aria-label="Fechar formulário"
        className="absolute inset-0 bg-[#0f172a]/55 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative z-10 max-h-[min(90vh,760px)] w-full max-w-lg overflow-y-auto rounded-[var(--radius-card)] border border-border bg-white p-6 shadow-2xl shadow-[#0f172a]/10 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 inline-flex size-9 items-center justify-center rounded-full text-foreground/45 transition-colors hover:bg-accent-light hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="size-5"
            aria-hidden
          >
            <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>

        <div className="pr-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Contato
          </p>
          <h2 id={titleId} className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
            Quero participar
          </h2>
          <p id={descriptionId} className="mt-2 text-sm leading-relaxed text-subtle">
            Preencha seus dados e entraremos em contato com mais informações sobre
            treinamentos e turmas.
          </p>
        </div>

        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 px-5 py-6 text-center"
          >
            <p className="text-base font-semibold text-emerald-800">
              Recebemos seu interesse!
            </p>
            <p className="mt-2 text-sm text-emerald-700/80">
              Entraremos em contato em breve com mais informações.
            </p>
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              className="mt-6 min-h-11 px-6"
            >
              Fechar
            </Button>
          </div>
        ) : (
        <form
          key={`${defaultInterest}-${showCompanyField}`}
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
        >
          <div>
            <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-foreground">
              Nome <span className="text-accent" aria-hidden="true">*</span>
              <span className="sr-only"> (obrigatório)</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Seu nome completo"
              className={fieldClassName}
            />
          </div>

          {showCompanyField ? (
            <div>
              <label htmlFor="contact-company" className="mb-1.5 block text-sm font-medium text-foreground">
                Nome da empresa <span className="text-accent" aria-hidden="true">*</span>
                <span className="sr-only"> (obrigatório)</span>
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                required
                autoComplete="organization"
                placeholder="Nome da sua empresa"
                className={fieldClassName}
              />
            </div>
          ) : null}

          <div>
            <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-foreground">
              E-mail <span className="text-accent" aria-hidden="true">*</span>
              <span className="sr-only"> (obrigatório)</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="seu@email.com"
              className={fieldClassName}
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-foreground">
              Telefone
              <span className="ml-1 font-normal text-subtle">(opcional)</span>
            </label>
            <PhoneInputField
              id="contact-phone"
              value={phone}
              onChange={(value) => {
                setPhone(value);
                if (phoneError) {
                  setPhoneError(validatePhoneNumber(value) ?? "");
                }
              }}
              onBlur={handlePhoneBlur}
              error={phoneError}
            />
            <input type="hidden" name="phone" value={phone ?? ""} />
          </div>

          <div>
            <label htmlFor="contact-interest" className="mb-1.5 block text-sm font-medium text-foreground">
              Interesse <span className="text-accent" aria-hidden="true">*</span>
              <span className="sr-only"> (obrigatório)</span>
            </label>
            <select
              id="contact-interest"
              name="interest"
              required
              defaultValue={defaultInterest}
              className={`${fieldClassName} ${selectChevronClassName} pr-10`}
            >
              {interestOptions.map((option) => (
                <option key={option.value} value={option.value} disabled={option.value === ""}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-foreground">
              Mensagem
              <span className="ml-1 font-normal text-subtle">(opcional)</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="Conte um pouco sobre o que você busca..."
              className={`${fieldClassName} resize-none`}
            />
          </div>

          <div className="pt-2">
            <Button type="submit" className="w-full min-h-12 font-semibold">
              Enviar interesse
            </Button>
          </div>
        </form>
        )}
      </div>
    </div>
  );
}
