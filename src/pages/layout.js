import "@/styles/pages/home.module.scss";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <h1>Hello</h1>
        {children}
      </main>
      <Footer />
    </>
  );
}
