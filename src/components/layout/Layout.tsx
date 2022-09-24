import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Nav />
      <div className="container mx-auto relative h-auto">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
