// import '../../globals.scss'

export const metadata = {
  title: 'Enter Site Title',
  description: 'Enter site description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
