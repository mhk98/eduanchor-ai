"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CloneInteractions } from "@/components/clone-interactions";

export function SiteShell({ children }) {
  const pathname = usePathname();
  const isClonePage = [
    "/",
    "/consultancy",
    "/coaching",
    "/eductrl-cms",
    "/pricing",
    "/knowledgebase",
    "/blog",
    "/about",
    "/contact"
  ].includes(pathname);

  useEffect(() => {
    document.body.classList.toggle("clone-home-body", isClonePage);
    return () => {
      document.body.classList.remove("clone-home-body");
    };
  }, [isClonePage]);

  return (
    <>
      <CloneInteractions />
      {isClonePage ? null : <div className="site-bg" />}
      {isClonePage ? null : <Header />}
      <main>{children}</main>
      {isClonePage ? null : <Footer />}
    </>
  );
}
