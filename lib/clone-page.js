import fs from "fs";
import path from "path";

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
  "https://www.eductrl.com/resources": "/resources",
};

export function getClonedBodyHtml(fileName) {
  const filePath = path.join(process.cwd(), "data", fileName);
  const html = fs.readFileSync(filePath, "utf8");
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let rawBody = bodyMatch ? bodyMatch[1] : html;

  rawBody = rawBody
    .replace(
      /<div class="modal fade" id="enquiryModal"[\s\S]*?(?=<div class="tw-top-bar|<header>)/i,
      "",
    )
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    .replace(/ className=/g, " class=")
    .replaceAll("https://www.eductrl.com/images/eductrl-logo.png", "/images/logo.png");

  for (const [from, to] of Object.entries(INTERNAL_ROUTE_MAP)) {
    rawBody = rawBody.replaceAll(`href="${from}"`, `href="${to}"`);
    rawBody = rawBody.replaceAll(`href="${from}/"`, `href="${to}"`);
  }

  rawBody = rawBody
    .replaceAll("EduCtrl", "EduAnchor")
    .replaceAll("EDUCTRL", "EDUANCHOR");

  return rawBody;
}
