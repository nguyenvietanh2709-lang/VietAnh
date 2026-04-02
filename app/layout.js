export const metadata = {
  title: 'Portfolio Clone',
  description: 'W3Schools Portfolio template clone built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
