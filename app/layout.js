// app/layout.js
import "./globals.css"

export const metadata = { title: "NAIN STUDIO" }
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  )
}
