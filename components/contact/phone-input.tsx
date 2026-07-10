"use client";

import { isValidPhoneNumber } from "libphonenumber-js";
import PhoneInput, { type Value } from "react-phone-number-input";
import pt from "react-phone-number-input/locale/pt-BR.json";

import "react-phone-number-input/style.css";

type PhoneInputFieldProps = {
  id?: string;
  value?: Value;
  onChange: (value: Value) => void;
  onBlur?: () => void;
  error?: string;
};

export function validatePhoneNumber(value?: Value): string | undefined {
  if (!value) return undefined;

  if (!isValidPhoneNumber(value)) {
    return "Informe um número de telefone válido para o país selecionado.";
  }

  return undefined;
}

export function PhoneInputField({
  id,
  value,
  onChange,
  onBlur,
  error,
}: PhoneInputFieldProps) {
  return (
    <div>
      <PhoneInput
        id={id}
        international
        defaultCountry="BR"
        labels={pt}
        countryCallingCodeEditable={false}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="(00) 00000-0000"
        className={`contact-phone-input${error ? " contact-phone-input--error" : ""}`}
        numberInputProps={{
          "aria-invalid": error ? true : undefined,
          autoComplete: "tel",
        }}
      />
      {error ? (
        <p className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
