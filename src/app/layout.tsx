"use client";
import { useState } from "react";
import Sidebar from "./components/sidebar";
import Topbar from "./components/topbar";
import { AuthProvider } from "./contexts/authContext";
import { SidebarProvider } from "./contexts/sidebarContext";
import { Montserrat } from "next/font/google";
import { usePathname } from 'next/navigation'
import "./globals.css";
 
const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()

  const isLoginPage = pathname === "/login";

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <AuthProvider>
          <SidebarProvider>
            {isLoginPage ? (
              <div>{children}</div>
            ) : (
              <div className="flex">
                <div className="w-72">
                  <Sidebar />
                </div>
                <div className="flex-grow">
                  <Topbar />
                  {children}
                </div>
              </div>
            )}
          </SidebarProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

