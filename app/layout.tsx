import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageToggle from "./components/atoms/LanguageToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Miguel Solis | Desarrollador Full Stack',
  description: 'Programador Full Stack con experiencia en el desarrollo de aplicaciones web escalables y centradas en el usuario. Estudiante de Ingeniería de Software en la Universidad Nacional Mayor de San Marcos (quinto superior). Apasionado por crear soluciones eficientes, trabajar en equipo y aprender continuamente.',
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='es' className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden`}>
      <body className='antialiased'>
        <main>{children}</main>
        <LanguageToggle />
      </body>
    </html>
  );
}
