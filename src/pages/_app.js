import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { Poppins } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'] ,weight: ['500'],})
export default function App({ Component, pageProps }) {
  return (
  <ThemeProvider>
    <main className={poppins.className}>
    <Component {...pageProps}  />
    </main>
        
  </ThemeProvider>
  )
}
