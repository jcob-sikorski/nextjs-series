export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

// Note: nextJS automatically creates that folder when we create the root route

// Note: layout is the UI that is shared between multiple pages 
// in the app - it typically consists of header, content and footer

// Note: you can define a layout by default exporting React 
//       component from layout.tsx
//       That component should accept a children prop that will be 
//       populated with a child page during rendering.

// Note: this particular layout file in the root folder serves as the top-most layout.
//       It is mandatory for all NextJS applications. It's regenerated if deleted.

// Note: when it comes to nested layouts the root layout is rendered first for each page
export default function RootLayout({
  children, // Note: this will be replaced by a child component during rendering.
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          <p>Header</p>
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "1rem",
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}