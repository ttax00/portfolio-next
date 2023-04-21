import './globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Work-oriented landing page using beta nextjs app router',
  icons: {
	icon:"/icon.jpg"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
