"use client";

import dynamic from "next/dynamic";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { ContactModalOptions } from "@/lib/contact";

const ContactModal = dynamic(
  () => import("./contact-modal").then((module) => module.ContactModal),
  { ssr: false },
);

export type { ContactModalOptions, ContactInterest } from "@/lib/contact";

type ContactModalContextValue = {
  open: (options?: ContactModalOptions) => void;
  close: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ContactModalOptions>({});
  const [modalKey, setModalKey] = useState(0);

  const open = useCallback((nextOptions?: ContactModalOptions) => {
    setOptions(nextOptions ?? {});
    setModalKey((current) => current + 1);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => {
    setIsOpen(false);
    setOptions({});
  }, []);

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      {isOpen ? (
        <ContactModal
          key={modalKey}
          isOpen={isOpen}
          onClose={close}
          options={options}
        />
      ) : null}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return context;
}
