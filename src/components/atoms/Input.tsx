import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>

export default function Input(props: Props) {
    return <input className="form-control mb-2" {...props} />;
}
