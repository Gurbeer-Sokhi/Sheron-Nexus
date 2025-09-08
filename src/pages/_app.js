import "@/app/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { DefaultSeo } from "next-seo";
import SEO from "@/next-seo.config";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <>
        <DefaultSeo {...SEO} />
        <div className="transition-colors duration-500">
          <Component {...pageProps} />
        </div>
      </>
    </ThemeProvider>
  );
}


