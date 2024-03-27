import React, { useRef } from "react";

interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}
const InputField = ({todo, setTodo,handleAdd}: InputFieldProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        
        <form className="input" onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();
        }}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter your name"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
        </form>
        
    )
}
export default InputField; 