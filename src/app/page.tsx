import Image from "next/image";
import { useState } from "react";

const GOAL_UNITS = 100;
const RESERVED_UNITS = 0;
const PROGRESS = RESERVED_UNITS / GOAL_UNITS;

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden border-b border-[var(--color-border)] px-6 py-20 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
          European Sovereign AI · Hardware europeo · Sin nube
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          La IA que Europa necesita, construida en Europa
        </h1>
        <p className="mt-6 max-w-xl text-lg text-[var(--color-text-muted)]">
          Un mini-PC diseñado y fabricado en la UE con AMD Strix Halo y 128&nbsp;GB de memoria unificada. 
          Procesamiento de IA local, sin depender de infraestructura cloud extranjera.
        </p>

        <div className="mt-10 w-full max-w-2xl">
          <Image
            src="/images/hero-chassis.png"
            alt="Chasis del mini-PC Sovereign AI — diseño industrial en aluminio negro con panel frontal perforado"
            width={1024}
            height={768}
            priority
            fetchPriority="high"
            decoding="sync"
            sizes="(max-width: 768px) 100vw, 768px"
            className="w-full rounded-lg border border-[var(--color-border)]"
          />
        </div>

        <a
          href="#reserva"
          className="mt-10 inline-flex items-center justify-center rounded-md bg-[var(--color-accent)] px-8 py-4 text-base font-semibold text-black transition hover:opacity-90"
        >
          Reserva la tuya — gratis
        </a>

        <p className="mt-4 text-sm text-[var(--color-text-muted)]">
          {RESERVED_UNITS} reservas · Meta: {GOAL_UNITS} unidades
        </p>
      </section>

      {/* SOBERANÍA DIGITAL */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Europa depende de infraestructura de IA extranjera
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            El 95% de la capacidad de inferencia de IA en Europa reside en centros de datos de Estados Unidos y China. 
            Esta dependencia estratégica es incompatible con la EU AI Act, el RGPD y la autonomía digital que Europa necesita. 
            La regulación no sirve de nada sin hardware propio.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold text-[var(--color-accent)]">
                Soberanía de datos
              </h3>
              <p className="mt-2 text-[var(--color-text-muted)]">
                Sanidad, justicia y administración pública no pueden enviar datos a servidores en terceros países. 
                La inferencia local garantiza que la información sensible permanece en la UE, cumpliendo RGPD y EU AI Act sin excepciones.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-accent)]">
                Independencia tecnológica
              </h3>
              <p className="mt-2 text-[var(--color-text-muted)]">
                Sin llaves de API de proveedores extranjeros. Sin riesgo de sanciones, bloqueos geopolíticos o cambios de términos de servicio unilaterales. 
                Control total sobre la infraestructura crítica.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-accent)]">
                Cadena de suministro europea
              </h3>
              <p className="mt-2 text-[var(--color-text-muted)]">
                Fabricado en la UE con componentes europeos. Diseño europeo, ensamblaje europeo, soporte europeo. 
                Cada unidad fortalece la base industrial tecnológica del continente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Por qu&eacute; la IA local importa ahora
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold text-[var(--color-accent)]">
              Privacidad real
            </h3>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Sanidad, legal y finanzas necesitan que los datos nunca salgan de su red. 
              No se trata de cumplir normativas: se trata de que tus datos sean tuyos.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-accent)]">
              EU AI Act
            </h3>
            <p className="mt-2 text-[var(--color-text-muted)]">
              La regulación empuja a sectores enteros hacia infraestructura on-premise. 
              Quienes se anticipen tendrán una ventaja competitiva decisiva.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-accent)]">
              Coste a largo plazo
            </h3>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Las APIs cloud cobran por token. A volumen medio-alto, el hardware propio es más barato y predecible. 
              El punto de equilibrio se acerca más de lo que parece.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-accent)]">
              Sin dependencias
            </h3>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Sin límites de proveedor, sin apagones de terceros, sin cambios de política unilaterales. 
              Tu infraestructura, tus reglas.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTO */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Especificaciones</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <tbody>
                {[
                  ["CPU", "AMD Ryzen AI Max+ 395 (Strix Halo), 16 núcleos Zen 5"],
                  ["Memoria", "128 GB LPDDR5X-8000 unificada (~256 GB/s)"],
                  ["GPU", "Radeon 8060S integrada (40 CU, RDNA 3.5, 2.9 GHz)"],
                  ["NPU", "50 TOPS (32 Tiles)"],
                  ["Almacenamiento", "NVMe Gen4, actualizable"],
                  ["Ruido", "< 35 dB en reposo, < 45 dB en carga sostenida"],
                  ["Software", "Ubuntu 24.04 + ROCm stack preinstalado"],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-[var(--color-border)]">
                    <th className="w-1/3 py-3 pr-4 font-medium text-[var(--color-text-muted)]">
                      {label}
                    </th>
                    <td className="py-3">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RENDIMIENTO */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Rendimiento con modelos locales</h2>
          <p className="mt-3 text-[var(--color-text-muted)]">
            Con 128 GB de memoria unificada, el Strix Halo puede cargar modelos grandes de IA completos en memoria sin swap. 
            Estos son los tiempos de inferencia estimados con cuantización Q4:
          </p>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="py-3 pr-4 font-semibold text-[var(--color-text-muted)]">Modelo</th>
                  <th className="py-3 pr-4 font-semibold text-[var(--color-text-muted)]">Parámetros</th>
                  <th className="py-3 pr-4 font-semibold text-[var(--color-text-muted)]">Arquitectura</th>
                  <th className="py-3 pr-4 font-semibold text-[var(--color-text-muted)]">Cuantización</th>
                  <th className="py-3 font-semibold text-[var(--color-text-muted)]">Tokens/seg</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Qwen3.6-35B", "35B (3B activos)", "MoE (256 expertos)", "Q4_K_M", "≈ 85"],
                  ["Gemma 4 26B", "26B (3.8B activos)", "MoE (128 expertos)", "Q4_K_M", "≈ 90"],
                  ["Gemma 4 31B", "31B (densa)", "Dense", "Q4_K_M", "≈ 20"],
                  ["Mistral Large", "123B (densa)", "Dense", "Q4_K_M", "≈ 22"],
                  ["GPT-OSS 120B", "120B", "MoE", "Q4_K_M", "≈ 55"],
                  ["MiniMax M2.5", "228B", "MoE", "Q3_K_M", "≈ 35"],
                ].map(([model, params, arch, quant, tps]) => (
                  <tr key={model} className="border-b border-[var(--color-border)]">
                    <td className="py-3 font-medium">{model}</td>
                    <td className="py-3 pr-4">{params}</td>
                    <td className="py-3 pr-4">{arch}</td>
                    <td className="py-3 pr-4">{quant}</td>
                    <td className="py-3 font-semibold text-[var(--color-accent)]">{tps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-xs text-[var(--color-text-muted)]">
            Rendimiento estimado con ROCm en Strix Halo (Radeon 8060S, 40 CU, 128 GB LPDDR5X-8000).
            Los valores reales pueden variar según el modelo, el sistema y la versión de ROCm.
            Los modelos MoE activan solo un subconjunto de parámetros por token, lo que permite
            mayor throughput sin sacrificar calidad.
          </p>
        </div>
      </section>

      {/* PROGRESO */}
      <section id="progreso" className="mx-auto max-w-2xl px-6 py-24">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Meta de producción
        </h2>
        <p className="mt-3 text-[var(--color-text-muted)]">
          Necesitamos {GOAL_UNITS} reservas para arrancar la primera serie de fabricación. 
          Registro gratuito — sin depósito, sin compromiso.
        </p>

        <div className="mt-8">
          <div
            className="h-3 w-full overflow-hidden rounded-full bg-[var(--color-bg-elevated)]"
            role="img"
            aria-label={`${RESERVED_UNITS} de ${GOAL_UNITS} unidades reservadas`}
          >
            <div
              aria-hidden="true"
              className="progress-fill h-full rounded-full bg-[var(--color-accent)]"
              style={{ "--progress": PROGRESS } as React.CSSProperties}
            />
          </div>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            {RESERVED_UNITS} / {GOAL_UNITS} unidades reservadas (
            {Math.round(PROGRESS * 100)}%)
          </p>
        </div>
      </section>

      {/* FORMULARIO DE RESERVA */}
      <ReservationForm />

      <footer className="px-6 py-12 text-center text-sm text-[var(--color-text-muted)]">
        <p>Sovereign AI — diseñado y fabricado en la UE. Hardware europeo para soberanía digital europea.</p>
      </footer>
    </main>
  );
}

function ReservationForm() {
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
          Registro gratuito. Sin depósito, sin compromiso. Solo
          necesitamos {GOAL_UNITS} reservas para arrancar la producción.
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
              País
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
              <option value="mesh">Mesh Airflow</option>
              <option value="ridge">Ridge Curvo</option>
              <option value="sg13">SG13 Minimalista</option>
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
              Acepto la política de privacidad y los términos
              de la reserva.
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
