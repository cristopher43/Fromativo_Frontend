import React from "react";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children: React.ReactNode;
}

export default function Select({ children, ...props }: Props) {
    return (
        <select className="form-select mb-2" {...props}>
            {children}
        </select>
    );
}
