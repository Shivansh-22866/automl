import Navbar from "@/components/shared/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar/>
    <main>{children}</main>
    </>
  );
}
