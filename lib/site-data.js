export const navigation = [
  { label: "Home", href: "/" },
  { label: "Consultancy CRM", href: "/consultancy" },
  { label: "Coaching CRM", href: "/coaching" },
  { label: "Website Builder", href: "/eductrl-cms" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/knowledgebase" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const footerLinks = navigation.slice(1);

export const stats = [
  { value: "360°", label: "student profile visibility" },
  { value: "12+", label: "consultancy workflow modules" },
  { value: "3", label: "product lines in one ecosystem" },
  { value: "1", label: "central operating platform" }
];

export const consultancyFeatures = [
  { icon: "SM", title: "Student Management", text: "Track registrations, student details, course preferences, documents and applications from one record." },
  { icon: "SD", title: "Student Documents", text: "Give students a self-service upload flow and let admins download required files in a click." },
  { icon: "UA", title: "University Applications", text: "Create and manage applications by intake, course preference, workflow stage and assigned staff." },
  { icon: "LM", title: "Lead Management", text: "Capture leads, assign owners, schedule follow-ups and monitor the next action without losing momentum." },
  { icon: "AG", title: "Agents", text: "Support external agents with student submission, document uploads, commission tracking and payouts." },
  { icon: "CF", title: "Course Finder", text: "Maintain course and university data, import catalogs and help students discover better-fit programs." },
  { icon: "IV", title: "Invoices", text: "Issue invoices for students, universities and services while tracking status and payment history." },
  { icon: "SP", title: "Self Service Portal", text: "Students can update profile information, preferences, documents and application status themselves." },
  { icon: "FB", title: "Form Builder", text: "Create lead-gen forms, share links, embed on websites or use QR-based capture for offline campaigns." },
  { icon: "NT", title: "Notifications", text: "Send automated updates by email, SMS or WhatsApp to students and internal teams." },
  { icon: "CH", title: "Team Chat", text: "Keep staff, students and AI-assisted workflows connected through contextual communication." },
  { icon: "IM", title: "Import Data", text: "Bring over leads and student data from older systems through CSV-based migration workflows." }
];

export const coachingFeatures = [
  { icon: "BM", title: "Batch Management", text: "Create and organize batches by branch, mode, trainer, timing and schedule." },
  { icon: "SF", title: "Student Fees", text: "Track invoices, receipts, due amounts and payment communication with better visibility." },
  { icon: "AT", title: "Attendance", text: "Allow trainers to update attendance and notify students when they miss sessions." },
  { icon: "ST", title: "Student Panel", text: "Students can review progress, exams, ratings and course completion from a self-service view." },
  { icon: "TP", title: "Trainer Panel", text: "Trainers can manage class progress, attendance and direct student communication." },
  { icon: "OC", title: "Online Courses", text: "Bundle recorded lessons, digital content and course access into your institute workflow." }
];

export const cmsHighlights = [
  { icon: "LP", title: "Landing Pages", text: "Publish campaign-specific pages for destination marketing, webinars and lead capture." },
  { icon: "WF", title: "Website Forms", text: "Connect website inquiries directly to your CRM workflow with cleaner handoff." },
  { icon: "CF", title: "Course Discovery", text: "Highlight destinations, universities and popular courses with editable content blocks." },
  { icon: "BL", title: "Blog Publishing", text: "Support SEO growth with knowledge articles, updates and destination content." },
  { icon: "QR", title: "Campaign Assets", text: "Use embedded forms, QR codes and modular sections across marketing touchpoints." },
  { icon: "BR", title: "Brand Control", text: "Match your consultancy's voice, colors and offers with flexible page composition." }
];

export const useCases = [
  {
    tag: "Consultancy",
    title: "Study Abroad Consultancy CRM",
    text: "A workflow-heavy business needs organized lead, document and application management to scale without confusion.",
    href: "/consultancy"
  },
  {
    tag: "Coaching",
    title: "Training and Coaching Institute CRM",
    text: "Centralize batches, fees, attendance, trainers and student progress in a single operational system.",
    href: "/coaching"
  },
  {
    tag: "Marketing",
    title: "Education Website Builder",
    text: "Launch pages that turn campaigns and traffic into qualified consultation requests.",
    href: "/cms"
  }
];

export const clients = [
  "Global Pathways",
  "FutureBridge",
  "UniAxis",
  "StudyScope",
  "Campus Crest",
  "Northlane Edu",
  "Atlas Admit",
  "Skill Orbit"
];

export const pricingPlans = [
  {
    title: "Growth",
    price: "$6",
    caption: "per user/month · tailored for startups",
    features: ["Leads", "Students", "Applications", "Reports", "Student panel"]
  },
  {
    title: "Pro",
    price: "$8.50",
    caption: "per user/month · for growing teams",
    features: ["Everything in Growth", "Agents", "Form builder", "Staff workflows", "Referrals"],
    featured: true
  },
  {
    title: "Enterprise",
    price: "$10.80",
    caption: "per user/month · for advanced operations",
    features: ["Everything in Pro", "API access", "Email sync", "Automation", "Multi-business"]
  }
];

export const onPremisePlans = [
  {
    title: "Growth Self-Hosted",
    price: "$479",
    caption: "one-time license",
    features: ["Single domain", "Six months free support", "Hosted on your server"]
  },
  {
    title: "Pro Self-Hosted",
    price: "$599",
    caption: "one-time license",
    features: ["More advanced workflow coverage", "Ideal for growing teams", "Single domain"]
  },
  {
    title: "Enterprise Self-Hosted",
    price: "$719",
    caption: "one-time license",
    features: ["Full feature scope", "Enterprise control", "Self-managed deployment"],
    featured: true
  }
];

export const resources = [
  {
    type: "Knowledgebase",
    title: "Getting started with consultancy CRM",
    text: "Help articles for onboarding staff, defining pipeline stages and importing your existing data."
  },
  {
    type: "Blog",
    title: "How study abroad agencies can reduce application delays",
    text: "Operational insights around documents, communication flow and university coordination."
  },
  {
    type: "Guide",
    title: "Choosing between cloud and on-premise CRM",
    text: "A practical comparison for education businesses evaluating cost, control and maintenance."
  }
];

export const processSteps = [
  { title: "Capture & qualify", text: "Collect leads from web forms, campaigns, referrals and agent channels." },
  { title: "Counsel & convert", text: "Track counseling notes, student interests and next follow-up actions." },
  { title: "Apply & manage", text: "Create applications, monitor document completeness and update statuses." },
  { title: "Support & retain", text: "Keep students informed through notifications, portal access and team chat." }
];

export const contactDetails = [
  {
    label: "Location",
    value:
      "#99/1, 1st Floor, 1st Cross Rd, Ramarao Layout, Katriguppe, BSK 3rd Stage, Bengaluru, Karnataka - 560085, India"
  },
  { label: "Phone / WhatsApp", value: "+91-924-213-7092 / +91-974-197-8688" },
  { label: "Email", value: "info@eductrl.com" }
];
