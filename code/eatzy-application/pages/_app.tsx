import "../app/globals.css";
import "../app/layout.css";
import type { AppProps } from "next/app";
import Layout from "components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
