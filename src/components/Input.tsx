
interface InputProps {
  type: string;
  placeholder: string;
}


export function Input({ type, placeholder }: InputProps) {
  return (
    <input type={type} placeholder={placeholder}
      className="w-[100%] p-3 bg-base-input border-1 border-base-button rounded placeholder:text-base-label placeholder:text-sm selection:border-none" />
  )
}