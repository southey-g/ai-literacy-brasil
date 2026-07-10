"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { primaryNavLinks } from "@/lib/navigation";

type MobileNavProps = {
  cta: React.ReactNode;
};

export function MobileNav({ cta }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const panel = panelRef.current;
    const firstLink = panel?.querySelector<HTMLElement>("a");
    firstLink?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
    menuButtonRef.current?.focus();
  }

  return (
    <>
      <button
        ref={menuButtonRef}
        type="button"
        className="relative z-10 inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 md:hidden"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="size-5"
          aria-hidden
        >
          {isOpen ? (
            <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
          ) : (
            <>
              <path d="M4 7h16" strokeLinecap="round" />
              <path d="M4 12h16" strokeLinecap="round" />
              <path d="M4 17h16" strokeLinecap="round" />
            </>
          )}
        </svg>
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Fechar menu"
            className="absolute inset-0 bg-[#0f172a]/40"
            onClick={closeMenu}
          />
          <div
            ref={panelRef}
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            className="absolute top-16 right-0 left-0 border-b border-border bg-white px-6 py-6 shadow-lg"
          >
            <nav aria-label="Navegação principal">
              <ul className="space-y-1">
                {primaryNavLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent-light hover:text-accent"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-6">{cta}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}
