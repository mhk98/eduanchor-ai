"use client";

import Script from "next/script";

export function CloneScripts() {
  return (
    <>
      <Script
        src="https://www.eductrl.com/assets/plugins/jquery/jquery.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.eductrl.com/assets/plugins/bootstrap/js/popper.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.eductrl.com/assets/plugins/bootstrap/js/bootstrap.min.js"
        strategy="afterInteractive"
      />
      <Script src="https://www.eductrl.com/js/owl-carousel.2.3.0.min.js" strategy="afterInteractive" />
      <Script src="https://www.eductrl.com/js/jquery.magnific.popup.js" strategy="afterInteractive" />
      <Script src="https://www.eductrl.com/js/wow.min.js" strategy="afterInteractive" />
      <Script src="https://www.eductrl.com/js/main.js" strategy="afterInteractive" />
    </>
  );
}
