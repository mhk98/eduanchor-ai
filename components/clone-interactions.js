"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const CLONE_PATHS = new Set([
  "/",
  "/consultancy",
  "/coaching",
  "/eductrl-cms",
  "/pricing",
  "/knowledgebase",
  "/blog",
  "/about",
  "/contact"
]);

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

const DEMO_INITIAL_STATE = {
  name: "",
  company: "",
  email: "",
  phone: "",
  city: "",
  country: "",
  course: "",
  message: ""
};

function getTrackingContext() {
  if (typeof window === "undefined") {
    return {};
  }

  return window.eduAnchorTracking?.getContext?.() || {};
}

function createEventId(prefix) {
  if (typeof window === "undefined") {
    return `${prefix}_${Date.now()}`;
  }

  return (
    window.eduAnchorTracking?.createEventId?.(prefix) ||
    `${prefix}_${Date.now()}`
  );
}

function trackBrowserConversion(eventName, eventId) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  window.fbq("track", eventName, {}, { eventID: eventId });
}

async function postJson(path, payload) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || "Request failed");
  }

  return data;
}

export function CloneInteractions() {
  const pathname = usePathname();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoForm, setDemoForm] = useState(DEMO_INITIAL_STATE);
  const [demoSubmitting, setDemoSubmitting] = useState(false);
  const [demoFeedback, setDemoFeedback] = useState({
    type: "",
    message: ""
  });
  const [demoCompleted, setDemoCompleted] = useState(false);

  useEffect(() => {
    if (isDemoModalOpen) {
      document.body.classList.add("modal-open");
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px";
      if (!document.querySelector(".modal-backdrop")) {
        const backdrop = document.createElement("div");
        backdrop.className = "modal-backdrop fade show";
        document.body.appendChild(backdrop);
      }
    } else {
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.querySelectorAll(".modal-backdrop").forEach((element) => {
        element.remove();
      });
    }

    return () => {
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.querySelectorAll(".modal-backdrop").forEach((element) => {
        element.remove();
      });
    };
  }, [isDemoModalOpen]);

  useEffect(() => {
    if (!CLONE_PATHS.has(pathname)) {
      return;
    }

    function decorateTrackingTargets() {
      document.querySelectorAll("button, a").forEach((element) => {
        const text = (element.textContent || "").trim().toLowerCase();
        const href = element.getAttribute("href") || "";

        if (!element.getAttribute("data-track")) {
          if (text.includes("free demo") || text.includes("request demo")) {
            element.setAttribute("data-track", "free_demo_click");
            element.setAttribute("data-track-label", "Free Demo");
          } else if (
            text === "contact" ||
            text.includes("contact us") ||
            href.includes("/contact")
          ) {
            element.setAttribute("data-track", "contact_click");
            element.setAttribute("data-track-label", "Contact");
          }
        }
      });
    }

    function openDrawer() {
      document.querySelectorAll(".offcanvas-wrapper").forEach((element) => {
        element.classList.add("active");
      });
      document.querySelectorAll(".offcanvas-menu-overlay").forEach((element) => {
        element.classList.add("menu-show");
      });
      document.body.classList.add("clone-drawer-open");
    }

    function closeDrawer() {
      document.querySelectorAll(".offcanvas-wrapper").forEach((element) => {
        element.classList.remove("active");
      });
      document.querySelectorAll(".offcanvas-menu-overlay").forEach((element) => {
        element.classList.remove("menu-show");
      });
      document.body.classList.remove("clone-drawer-open");
    }

    function forceOpenModal() {
      setDemoFeedback({ type: "", message: "" });
      setDemoCompleted(false);
      setIsDemoModalOpen(true);
    }

    function forceCloseModal() {
      setIsDemoModalOpen(false);
    }

    function resetModalState() {
      setDemoForm(DEMO_INITIAL_STATE);
      setDemoFeedback({ type: "", message: "" });
      setDemoCompleted(false);
      forceCloseModal();
    }

    async function submitContactForm() {
      const name = document.querySelector("#c_name")?.value?.trim() || "";
      const email = document.querySelector("#c_email")?.value?.trim() || "";
      const phone = document.querySelector("#c_phone")?.value?.trim() || "";
      const subject = document.querySelector("#c_subject")?.value?.trim() || "";
      const message = document.querySelector("#c_message")?.value?.trim() || "";
      const feedback = document.querySelector("#returnmessage");
      const button = document.querySelector("#contact-form-btn");

      if (!name || !email || !phone || !message) {
        if (feedback) {
          feedback.innerHTML = "<span style='color:red;'>Please fill all mandatory fields.</span>";
        }
        return;
      }

      const eventId = createEventId("contact_submit");

      try {
        if (button) {
          button.setAttribute("disabled", "true");
          button.textContent = "Sending...";
        }

        if (feedback) {
          feedback.innerHTML = "";
        }

        await postJson("/api/v1/contact/submit", {
          name,
          email,
          phone,
          subject,
          message,
          source: "contact_page",
          eventName: "contact_submit",
          eventId,
          ...getTrackingContext()
        });

        trackBrowserConversion("Contact", eventId);
        document.querySelector("#contact-form")?.reset();

        if (feedback) {
          feedback.innerHTML = "<span style='color:#047c12;'>Your message is sent!</span>";
        }
      } catch (error) {
        if (feedback) {
          feedback.innerHTML =
            "<span style='color:red;'>Error occured. Please use alternative contact method.</span>";
        }
      } finally {
        if (button) {
          button.removeAttribute("disabled");
          button.textContent = "SEND";
        }
      }
    }

    function handleClick(event) {
      const drawerToggle = event.target.closest(".tw-menu-bar");
      if (drawerToggle) {
        event.preventDefault();
        openDrawer();
        return;
      }

      const drawerClose = event.target.closest(".menu-close-btn, .offcanvas-menu-overlay");
      if (drawerClose) {
        event.preventDefault();
        closeDrawer();
        return;
      }

      const modalOpen = event.target.closest('[data-toggle="modal"][data-target="#enquiryModal"]');
      if (modalOpen) {
        event.preventDefault();
        forceOpenModal();
        return;
      }

      const modalClose = event.target.closest(".clone-demo-modal .close, .clone-demo-modal-backdrop");
      if (modalClose) {
        event.preventDefault();
        forceCloseModal();
        return;
      }

      const contactSubmit = event.target.closest("#contact-form-btn");
      if (contactSubmit) {
        event.preventDefault();
        submitContactForm();
      }
    }

    function handleSubmit(event) {
      const contactForm = event.target.closest("#contact-form");
      if (contactForm) {
        event.preventDefault();
        submitContactForm();
      }
    }

    function handleKeydown(event) {
      if (event.key === "Escape") {
        closeDrawer();
        forceCloseModal();
      }
    }

    decorateTrackingTargets();
    resetModalState();

    document.addEventListener("click", handleClick, true);
    document.addEventListener("submit", handleSubmit, true);
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("submit", handleSubmit, true);
      document.removeEventListener("keydown", handleKeydown);
      closeDrawer();
      resetModalState();
    };
  }, [pathname]);

  async function handleDemoSubmit(event) {
    event.preventDefault();

    if (
      !demoForm.name ||
      !demoForm.company ||
      !demoForm.email ||
      !demoForm.phone ||
      !demoForm.city ||
      !demoForm.country ||
      !demoForm.course
    ) {
      setDemoFeedback({
        type: "error",
        message: "Please fill all mandatory fields."
      });
      return;
    }

    const eventId = createEventId("free_demo_submit");

    try {
      setDemoSubmitting(true);
      setDemoFeedback({ type: "", message: "" });

      await postJson("/api/v1/contact/free-demo", {
        name: demoForm.name,
        company: demoForm.company,
        email: demoForm.email,
        phone: demoForm.phone,
        course: demoForm.course,
        message: demoForm.message,
        city: demoForm.city,
        country: demoForm.country,
        source: "free_demo_modal",
        eventName: "free_demo_submit",
        eventId,
        ...getTrackingContext()
      });

      trackBrowserConversion("Lead", eventId);
      setDemoCompleted(true);
      setDemoForm(DEMO_INITIAL_STATE);
    } catch (error) {
      setDemoFeedback({
        type: "error",
        message: error.message || "Something went wrong. Please try again."
      });
    } finally {
      setDemoSubmitting(false);
    }
  }

  if (!CLONE_PATHS.has(pathname)) {
    return null;
  }

  return (
    <>
      {isDemoModalOpen ? (
        <div className="clone-demo-modal-root">
          <div className="clone-demo-modal-backdrop" />
          <div
            className="clone-demo-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="clone-demo-title"
          >
            <div className="clone-demo-header">
              <h5 id="clone-demo-title">Request Demo</h5>
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={() => setIsDemoModalOpen(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="clone-demo-body">
              {demoCompleted ? (
                <div className="clone-demo-success">
                  <h2>Thank You!</h2>
                  <p>
                    Our team will be in touch shortly to arrange your personalized demo.
                  </p>
                  <a
                    href="https://demo.eductrl.com/cn4"
                    className="text-primary font-weight-bold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://demo.eductrl.com/cn4
                  </a>
                  <div className="clone-demo-credentials">
                    <p>
                      <strong>Admin Login:</strong> admin@demo.com / 123456
                    </p>
                    <p>
                      <strong>Student Login:</strong> student@demo.com / 123456
                    </p>
                    <p>
                      <strong>Staff Login:</strong> staff@demo.com / 123456
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <p>Share your details to access Software Demo</p>
                  <form className="clone-demo-form" onSubmit={handleDemoSubmit}>
                    <div className="clone-demo-grid">
                      <input
                        type="text"
                        placeholder="Your Name *"
                        value={demoForm.name}
                        onChange={(event) =>
                          setDemoForm((current) => ({
                            ...current,
                            name: event.target.value
                          }))
                        }
                      />
                      <input
                        type="text"
                        placeholder="Business Name *"
                        value={demoForm.company}
                        onChange={(event) =>
                          setDemoForm((current) => ({
                            ...current,
                            company: event.target.value
                          }))
                        }
                      />
                      <input
                        type="email"
                        placeholder="Email *"
                        value={demoForm.email}
                        onChange={(event) =>
                          setDemoForm((current) => ({
                            ...current,
                            email: event.target.value
                          }))
                        }
                      />
                      <input
                        type="text"
                        placeholder="Phone *"
                        value={demoForm.phone}
                        onChange={(event) =>
                          setDemoForm((current) => ({
                            ...current,
                            phone: event.target.value
                          }))
                        }
                      />
                      <input
                        type="text"
                        placeholder="City *"
                        value={demoForm.city}
                        onChange={(event) =>
                          setDemoForm((current) => ({
                            ...current,
                            city: event.target.value
                          }))
                        }
                      />
                      <select
                        value={demoForm.country}
                        onChange={(event) =>
                          setDemoForm((current) => ({
                            ...current,
                            country: event.target.value
                          }))
                        }
                      >
                        <option value="" disabled>
                          Country *
                        </option>
                        <option>Bangladesh</option>
                        <option>India</option>
                        <option>Australia</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>United States</option>
                      </select>
                    </div>
                    <select
                      className="clone-demo-full"
                      value={demoForm.course}
                      onChange={(event) =>
                        setDemoForm((current) => ({
                          ...current,
                          course: event.target.value
                        }))
                      }
                    >
                      <option value="" disabled>
                        Interested In *
                      </option>
                      <option>Consultancy CRM</option>
                      <option>Coaching CRM</option>
                      <option>EduAnchor CMS</option>
                    </select>
                    <textarea
                      className="clone-demo-full"
                      rows="5"
                      placeholder="Enquiry or message"
                      value={demoForm.message}
                      onChange={(event) =>
                        setDemoForm((current) => ({
                          ...current,
                          message: event.target.value
                        }))
                      }
                    />
                    {demoFeedback.message ? (
                      <p
                        style={{
                          color: demoFeedback.type === "error" ? "red" : "#047c12",
                          marginBottom: "12px"
                        }}
                      >
                        {demoFeedback.message}
                      </p>
                    ) : null}
                    <div className="clone-demo-actions">
                      <button type="submit" className="btn btn-dark" disabled={demoSubmitting}>
                        {demoSubmitting ? "Sending..." : "Submit"}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
