import SnippetEditForm from "@/components/snippet-edit-form";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetEditPageProps {
     params: {
          id: string;
     };
}
const SnippetEditPage = async (props: SnippetEditPageProps) => {
     const id = parseInt(props.params.id);
     const snippet = await db.snippet.findFirst({
          where: { id },
     });
     if (!snippet) {
          return notFound();
     }

     return (
          <div>
               <SnippetEditForm snippet={snippet} />
          </div>
     );
};

export default SnippetEditPage;
