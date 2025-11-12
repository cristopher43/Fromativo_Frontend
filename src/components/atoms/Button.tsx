import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function Button({ children, ...props }: Props) {
    return (
        <button className="btn btn-primary mt-2" {...props}>
            {children}
        </button>
    );
}
