import Image from "next/image";
import ReservationForm from "@/components/ReservationForm";

const GOAL_UNITS = 100;
const RESERVED_UNITS = 0;
const PROGRESS = RESERVED_UNITS / GOAL_UNITS;

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden border-b border-[var(--color-border)] px-6 py-20 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
          Local AI · Open Weights · Sin nube
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Ejecuta IA abierta en tu propio hardware
        </h1>
        <p className="mt-6 max-w-xl text-lg text-[var(--color-text-muted)]">
          Un mini-PC diseñado para correr modelos de IA locales con AMD Strix Halo y 128&nbsp;GB de memoria unificada. 
          Sin APIs de terceros. Sin suscripciones. Sin límites.
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

      {/* EL PROBLEMA */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="text-2xl font-bold sm:text-3xl">
          La IA que usas no es tuya
        </h2>
        <p className="mt-4 text-[var(--color-text-muted)]">
          Cuando usas APIs cloud para inferencia, tus datos salen de tu red. Tus prompts se almacenan. 
          Tus modelos están controlados por terceros que pueden cambiar precios, limitar acceso o censurar respuestas. 
          La IA abierta no se negocia desde fuera — se ejecuta dentro.
        </p>
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
              Sin intermediarios
            </h3>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Sin llaves de API, sin límites de proveedor, sin apagones de terceros. 
              Tu infraestructura, tus reglas.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-accent)]">
              Coste predecible
            </h3>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Las APIs cloud cobran por token. A volumen medio-alto, el hardware propio es más barato. 
              Pagas una vez, usas siempre.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-accent)]">
              Control total
            </h3>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Elige el modelo, ajusta los parámetros, decide qué ejecutar. 
              Sin cambios de política unilaterales. Sin sorpresas.
            </p>
          </div>
        </div>
      </section>

      {/* OPEN WEIGHTS */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Modelos abiertos, rendimiento real</h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Los modelos open weights como Qwen, Gemma, Mistral y DeepSeek son la base de la IA descentralizada. 
            Con 128 GB de memoria unificada, el Strix Halo puede cargarlos completos sin swap. 
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
                  ["DeepSeek-V3", "671B (37B activos)", "MoE (MLA)", "Q4_K_M", "≈ 28"],
                  ["DeepSeek-R1", "671B (MoE)", "MoE (RA), RL", "Q4_K_M", "≈ 25"],
                  ["DeepSeek-V3.2", "685B (MoE)", "MoE (DSA)", "Q4_K_M", "≈ 30"],
                  ["DeepSeek-R1-Distill-Qwen 32B", "32B (densa)", "Dense", "Q4_K_M", "≈ 19"],
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

      {/* ESPECIFICACIONES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Hardware diseñado para IA local</h2>
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
        <p>Sovereign AI — hardware para IA local. Diseñado y fabricado en la UE.</p>
      </footer>
    </main>
  );
}
