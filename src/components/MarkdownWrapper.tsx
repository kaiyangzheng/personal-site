import React from "react";
import Markdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

export default function MarkdownWrapper({ name }: { name: string }) {
  const [markdown, setMarkdown] = React.useState("");

  React.useEffect(() => {
    fetch(`/static/${name}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [name]);

  console.log(markdown);

  return (
    <>
      <Markdown components={ChakraUIRenderer()}>{markdown}</Markdown>
    </>
  );
}
