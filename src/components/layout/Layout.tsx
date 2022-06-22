import Nav from "./Nav";
import Footer from "./Footer";

//* Layout commun à tout le site

export default function Layout({ children }: any) {
  return (
    <>
    <Nav />
    <div className="container mx-auto relative h-auto z-0">
      <main >{children}</main>
    </div>
      <Footer />
    </>
  );
}
