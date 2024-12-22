import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeProp {
    children: string;
    language: string;
    className?: string;
}

export const Code: React.FC<CodeProp> = ({ children, language, className }) => {
    return (
        <SyntaxHighlighter
            language={language}
            style={vs2015}
            customStyle={{
                background: "transparent",
                backgroundColor: "transparent",
            }}
            wrapLines={true}
            wrapLongLines={true}
            className={className}
        >
            {children}
        </SyntaxHighlighter>
    );
};
