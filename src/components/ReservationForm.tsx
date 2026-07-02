"use client";

import { useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const GOAL_UNITS = 100;

export default function ReservationForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

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
        setErrorMsg(data.error || "Error al registrar. Inténtalo de nuevo.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Error de conexión. Comprueba tu internet e inténtalo de nuevo.");
    }
  };

  if (status === "success") {
    return (
      <section
        id="reserva"
        className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-6 py-24"
      >
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">¡Gracias!</h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Tu reserva ha sido registrada. Te mantendremos informado del
            progreso hacia la meta de producción.
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
        <h2 className="text-2xl font-bold sm:text-3xl">Reserva la tuya</h2>
        <p className="mt-3 text-[var(--color-text-muted)]">
          Registro gratuito. Sin dep&oacute;sito, sin compromiso. Solo
          necesitamos {GOAL_UNITS} reservas para arrancar la producci&oacute;n.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Nombre completo
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="mt-1 block w-full rounded-md border border-[var(--color-border)] bg-transparent px-3 py-3 text-base focus:border-[var(--color-accent)] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full rounded-md border border-[var(--color-border)] bg-transparent px-3 py-3 text-base focus:border-[var(--color-accent)] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium">
              Pa&iacute;s
            </label>
            <input
              id="country"
              name="country"
              type="text"
              autoComplete="country-name"
              required
              className="mt-1 block w-full rounded-md border border-[var(--color-border)] bg-transparent px-3 py-3 text-base focus:border-[var(--color-accent)] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="variant" className="block text-sm font-medium">
              Variante preferida
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
            <label htmlFor="consent" className="text-sm text-[var(--color-text-muted)]">
              Acepto la{" "}
              <a href="/privacy.md" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] underline underline-offset-2">
                política de privacidad
              </a>{" "}
              y los términos de la reserva.
            </label>
          </div>

          {status === "error" && errorMsg && (
            <p className="text-sm text-red-400">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-md bg-[var(--color-accent)] px-6 py-4 text-base font-semibold text-black transition hover:opacity-90 disabled:opacity-50"
          >
            {status === "submitting" ? "Registrando..." : "Reservar gratis"}
          </button>
        </form>
      </div>
    </section>
  );
}
