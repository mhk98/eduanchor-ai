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

export function CloneInteractions() {
  const pathname = usePathname();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

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
      setIsDemoModalOpen(true);
    }

    function forceCloseModal() {
      setIsDemoModalOpen(false);
    }

    function resetModalState() {
      forceCloseModal();
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
    }

    function handleKeydown(event) {
      if (event.key === "Escape") {
        closeDrawer();
        forceCloseModal();
      }
    }

    resetModalState();

    document.addEventListener("click", handleClick, true);
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("keydown", handleKeydown);
      closeDrawer();
      resetModalState();
    };
  }, [pathname]);

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
              <p>Share your details to access Software Demo</p>
              <form className="clone-demo-form" onSubmit={(event) => event.preventDefault()}>
                <div className="clone-demo-grid">
                  <input type="text" placeholder="Your Name *" />
                  <input type="text" placeholder="Business Name *" />
                  <input type="email" placeholder="Email *" />
                  <input type="text" placeholder="Phone *" />
                  <input type="text" placeholder="City *" />
                  <select defaultValue="">
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
                <select className="clone-demo-full" defaultValue="">
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
                />
                <div className="clone-demo-actions">
                  <button type="submit" className="btn btn-dark">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
