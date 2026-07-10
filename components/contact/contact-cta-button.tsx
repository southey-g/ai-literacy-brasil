"use client";

import type { ComponentPropsWithoutRef } from "react";

import { Button } from "@/components/ui/button";

import {
  useContactModal,
  type ContactModalOptions,
} from "./contact-modal-provider";

type ContactCtaButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  "type"
> & {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  modalOptions?: ContactModalOptions;
  children: React.ReactNode;
};

export function ContactCtaButton({
  onClick,
  modalOptions,
  ...props
}: ContactCtaButtonProps) {
  const { open } = useContactModal();

  return (
    <Button
      type="button"
      {...props}
      onClick={(event) => {
        open(modalOptions);
        onClick?.(event);
      }}
    />
  );
}
