import Image from "next/image";

const GOAL_UNITS = 100;
const RESERVED_UNITS = 0;
const PROGRESS = RESERVED_UNITS / GOAL_UNITS;

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
          Sovereign AI es un mini-PC diseñado y fabricado en la UE, basado en
          AMD Strix Halo con 128&nbsp;GB de memoria unificada. Procesamiento de
          IA local sin depender de infraestructura cloud extranjera.
        </p>

        <div className="mt-10 w-full max-w-2xl">
          {/* LCP image: eager, high priority, explicit dimensions */}
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
          Reserva la tuya — desde 49&euro;
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
            El 95% de la capacidad de inferencia de IA en Europa reside en
            centros de datos de Estados Unidos y China. Esto crea una
            dependencia estratégica que la UE AI Act y las nuevas normativas de
            soberanía digital intentan corregir — pero la regulación no sirve de
            nada sin hardware propio.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold text-[var(--color-accent)]">
                Soberanía de datos
              </h3>
              <p className="mt-2 text-[var(--color-text-muted)]">
                Sanidad, justicia y administración pública necesitan que los
                datos nunca salgan de la UE. La inferencia local es la única
                forma de cumplir con el RGPD y la EU AI Act sin excepciones.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-accent)]">
                Independencia tecnológica
              </h3>
              <p className="mt-2 text-[var(--color-text-muted)]">
                Sin llaves de API de proveedores extranjeros. Sin riesgo de
                sanciones, bloqueos geopolíticos o cambios de términos de
                servicio unilaterales. Infraestructura propia, control propio.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-accent)]">
                Cadena de suministro europea
              </h3>
              <p className="mt-2 text-[var(--color-text-muted)]">
                Fabricado en la UE con componentes europeos. Diseño europeo,
                ensamblaje europeo, soporte europeo. Cada unidad fortalece la
                base industrial tecnológica del continente.
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
              Sanidad, legal y finanzas necesitan que los datos nunca salgan de
              su red. Local significa local de verdad.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-accent)]">
              EU AI Act
            </h3>
            <p className="mt-2 text-[var(--color-text-muted)]">
              La regulación empuja a sectores enteros hacia infraestructura
              on-premise. Antic&iacute;pate.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-accent)]">
              Coste a largo plazo
            </h3>
            <p className="mt-2 text-[var(--color-text-muted)]">
              El punto de equilibrio entre cloud APIs y hardware propio llega
              antes de lo que crees.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-accent)]">
              Sin dependencias
            </h3>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Sin llaves de API, sin límites de proveedor, sin apagones de
              terceros.
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
                  ["Memoria", "128 GB LPDDR5X-8000 unificada"],
                  ["GPU", "Radeon 8060S integrada"],
                  ["Rendimiento", "70B Q4 ≈ 18–22 tok/s · 120B MoE ≈ 53 tok/s"],
                  ["Almacenamiento", "NVMe Gen4, actualizable"],
                  ["Ruido", "< 35 dB en reposo, < 45 dB en carga sostenida"],
                  ["Software", "Ubuntu 24.04 + ROCm/CUDA stack preinstalado"],
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
          Necesitamos {GOAL_UNITS} reservas confirmadas para arrancar la
          primera serie de fabricación. Depósito reembolsable de 49&euro;. Se
          cobra el resto solo si alcanzamos la meta.
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
      <section
        id="reserva"
        className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-6 py-24"
      >
        <div className="mx-auto max-w-md">
          <h2 className="text-2xl font-bold sm:text-3xl">Reserva la tuya</h2>
          <p className="mt-3 text-[var(--color-text-muted)]">
            Depósito reembolsable de 49&euro;. Se cobra el resto solo si
            alcanzamos la meta de fabricación.
          </p>

          <form action="/api/reserve" method="POST" className="mt-8 space-y-5">
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
              <p className="error-msg mt-1 hidden text-sm text-red-400">
                Este campo es obligatorio.
              </p>
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
              <p className="error-msg mt-1 hidden text-sm text-red-400">
                Introduce un email v&aacute;lido.
              </p>
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
                Acepto la pol&iacute;tica de privacidad y los t&eacute;rminos
                de la reserva.
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-[var(--color-accent)] px-6 py-4 text-base font-semibold text-black transition hover:opacity-90"
            >
              Reservar por 49&euro;
            </button>
          </form>
        </div>
      </section>

      <footer className="px-6 py-12 text-center text-sm text-[var(--color-text-muted)]">
        <p>Sovereign AI — dise&ntilde;ado y fabricado en la UE. Hardware europeo para soberanía digital europea.</p>
      </footer>
    </main>
  );
}
