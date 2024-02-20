import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/styles.scss";
import Layout from "@/components/layout";
import { Poppins } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout poppins={poppins}>
        <Component {...pageProps} />
      </Layout>

      <Script src="https://kit.fontawesome.com/d924478ec2.js" />
    </>
  );
}
