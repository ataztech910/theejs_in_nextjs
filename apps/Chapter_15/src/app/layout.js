import './globals.scss';
export const revalidate = 3;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
          {children}
      </body>
    </html>
  )
}
