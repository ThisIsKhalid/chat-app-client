import Footer from "@/components/view/Footer/Footer";
import Navbar from "@/components/view/Navbar/Navbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
