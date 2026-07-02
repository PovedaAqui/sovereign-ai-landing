"use client";

import { useState, useEffect } from "react";
import ReservationForm from "@/components/ReservationForm";

type Locale = "en" | "es";

const translations = {
  en: {
    hero_tagline: "Local AI · Open Weights · No cloud",
    hero_title: "Run open AI on your own hardware",
    hero_subtitle:
      "A mini-PC designed to run local AI models with AMD Strix Halo and 128&nbsp;GB of unified memory. No third-party APIs. No subscriptions. No limits.",
    hero_image_ref: "Reference image. Final design may vary slightly.",
    hero_cta: "Reserve yours — free",
    problem_title: "The AI you use isn't yours",
    problem_body:
      "When you use cloud APIs for inference, your data leaves your network. Your prompts are stored. Your models are controlled by third parties who can change prices, limit access, or censor responses. Open AI isn't negotiated from the outside — it runs inside.",
    problem_privacy: "Real privacy",
    problem_privacy_body:
      "Healthcare, legal, and finance need data to never leave their network. This isn't about compliance — it's about your data being yours.",
    problem_no_intermediaries: "No intermediaries",
    problem_no_intermediaries_body:
      "No API keys, no vendor lock-in, no third-party outages. Your infrastructure, your rules.",
    problem_predictable_cost: "Predictable cost",
    problem_predictable_cost_body:
      "Cloud APIs charge per token. At medium-to-high volume, own hardware is cheaper. Pay once, use forever.",
    problem_total_control: "Total control",
    problem_total_control_body:
      "Choose the model, adjust the parameters, decide what runs. No unilateral policy changes. No surprises.",
    weights_title: "Open models, real performance",
    weights_body:
      "Open weights models like Qwen, Gemma, Mistral and DeepSeek are the foundation of decentralized AI. With 128&nbsp;GB of unified memory, the Strix Halo can load them all without swap. These are the estimated inference times with Q4 quantization:",
    weights_perf_note:
      "Estimated performance with ROCm on Strix Halo (Radeon 8060S, 40 CU, 128&nbsp;GB LPDDR5X-8000). Actual values may vary depending on the model, system, and ROCm version. MoE models activate only a subset of parameters per token, enabling higher throughput without sacrificing quality.",
    specs_title: "Hardware designed for local AI",
    progress_title: "Production goal",
    progress_body:
      "We need {count} reservations to start the first manufacturing batch. Free registration — no deposit, no commitment.",
    progress_reserved: "reserved",
    form_title: "Reserve your SAI",
    form_subtitle: "Free registration. No deposit. No commitment.",
    form_name: "Full name",
    form_name_placeholder: "Your name",
    form_email: "Email",
    form_email_placeholder: "you@example.com",
    form_country: "Country",
    form_country_placeholder: "Select country",
    form_variant: "Variant",
    form_consent: "I accept the privacy policy and the reservation terms.",
    form_submit: "Reserve now",
    form_submitting: "Submitting...",
    form_success: "Reservation confirmed! We'll keep you updated.",
    form_error: "Something went wrong. Please try again.",
    form_error_required: "This field is required.",
    form_error_consent: "You must accept the privacy policy.",
    footer: "SAI — hardware for local AI. Designed and manufactured in the EU.",
    privacy_link: "privacy policy",
  },
  es: {
    hero_tagline: "Local AI · Open Weights · Sin nube",
    hero_title: "Ejecuta IA abierta en tu propio hardware",
    hero_subtitle:
      "Un mini-PC diseñado para correr modelos de IA locales con AMD Strix Halo y 128&nbsp;GB de memoria unificada. Sin APIs de terceros. Sin suscripciones. Sin límites.",
    hero_image_ref: "Imagen de referencia. El diseño final puede variar ligeramente.",
    hero_cta: "Reserva la tuya — gratis",
    problem_title: "La IA que usas no es tuya",
    problem_body:
      "Cuando usas APIs cloud para inferencia, tus datos salen de tu red. Tus prompts se almacenan. Tus modelos están controlados por terceros que pueden cambiar precios, limitar acceso o censurar respuestas. La IA abierta no se negocia desde fuera — se ejecuta dentro.",
    problem_privacy: "Privacidad real",
    problem_privacy_body:
      "Sanidad, legal y finanzas necesitan que los datos nunca salgan de su red. No se trata de cumplir normativas: se trata de que tus datos sean tuyos.",
    problem_no_intermediaries: "Sin intermediarios",
    problem_no_intermediaries_body:
      "Sin llaves de API, sin límites de proveedor, sin apagones de terceros. Tu infraestructura, tus reglas.",
    problem_predictable_cost: "Coste predecible",
    problem_predictable_cost_body:
      "Las APIs cloud cobran por token. A volumen medio-alto, el hardware propio es más barato. Pagas una vez, usas siempre.",
    problem_total_control: "Control total",
    problem_total_control_body:
      "Elige el modelo, ajusta los parámetros, decide qué ejecutar. Sin cambios de política unilaterales. Sin sorpresas.",
    weights_title: "Modelos abiertos, rendimiento real",
    weights_body:
      "Los modelos open weights como Qwen, Gemma, Mistral y DeepSeek son la base de la IA descentralizada. Con 128&nbsp;GB de memoria unificada, el Strix Halo puede cargarlos completos sin swap. Estos son los tiempos de inferencia estimados con cuantización Q4:",
    weights_perf_note:
      "Rendimiento estimado con ROCm en Strix Halo (Radeon 8060S, 40 CU, 128&nbsp;GB LPDDR5X-8000). Los valores reales pueden variar según el modelo, el sistema y la versión de ROCm. Los modelos MoE activan solo un subconjunto de parámetros por token, lo que permite mayor throughput sin sacrificar calidad.",
    specs_title: "Hardware diseñado para IA local",
    progress_title: "Meta de producción",
    progress_body:
      "Necesitamos {count} reservas para arrancar la primera serie de fabricación. Registro gratuito — sin depósito, sin compromiso.",
    progress_reserved: "reservadas",
    form_title: "Reserva tu SAI",
    form_subtitle: "Registro gratuito. Sin depósito. Sin compromiso.",
    form_name: "Nombre completo",
    form_name_placeholder: "Tu nombre",
    form_email: "Email",
    form_email_placeholder: "tucorreo@ejemplo.com",
    form_country: "País",
    form_country_placeholder: "Seleccionar país",
    form_variant: "Variante",
    form_consent: "Acepto la política de privacidad y los términos de la reserva.",
    form_submit: "Reservar ahora",
    form_submitting: "Enviando...",
    form_success: "¡Reserva confirmada! Te mantendremos informado.",
    form_error: "Algo salió mal. Inténtalo de nuevo.",
    form_error_required: "Este campo es obligatorio.",
    form_error_consent: "Debes aceptar la política de privacidad.",
    footer: "SAI — hardware para IA local. Diseñado y fabricado en la UE.",
    privacy_link: "política de privacidad",
  },
};

