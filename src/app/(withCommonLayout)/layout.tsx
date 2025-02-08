import { getServerSession } from "next-auth";

// import "./globals.css";

import { authOptions } from "@/utils/authOptions";
import Providers from "@/lib/Providers";

import Navbar from "@/components/shared/Navbar";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import { ActiveSectionContextProvider } from "@/context/active-section-context";

export default async function RootLayout({}: // children,
Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <Providers>
      {/* ONLY SHOWING NAVBAR WHEN NOT IN DASHBOARD, IF THAT'S NOT THE CASE COMMENT OUT, AND UNCOMMENT IN MAIN layout.tsx */}
      <ActiveSectionContextProvider>
        <Navbar session={session} />
        <section id="top">
          <Header />
        </section>

        <section id="about">
          <AboutMe />
        </section>
        {/* <div className="min-h-screen w-[90%] mx-auto">{children}</div> */}
      </ActiveSectionContextProvider>
    </Providers>
  );
}
