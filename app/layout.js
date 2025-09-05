import "./globals.css"

export const metadata = { title: "NAIN STUDIO" }

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  )
}
