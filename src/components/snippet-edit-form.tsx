"use client";

import type { Snippet } from "@/generated/prisma";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";

interface SnippetEditFormProps {
     snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
     const [code, setCode] = useState(snippet.code);
     const handleEditorChange = (value: string = "") => {
          setCode(value);
     };

     async function editSnippet() {
          "use server";
     }
     return (
          <div>
               <Editor
                    height="40vh"
                    theme="vs-dark"
                    language="javascript"
                    defaultValue={snippet.code}
                    options={{ minimap: { enabled: false } }}
                    onChange={handleEditorChange}
               />
          </div>
     );
};

export default SnippetEditForm;
