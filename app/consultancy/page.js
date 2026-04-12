import { ConsultancyCloneContent } from "@/components/cloned-pages/consultancy-content";
import { CloneScripts } from "@/components/clone-scripts";

export const metadata = {
  title: "Consultancy CRM | EduCtrl Clone"
};

export default function ConsultancyPage() {
  return (
    <>
      <ConsultancyCloneContent />
      <CloneScripts />
    </>
  );
}
