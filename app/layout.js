import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading"
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata = {
  title: "EduAnchor | Study Abroad Consultant CRM",
  description:
    "Modern multi-page Next.js website for study abroad consultancy CRM, coaching CRM, and website builder services."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="https://www.eductrl.com/images/hero1.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://www.eductrl.com/assets/images/favicon.png" />
        <link href="https://www.eductrl.com/assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://www.eductrl.com/assets/plugins/select2/dist/css/select2.min.css" rel="stylesheet" />
        <link href="https://www.eductrl.com/css/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="https://www.eductrl.com/css/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="https://www.eductrl.com/css/ckeditor-frontend.css?v=1.1" rel="stylesheet" />
        <link rel="stylesheet" href="https://www.eductrl.com/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://www.eductrl.com/css/animate.css" />
        <link rel="stylesheet" href="https://www.eductrl.com/css/icofonts.css" />
        <link rel="stylesheet" href="https://www.eductrl.com/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://www.eductrl.com/css/owlcarousel.min.css" />
        <link rel="stylesheet" href="https://www.eductrl.com/css/magnific-popup.css" />
        <link rel="stylesheet" href="https://www.eductrl.com/css/style.css?v=4" />
        <link rel="stylesheet" href="https://www.eductrl.com/css/responsive.css?v=4" />
      </head>
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
