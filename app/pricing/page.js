import Script from "next/script";
import { getClonedBodyHtml } from "@/lib/clone-page";

export const metadata = {
  title: "Pricing | EduCtrl Clone"
};

export default function PricingPage() {
  const clonedHtml = getClonedBodyHtml("eductrl-pricing.html");

  return (
    <>
      <div
        className="eductrl-clone-page"
        dangerouslySetInnerHTML={{ __html: clonedHtml }}
      />

      <Script src="https://www.eductrl.com/assets/plugins/jquery/jquery.min.js" strategy="afterInteractive" />
      <Script src="https://www.eductrl.com/assets/plugins/bootstrap/js/popper.min.js" strategy="afterInteractive" />
      <Script src="https://www.eductrl.com/assets/plugins/bootstrap/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="https://www.eductrl.com/js/owl-carousel.2.3.0.min.js" strategy="afterInteractive" />
      <Script src="https://www.eductrl.com/js/jquery.magnific.popup.js" strategy="afterInteractive" />
      <Script src="https://www.eductrl.com/js/wow.min.js" strategy="afterInteractive" />
      <Script src="https://www.eductrl.com/js/smoothscroll.js" strategy="afterInteractive" />
      <Script src="https://www.eductrl.com/js/main.js" strategy="afterInteractive" />
      <Script id="pricing-interactions" strategy="afterInteractive">{`
        (function initPricingInteractions() {
          function setupTooltips() {
            if (typeof window.bootstrap === "undefined") return;
            var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
            [].slice.call(tooltipTriggerList).forEach(function (tooltipTriggerEl) {
              new window.bootstrap.Tooltip(tooltipTriggerEl);
            });
          }

          function showTab(toggle) {
            if (!toggle || typeof window.bootstrap === "undefined") return;
            var instance = window.bootstrap.Tab.getOrCreateInstance(toggle);
            instance.show();
          }

          window.changeCurrency = function changeCurrency() {
            if (typeof window.jQuery === "undefined") return;
            window.jQuery('.usDollarAmount').toggle();
            window.jQuery('.inrAmount').toggle();
          };

          window.usersClick = function usersClick(n) {
            switch (n) {
              case "tenusers":
                document.getElementById("userDollarAmountone").innerHTML = "479";
                document.getElementById("userinrAmountone").innerHTML = "39,999";
                document.getElementById("userDollarAmounttwo").innerHTML = "599";
                document.getElementById("userinrAmounttwo").innerHTML = "49,999";
                document.getElementById("userDollarAmountthree").innerHTML = "719";
                document.getElementById("userinrAmountthree").innerHTML = "59,999";
                break;
              case "twentyusers":
                document.getElementById("userDollarAmountone").innerHTML = "659";
                document.getElementById("userinrAmountone").innerHTML = "54,999";
                document.getElementById("userDollarAmounttwo").innerHTML = "779";
                document.getElementById("userinrAmounttwo").innerHTML = "64,999";
                document.getElementById("userDollarAmountthree").innerHTML = "899";
                document.getElementById("userinrAmountthree").innerHTML = "74,999";
                break;
              default:
                document.getElementById("userDollarAmountone").innerHTML = "779";
                document.getElementById("userinrAmountone").innerHTML = "64,999";
                document.getElementById("userDollarAmounttwo").innerHTML = "899";
                document.getElementById("userinrAmounttwo").innerHTML = "74,999";
                document.getElementById("userDollarAmountthree").innerHTML = "1,019";
                document.getElementById("userinrAmountthree").innerHTML = "84,999";
                break;
            }
          };

          function updateTooltip(elementId, amount, duration) {
            if (typeof window.jQuery === "undefined") return;
            var tooltipText = 'Total: $' + (amount * duration).toFixed(2) + ' USD per user for ' + duration + ' months';
            window.jQuery('[data-bs-custom-class="' + elementId + '"]').tooltip("dispose");
            window.jQuery('[data-bs-custom-class="' + elementId + '"]').tooltip({
              title: tooltipText,
              html: true
            });
          }

          function updateInrTooltip(elementId, amount, duration) {
            if (typeof window.jQuery === "undefined") return;
            var tooltipText = 'Total: &#x20B9; ' + (amount * duration).toFixed(2) + ' INR per user for ' + duration + ' months';
            window.jQuery('[data-bs-custom-class="' + elementId + '"]').tooltip("dispose");
            window.jQuery('[data-bs-custom-class="' + elementId + '"]').tooltip({
              title: tooltipText,
              html: true
            });
          }

          window.durationClick = function durationClick(m) {
            var duration;
            var growthAmount;
            var proAmount;
            var enterpriseAmount;
            var inrgrowAmount;
            var inrproAmount;
            var inrenterpriseAmount;

            switch (m) {
              case "threemonths":
                duration = 3;
                growthAmount = 12;
                proAmount = 17;
                enterpriseAmount = 21.60;
                inrgrowAmount = 999;
                inrproAmount = 1399;
                inrenterpriseAmount = 1799;
                break;
              case "sixmonths":
                duration = 6;
                growthAmount = 9;
                proAmount = 12.75;
                enterpriseAmount = 16.20;
                inrgrowAmount = 749;
                inrproAmount = 1049;
                inrenterpriseAmount = 1349;
                break;
              case "oneyear":
                duration = 12;
                growthAmount = 6;
                proAmount = 8.50;
                enterpriseAmount = 10.80;
                inrgrowAmount = 499;
                inrproAmount = 699;
                inrenterpriseAmount = 899;
                break;
              default:
                duration = 24;
                growthAmount = 5;
                proAmount = 7.80;
                enterpriseAmount = 9.90;
                inrgrowAmount = 449;
                inrproAmount = 649;
                inrenterpriseAmount = 829;
                break;
            }

            document.getElementById("usDollarAmountone").innerHTML = growthAmount;
            document.getElementById("inrAmountone").innerHTML = inrgrowAmount;
            document.getElementById("usDollarAmounttwo").innerHTML = proAmount;
            document.getElementById("inrAmounttwo").innerHTML = inrproAmount;
            document.getElementById("usDollarAmountthree").innerHTML = enterpriseAmount;
            document.getElementById("inrAmountthree").innerHTML = inrenterpriseAmount;

            updateTooltip("usdgrowth-tooltip", growthAmount, duration);
            updateTooltip("usdpro-tooltip", proAmount, duration);
            updateTooltip("usdenterprise-tooltip", enterpriseAmount, duration);
            updateInrTooltip("inrgrowth-tooltip", inrgrowAmount, duration);
            updateInrTooltip("inrpro-tooltip", inrproAmount, duration);
            updateInrTooltip("inrenterprise-tooltip", inrenterpriseAmount, duration);
          };

          function bindTabClicks() {
            document.querySelectorAll('[data-bs-toggle="tab"]').forEach(function (toggle) {
              toggle.addEventListener("click", function (event) {
                var href = toggle.getAttribute("href");
                if (href && href.startsWith("#")) {
                  event.preventDefault();
                  showTab(toggle);
                }
              });
            });
          }

          function init() {
            setupTooltips();
            bindTabClicks();
          }

          if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", init);
          } else {
            init();
          }
        })();
      `}</Script>
    </>
  );
}
