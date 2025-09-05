export const metadata = { title: "NAIN STUDIO" }

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body style={{ backgroundColor: "black", margin: 0 }}>{children}</body>
    </html>
  )
}
