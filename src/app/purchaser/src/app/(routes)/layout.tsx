import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className={cn("max-w-md mx-auto bg-white min-h-screen flex flex-col border border-gray-200 ")}
      >
        {children}
      </div>
    </>
  );
}
