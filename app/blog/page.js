import { BlogCloneContent } from "@/components/cloned-pages/blog-content";
import { CloneScripts } from "@/components/clone-scripts";

export const metadata = {
  title: "Blog | EduCtrl Clone"
};

export default function BlogPage() {
  return (
    <>
      <BlogCloneContent />
      <CloneScripts />
    </>
  );
}
