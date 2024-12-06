import Footer from "../../components/_layout/Footer";
import Header from "../../components/_layout/Header";
import TabBar from "../../components/_layout/TabBar";


export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div id="container" className="max-w-[600px] mx-auto bg-[#f5f5f5] min-h-screen flex flex-col relative pb-14">
        <Header />
        {children}
        <Footer />
        <TabBar />
      </div>
    </>
  );
}
