import MainNav from "./main-nav";
import Head from "next/head";
import Script from "next/script";

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
    </>
  );
}
