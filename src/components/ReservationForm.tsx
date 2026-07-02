"use client";

import { useState, useEffect } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";
type Locale = "en" | "es";

const translations = {
  en: {
    form_title: "Reserve your Sovereign AI",
    form_subtitle:
      "Free registration. No deposit. No commitment. We need {count} reservations to start the first manufacturing batch.",
    form_name: "Full name",
    form_name_placeholder: "Your name",
    form_email: "Email",
    form_email_placeholder: "you@example.com",
    form_country: "Country",
    form_country_placeholder: "Select country",
    form_consent:
      'I accept the <a href="/privacy.md" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] underline underline-offset-2">privacy policy</a> and the reservation terms.',
    form_submit: "Reserve now",
    form_submitting: "Submitting...",
    form_success_title: "Reservation confirmed!",
    form_success_body:
      "Thank you! We'll keep you updated on the progress toward the production goal.",
    form_error: "Something went wrong. Please try again.",
    form_error_required: "This field is required.",
  },
  es: {
    form_title: "Reserva tu Sovereign AI",
    form_subtitle:
      "Registro gratuito. Sin depósito. Sin compromiso. Necesitamos {count} reservas para arrancar la primera serie de fabricación.",
    form_name: "Nombre completo",
    form_name_placeholder: "Tu nombre",
    form_email: "Email",
    form_email_placeholder: "tucorreo@ejemplo.com",
    form_country: "País",
    form_country_placeholder: "Seleccionar país",
    form_consent:
      'Acepto la <a href="/privacy.md" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] underline underline-offset-2">política de privacidad</a> y los términos de la reserva.',
    form_submit: "Reservar ahora",
    form_submitting: "Enviando...",
    form_success_title: "¡Reserva confirmada!",
    form_success_body:
      "¡Gracias! Te mantendremos informado del progreso hacia la meta de producción.",
    form_error: "Algo salió mal. Inténtalo de nuevo.",
    form_error_required: "Este campo es obligatorio.",
  },
};

const GOAL_UNITS = 100;

export default function ReservationForm() {
  const [locale, setLocale] = useState<Locale>("en");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const saved = document.cookie
      .split("; ")
      .find((c) => c.startsWith("locale="))
      ?.split("=")[1];
    if (saved === "es" || saved === "en") {
      setLocale(saved);
      return;
    }
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("es")) {
      setLocale("es");
    }
  }, []);

  const t = (key: string) =>
    (translations[locale] as Record<string, string>)?.[key] ?? key;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      country: formData.get("country") as string,
      variant: formData.get("variant") as string,
      consent: formData.get("consent") === "on",
    };

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || t("form_error"));
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg(t("form_error"));
    }
  };

  if (status === "success") {
    return (
      <section
        id="reserva"
        className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-6 py-24"
      >
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {t("form_success_title")}
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            {t("form_success_body")}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="reserva"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-6 py-24"
    >
      <div className="mx-auto max-w-md">
        <h2 className="text-2xl font-bold sm:text-3xl">
          {t("form_title")}
        </h2>
        <p className="mt-3 text-[var(--color-text-muted)]">
          {t("form_subtitle").replace("{count}", String(GOAL_UNITS))}
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              {t("form_name")}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder={t("form_name_placeholder")}
              className="mt-1 block w-full rounded-md border border-[var(--color-border)] bg-transparent px-3 py-3 text-base focus:border-[var(--color-accent)] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              {t("form_email")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder={t("form_email_placeholder")}
              className="mt-1 block w-full rounded-md border border-[var(--color-border)] bg-transparent px-3 py-3 text-base focus:border-[var(--color-accent)] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium">
              {t("form_country")}
            </label>
            <input
              id="country"
              name="country"
              type="text"
              autoComplete="country-name"
              required
              placeholder={t("form_country_placeholder")}
              className="mt-1 block w-full rounded-md border border-[var(--color-border)] bg-transparent px-3 py-3 text-base focus:border-[var(--color-accent)] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="variant" className="block text-sm font-medium">
              Variant
            </label>
            <select
              id="variant"
              name="variant"
              required
              className="mt-1 block w-full rounded-md border border-[var(--color-border)] bg-transparent px-3 py-3 text-base focus:border-[var(--color-accent)] focus:outline-none"
            >
              <option value="pro">Pro</option>
            </select>
          </div>

          <div className="flex items-start gap-3">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              className="mt-1 h-5 w-5 shrink-0 accent-[var(--color-accent)]"
            />
            <label
              htmlFor="consent"
              className="text-sm text-[var(--color-text-muted)]"
              dangerouslySetInnerHTML={{ __html: t("form_consent") }}
            />
          </div>

          {status === "error" && errorMsg && (
            <p className="text-sm text-red-400">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-md bg-[var(--color-accent)] px-6 py-4 text-base font-semibold text-black transition hover:opacity-90 disabled:opacity-50"
          >
            {status === "submitting" ? t("form_submitting") : t("form_submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
