import { KnowledgebaseCloneContent } from "@/components/cloned-pages/knowledgebase-content";
import { CloneScripts } from "@/components/clone-scripts";

export const metadata = {
  title: "Knowledgebase | EduCtrl Clone"
};

export default function KnowledgebasePage() {
  return (
    <>
      <KnowledgebaseCloneContent />
      <CloneScripts />
    </>
  );
}
