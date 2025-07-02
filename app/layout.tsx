import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Posto 13 GNV - Instalação e Manutenção de Sistemas GNV no Rio de Janeiro",
  description:
    "Especialistas em instalação, conversão, inspeção e manutenção de sistemas GNV (Gás Natural Veicular) no Rio de Janeiro. Localizado na Curicica, oferecemos serviços de qualidade com garantia total.",
  keywords:
    "GNV, Gás Natural Veicular, instalação GNV, conversão GNV, inspeção GNV, manutenção GNV, Rio de Janeiro, Curicica, Posto 13",
  authors: [{ name: "Posto 13 GNV" }],
  creator: "Posto 13 GNV",
  publisher: "Posto 13 GNV",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://posto13gnv.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Posto 13 GNV - Especialistas em Sistemas GNV",
    description: "Instalação, conversão e manutenção de sistemas GNV no Rio de Janeiro. Qualidade e garantia total.",
    url: "https://posto13gnv.com.br",
    siteName: "Posto 13 GNV",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Posto 13 GNV - Especialistas em Sistemas GNV",
    description: "Instalação, conversão e manutenção de sistemas GNV no Rio de Janeiro.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MKFZ6QVP');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${inter.className} bg-white`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MKFZ6QVP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}
