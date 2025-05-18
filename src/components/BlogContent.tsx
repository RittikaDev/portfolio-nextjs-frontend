/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import parse, {
  domToReact,
  HTMLReactParserOptions,
  Text,
} from "html-react-parser";

interface BlogContentProps {
  htmlString: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ htmlString }) => {
  // console.log(htmlString);

  const normalizedHtmlString = htmlString.replace(/\\n/g, "\n");

  const options: HTMLReactParserOptions = {
    replace: (node: any) => {
      if (node.type === "text") {
        const textNode = node as Text;
        if (textNode.data.includes("\n")) {
          const parts = textNode.data.split("\n");
          return parts.flatMap((part, index) => [
            part,
            index !== parts.length - 1 ? <br key={index} /> : null,
          ]);
        }
      }

      if (node.type === "tag") {
        switch (node.name) {
          case "h1":
            return (
              <h1 className="text-4xl font-bold border-b-2 pb-2 border-blue-600 dark:border-blue-400">
                {domToReact(node.children, options)}
              </h1>
            );
          case "h2":
            return (
              <h2 className="text-3xl font-semibold border-b border-blue-500 dark:border-blue-300">
                {domToReact(node.children, options)}
              </h2>
            );
          case "p":
            return <p className="mb-4">{domToReact(node.children, options)}</p>;
          case "strong":
            return (
              <strong className="font-semibold">
                {domToReact(node.children, options)}
              </strong>
            );
          case "code":
            return (
              <code className="bg-gray-900 text-green-300 px-1 rounded">
                {domToReact(node.children, options)}
              </code>
            );
          case "pre":
            return (
              <pre className="bg-gray-900 text-green-300 p-4 rounded-md overflow-x-auto my-4 whitespace-pre-wrap">
                {domToReact(node.children, options)}
              </pre>
            );
          case "ul":
            return (
              <ul className="list-disc pl-6 mb-4">
                {domToReact(node.children, options)}
              </ul>
            );
          case "li":
            return <li>{domToReact(node.children, options)}</li>;
          default:
            return undefined;
        }
      }
    },
  };

  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      {parse(normalizedHtmlString, options)}
    </article>
  );
};

export default BlogContent;
