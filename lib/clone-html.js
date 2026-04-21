const INTERNAL_ROUTE_MAP = {
  "https://www.eductrl.com": "/",
  "https://www.eductrl.com/": "/",
  "https://www.eductrl.com/consultancy": "/consultancy",
  "https://www.eductrl.com/coaching": "/coaching",
  "https://www.eductrl.com/eductrl-cms": "/eductrl-cms",
  "https://www.eductrl.com/pricing": "/pricing",
  "https://www.eductrl.com/pricing/": "/pricing",
  "https://www.eductrl.com/knowledgebase": "/knowledgebase",
  "https://www.eductrl.com/knowledgebase/": "/knowledgebase",
  "https://www.eductrl.com/blog": "/blog",
  "https://www.eductrl.com/blog/": "/blog",
  "https://www.eductrl.com/about": "/about",
  "https://www.eductrl.com/contact": "/contact",
  "https://www.eductrl.com/resources": "/resources"
};

export function normalizeCloneHtml(rawHtml) {
  let normalizedHtml = rawHtml
    .replace(
      /<div class="modal fade" id="enquiryModal"[\s\S]*?(?=<div class="tw-top-bar|<header>)/i,
      ""
    )
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    .replace(/ className=/g, " class=")
    .replaceAll("https://www.eductrl.com/images/eductrl-logo.png", "/images/logo.png");

  for (const [from, to] of Object.entries(INTERNAL_ROUTE_MAP)) {
    normalizedHtml = normalizedHtml.replaceAll(`href="${from}"`, `href="${to}"`);
    normalizedHtml = normalizedHtml.replaceAll(`href="${from}/"`, `href="${to}"`);
  }

  return normalizedHtml
    .replaceAll("EduCtrl", "EduAnchor")
    .replaceAll("EDUCTRL", "EDUANCHOR");
}