const GOAL_UNITS = 100;
const RESERVED_UNITS = 0;
const PROGRESS = RESERVED_UNITS / GOAL_UNITS;

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    // Check cookie first
    const saved = document.cookie
      .split("; ")
      .find((c) => c.startsWith("locale="))
      ?.split("=")[1];
    if (saved === "es" || saved === "en") {
      setLocale(saved);
      return;
    }
    // Detect from browser
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("es")) {
      setLocale("es");
    }
  }, []);

  const toggle = () => {
    const next = locale === "en" ? "es" : "en";
    setLocale(next);
    document.cookie = `locale=${next}; path=/; max-age=31536000`;
  };

  const t = (key: keyof (typeof translations)["en"]) => translations[locale]?.[key] ?? key;

  return (
    <main>
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden border-b border-[var(--color-border)] px-6 py-24 text-center">
        {/* Language switcher */}
        <button
          onClick={toggle}
          className="absolute right-6 top-6 z-10 inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-2 text-sm font-medium text-[var(--color-text-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          aria-label="Switch language"
        >
          <span className="text-base">🌐</span>
          <span>{locale === "en" ? "Español" : "English"}</span>
        </button>

        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
          {t("hero_tagline")}
        </p>
        <h1 className="max-w-4xl px-4 text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
          {t("hero_title")}
        </h1>
        <p className="mt-8 max-w-2xl px-4 text-xl text-[var(--color-text-muted)]">
          {t("hero_subtitle")}
        </p>

        <div className="mt-12 w-full max-w-3xl px-6">
          <img
            src="/images/hero-chassis.png"
            alt={
              locale === "en"
                ? "Chassis of the SAI mini-PC — industrial design in black aluminum with perforated front panel"
                : "Chasis del mini-PC SAI — diseño industrial en aluminio negro con panel frontal perforado"
            }
            className="hero-image w-full"
          />
          <p className="mt-3 text-xs text-[var(--color-text-dim)]">
            {t("hero_image_ref")}
          </p>
        </div>

        <a
          href="#reserva"
          className="cta-button mt-16 inline-flex items-center justify-center"
        >
          {t("hero_cta")}
        </a>

        <p className="mt-8 text-base text-[var(--color-text-muted)]">
          {RESERVED_UNITS} {locale === "en" ? "reservations" : "reservas"} ·{" "}
          {locale === "en" ? "Goal:" : "Meta:"} {GOAL_UNITS}{" "}
          {locale === "en" ? "units" : "unidades"}
        </p>
      </section>

      {/* THE PROBLEM */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t("problem_title")}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[var(--color-text)]">
          {t("problem_body")}
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition hover:border-[var(--color-border-hover)]">
            <h3 className="text-lg font-bold text-[var(--color-accent)]">
              {t("problem_privacy")}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-text)]">
              {t("problem_privacy_body")}
            </p>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition hover:border-[var(--color-border-hover)]">
            <h3 className="text-lg font-bold text-[var(--color-accent)]">
              {t("problem_no_intermediaries")}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-text)]">
              {t("problem_no_intermediaries_body")}
            </p>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition hover:border-[var(--color-border-hover)]">
            <h3 className="text-lg font-bold text-[var(--color-accent)]">
              {t("problem_predictable_cost")}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-text)]">
              {t("problem_predictable_cost_body")}
            </p>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition hover:border-[var(--color-border-hover)]">
            <h3 className="text-lg font-bold text-[var(--color-accent)]">
              {t("problem_total_control")}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-text)]">
              {t("problem_total_control_body")}
            </p>
          </div>
        </div>
      </section>

      {/* OPEN WEIGHTS */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("weights_title")}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-text)]">
            {t("weights_body")}
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)] bg-[var(--color-bg-elevated-2)]">
                  <th className="py-4 pr-4 font-bold text-[var(--color-text)]">
                    {locale === "en" ? "Model" : "Modelo"}
                  </th>
                  <th className="py-4 pr-4 font-bold text-[var(--color-text)]">
                    {locale === "en" ? "Parameters" : "Parámetros"}
                  </th>
                  <th className="py-4 pr-4 font-bold text-[var(--color-text)]">
                    {locale === "en" ? "Architecture" : "Arquitectura"}
                  </th>
                  <th className="py-4 pr-4 font-bold text-[var(--color-text)]">
                    {locale === "en" ? "Quantization" : "Cuantización"}
                  </th>
                  <th className="py-4 font-bold text-[var(--color-text)]">
                    {locale === "en" ? "Tokens/sec" : "Tokens/seg"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Qwen3.6-35B", "35B (3B active)", "MoE (256 experts)", "Q4_K_M", "≈ 85"],
                  ["Gemma 4 26B", "26B (3.8B active)", "MoE (128 experts)", "Q4_K_M", "≈ 90"],
                  ["Gemma 4 31B", "31B (dense)", "Dense", "Q4_K_M", "≈ 20"],
                  ["Mistral Large", "123B (dense)", "Dense", "Q4_K_M", "≈ 22"],
                  ["DeepSeek-V3", "671B (37B active)", "MoE (MLA)", "Q4_K_M", "≈ 28"],
                  ["DeepSeek-R1", "671B (MoE)", "MoE (RA), RL", "Q4_K_M", "≈ 25"],
                  ["DeepSeek-V3.2", "685B (MoE)", "MoE (DSA)", "Q4_K_M", "≈ 30"],
                  ["DeepSeek-R1-Distill-Qwen 32B", "32B (dense)", "Dense", "Q4_K_M", "≈ 19"],
                  ["MiniMax M2.5", "228B", "MoE", "Q3_K_M", "≈ 35"],
                ].map(([model, params, arch, quant, tps]) => (
                  <tr
                    key={model}
                    className="border-b border-[var(--color-border)] transition hover:bg-[var(--color-bg-elevated)]"
                  >
                    <td className="py-4 font-semibold">{model}</td>
                    <td className="py-4 pr-4">{params}</td>
                    <td className="py-4 pr-4">{arch}</td>
                    <td className="py-4 pr-4">{quant}</td>
                    <td className="py-4 font-bold text-lg text-[var(--color-accent)]">
                      {tps}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm text-[var(--color-text-muted)]">
            {t("weights_perf_note")}
          </p>
        </div>
      </section>

      {/* SPECS */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("specs_title")}
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <tbody>
                {[
                  [
                    "CPU",
                    "AMD Ryzen AI Max+ 395 (Strix Halo), 16 Zen 5 cores",
                  ],
                  ["Memory", "128 GB LPDDR5X-8000 unified (~256 GB/s)"],
                  [
                    "GPU",
                    "Radeon 8060S integrated (40 CU, RDNA 3.5, 2.9 GHz)",
                  ],
                  ["NPU", "50 TOPS (32 Tiles)"],
                  ["Storage", "NVMe Gen4, upgradable"],
                  ["Noise", "< 35 dB at rest, < 45 dB under sustained load"],
                  ["Software", "Ubuntu 24.04 + preinstalled ROCm stack"],
                ].map(([label, value]) => (
                  <tr
                    key={label}
                    className="border-b border-[var(--color-border)] transition hover:bg-[var(--color-bg-elevated)]"
                  >
                    <th className="w-1/3 py-4 pr-4 font-bold text-[var(--color-text)]">
                      {label}
                    </th>
                    <td className="py-4 text-base text-[var(--color-text)]">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PROGRESS */}
      <section id="progreso" className="mx-auto max-w-2xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t("progress_title")}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[var(--color-text)]">
          {t("progress_body").replace("{count}", String(GOAL_UNITS))}
        </p>

        <div className="mt-12">
          <div
            className="h-6 w-full overflow-hidden rounded-full bg-[var(--color-bg-elevated)]"
            role="img"
            aria-label={`${RESERVED_UNITS} of ${GOAL_UNITS} units reserved`}
          >
            <div
              aria-hidden="true"
              className="progress-fill h-full rounded-full bg-[var(--color-accent)]"
              style={{ "--progress": PROGRESS } as React.CSSProperties}
            />
          </div>
          <p className="mt-5 text-lg font-semibold text-[var(--color-text)]">
            {RESERVED_UNITS} / {GOAL_UNITS}{" "}
            {locale === "en" ? "units" : "unidades"}{" "}
            {t("progress_reserved")} ({Math.round(PROGRESS * 100)}%)
          </p>
        </div>
      </section>

      {/* RESERVATION FORM */}
      <ReservationForm />

      <footer className="px-6 py-12 text-center text-sm text-[var(--color-text-muted)]">
        <p>{t("footer")}</p>
      </footer>
    </main>
  );
}
