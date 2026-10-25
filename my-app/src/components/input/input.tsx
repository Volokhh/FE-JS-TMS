import type { Props } from "../../types";

export const Input = ({
   label,
   type = 'text',
   error,
   id,
   placeholder,
   disabled,
   value,
   ref,
   onChange,
}: Props) => {
   return (
      <div className="field">
         <label htmlFor={id}>{label}</label>
         <input
            ref={ref}
            type={type}
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={onChange}
         />
         {error && <h3>{error}</h3>}
      </div>
   );
};
