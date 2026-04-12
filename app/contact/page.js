import { ContactCloneContent } from "@/components/cloned-pages/contact-content";
import { CloneScripts } from "@/components/clone-scripts";

export const metadata = {
  title: "Contact | EduCtrl Clone"
};

export default function ContactPage() {
  return (
    <>
      <ContactCloneContent />
      <CloneScripts />
    </>
  );
}
