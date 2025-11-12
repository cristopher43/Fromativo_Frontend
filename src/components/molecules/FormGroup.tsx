import React from "react";
import Input from "../atoms/Input";

interface Props {
    label: string;
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    placeholder?: string;
}

export default function FormGroup({ label, name, onChange, value, placeholder }: Props) {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <Input name={name} onChange={onChange} value={value} placeholder={placeholder} />
        </div>
    );
}
