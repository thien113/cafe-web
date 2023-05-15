import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { Roboto,Playfair_Display } from "next/font/google";import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <main className={roboto.className}>
    <style jsx global>{`
        :root {
          --playdairDisplay-font: ${playfairDisplay.style.fontFamily};
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
    </main>
    <Footer />
    </>
    
  );
}
