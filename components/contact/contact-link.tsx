"use client";

import type { ComponentPropsWithoutRef } from "react";

import type { ContactModalOptions } from "@/lib/contact";

import { useContactModal } from "./contact-modal-provider";

type ContactLinkProps = ComponentPropsWithoutRef<"button"> & {
  className?: string;
  modalOptions?: ContactModalOptions;
  children: React.ReactNode;
};

export function ContactLink({
  onClick,
  modalOptions,
  className = "",
  children,
  ...props
}: ContactLinkProps) {
  const { open } = useContactModal();

  return (
    <button
      type="button"
      className={`cursor-pointer text-left ${className}`}
      onClick={(event) => {
        open(modalOptions);
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
