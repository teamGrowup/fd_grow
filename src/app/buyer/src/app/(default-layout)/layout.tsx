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
      <div id="commonLayoutContainer" className="max-w-[600px] mx-auto bg-[#ffffff] min-h-screen flex flex-col relative pb-14">
        <Header />
        {children}
        <Footer />
        <TabBar />
      </div>
    </>
  );
}
