'use client'
import Footer from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (    
      <div>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar backend={false}/>

          {children}

          <Footer />
        </ThemeProvider>
      </div>
    );
}
