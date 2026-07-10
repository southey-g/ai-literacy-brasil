"use client";

import type { ComponentPropsWithoutRef } from "react";

import { useContactModal } from "./contact-modal-provider";

type ContactLinkProps = ComponentPropsWithoutRef<"button"> & {
  className?: string;
  children: React.ReactNode;
};

export function ContactLink({
  onClick,
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
        open();
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
