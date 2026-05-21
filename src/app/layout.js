import {ReactNode} from "react"
export default function Layout({ children }) {
  
  return (
    <html style={{ margin: 0, padding: 0, height: '100%' }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0, minHeight: '100vh' }}>
        {children}
      </body>
    </html>
 )
}