import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sovereignai.example.com"),
  title: "Sovereign AI — Tu IA, tu hardware, sin nube",
  description:
    "Reserva el mini-PC Sovereign AI: AMD Strix Halo, 128GB de memoria unificada, IA local sin depender de la nube. Pre-reserva ahora y ayuda a que se fabrique.",
  openGraph: {
    title: "Sovereign AI — Tu IA, tu hardware, sin nube",
    description:
      "Mini-PC local para IA basado en AMD Strix Halo. Reserva la tuya antes de que termine la campaña.",
    images: [
      {
        url: "/images/hero-chassis.png",
        width: 1024,
        height: 768,
        alt: "Sovereign AI — chasis del mini-PC",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign AI — Tu IA, tu hardware, sin nube",
    description:
      "Mini-PC local para IA basado en AMD Strix Halo. Reserva la tuya antes de que termine la campaña.",
    images: ["/images/hero-chassis.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
