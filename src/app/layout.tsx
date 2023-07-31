"use client";
import { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import Topbar from "./components/topbar";
import { AuthProvider } from "./contexts/authContext";
import { SidebarProvider, useSidebar } from "./contexts/sidebarContext";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import { StudentsProvider } from "./contexts/studentsContext";

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <AuthProvider>
          <StudentsProvider>
            <SidebarProvider>
              {isLoginPage ? (
                <div>{children}</div>
              ) : (
                <div className="flex">
                  <div className={!isSidebarOpen ? "w-0" : "w-72"}>
                    <Sidebar
                      isSidebarOpen={isSidebarOpen}
                      toggleSidebar={toggleSidebar}
                    />
                  </div>
                  <div className={!isSidebarOpen ? "flex-grow" : "flex-grow"}>
                    <Topbar />
                    {children}
                  </div>
                </div>
              )}
            </SidebarProvider>
          </StudentsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
