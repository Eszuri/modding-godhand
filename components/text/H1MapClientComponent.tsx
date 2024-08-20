import { ReactNode, HTMLAttributes } from "react";

interface H1MapClientComponentProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}

export default function H1MapClientComponent({ children, ...props }: H1MapClientComponentProps) {
    return (
        <h1 {...props}
            className="text-2xl font-semibold tracker-widest border-b-2 mb-1"
        >{children}</h1>
    );
}

