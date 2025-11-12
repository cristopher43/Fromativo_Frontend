import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

interface Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
}

export default function SearchBar({ value, onChange, onClick }: Props) {
    return (
        <div className="d-flex gap-2">
            <Input value={value} onChange={onChange} placeholder="Código" />
            <Button onClick={onClick}>Buscar</Button>
        </div>
    );
}
