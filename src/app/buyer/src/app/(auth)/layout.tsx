import Header from "../../components/_layout/Header";

export default function EmptyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <>
      <div className="max-w-[600px] mx-auto bg-white min-h-screen flex flex-col relative pb-14">
        <Header />
        {children} 
      </div>
    </>
  );
}
