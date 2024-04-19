import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }) {
  return (
    <div id="root" className="d-flex flex-column">
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
}
