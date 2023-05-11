import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { Roboto } from "next/font/google";import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <main className={roboto.className}>
      <Header />
      <Component {...pageProps} />
    </main>
    <Footer />
    </>
    
  );
}
