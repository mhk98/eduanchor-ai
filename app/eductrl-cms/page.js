import { CmsCloneContent } from "@/components/cloned-pages/cms-content";
import { CloneScripts } from "@/components/clone-scripts";

export const metadata = {
  title: "EduCtrl CMS | EduCtrl Clone"
};

export default function EduCtrlCmsPage() {
  return (
    <>
      <CmsCloneContent />
      <CloneScripts />
    </>
  );
}
