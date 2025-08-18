import {
  FieldError,
  UseFormRegister,
  RegisterOptions,
  Path,
  FieldValues,
} from "react-hook-form";

type Props<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
> = {
  name: TName;
  type?: "text" | "email" | "number" | "textarea";
  placeholder: string;
  register: UseFormRegister<TFieldValues>;
  rules?: RegisterOptions<TFieldValues, TName>;
  error?: FieldError;
  className?: string;
  isMobile?: boolean;
};

export const FormField = <
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
>({
  name,
  type = "text",
  placeholder,
  register,
  rules,
  error,
  className = "",
  isMobile = false,
}: Props<TFieldValues, TName>) => {
  const baseClass = isMobile
    ? "contactInputMobile rounded-full"
    : "contactInputDesktop";
  const errorClass = error
    ? "border-red-600"
    : isMobile
      ? "border-gray-400"
      : "border-[#E4E3E3]";
  const inputClass = `${baseClass} ${errorClass} ${className}`;

  return (
    <div className="relative">
      {type === "textarea" ? (
        <textarea
          {...register(name, rules)}
          placeholder={placeholder}
          className={`${inputClass} h-[110px] rounded-xl`}
          aria-invalid={!!error}
        />
      ) : (
        <input
          {...register(name, rules)}
          type={type}
          placeholder={placeholder}
          className={inputClass}
          aria-invalid={!!error}
        />
      )}
      {error && (
        <p className={isMobile ? "validationErrorMobile" : "validationError"}>
          {error.message}
        </p>
      )}
    </div>
  );
};
