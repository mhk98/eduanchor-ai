import { AboutCloneContent } from "@/components/cloned-pages/about-content";
import { CloneScripts } from "@/components/clone-scripts";

export const metadata = {
  title: "About | EduCtrl Clone"
};

export default function AboutPage() {
  return (
    <>
      <AboutCloneContent />
      <CloneScripts />
    </>
  );
}
