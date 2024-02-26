import MainNav from "./main-nav";
import Head from "next/head";
import Script from "next/script";
import Footer from "./footer";

export default function Layout({ children, poppins }) {
  return (
    <>
      <Head>
        <title>Apostolic Sanctuary of Canada</title>
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
