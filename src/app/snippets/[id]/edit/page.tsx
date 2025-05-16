interface SnippetEditPageProps {
     params: {
          id: string;
     };
}
const SnippetEditPage = (props: SnippetEditPageProps) => {
     const id = parseInt(props.params.id);

     return <div>Editing Snippet with id {id}</div>;
};

export default SnippetEditPage;
