import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  registerName: string;
}


export function Input({ type, placeholder, register, registerName }: InputProps) {

  return (
    <input type={type} placeholder={placeholder} {...register(registerName)}
      className="w-[100%] p-3 bg-base-input border-1 border-base-button rounded placeholder:text-base-label placeholder:text-sm selection:border-none" />
  )
}