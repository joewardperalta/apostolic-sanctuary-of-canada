import MainNav from "./main-nav";
import Head from "next/head";
import Script from "next/script";
import Footer from "./footer";

export default function Layout({ children, poppins }) {
  return (
    <>
      <Head>
        <title>Apostolic Sanctuary of Canada</title>
        <link rel="icon" href="/church_logo.ico" sizes="any" />
        <meta
          name="google-site-verification"
          content="JCL1dhKLXxs3zKzwTxV2BgRo2tTT2MTWUJRtkTZJDmE"
        />
      </Head>
      <header className={poppins.className}>
        <MainNav />
      </header>
      <main className={poppins.className}>{children}</main>
      <footer className={poppins.className}>
        <Footer />
      </footer>
    </>
  );
}
