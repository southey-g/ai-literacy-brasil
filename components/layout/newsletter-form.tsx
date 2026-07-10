"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  }

  if (submitted) {
    return (
      <p
        role="status"
        aria-live="polite"
        className="text-sm font-medium text-emerald-600"
      >
        Obrigado! Você está na lista.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        E-mail para newsletter
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Seu melhor e-mail"
        className="min-h-11 flex-1 rounded-full border border-border bg-white px-5 text-sm text-foreground placeholder:text-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      />
      <Button type="submit" className="min-h-11 px-6 text-sm font-semibold">
        Inscrever-se
      </Button>
    </form>
  );
}
