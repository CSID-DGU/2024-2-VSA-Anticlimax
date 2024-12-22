import { ChangeEvent, FC } from 'react';

interface InputFieldProps {
    label: string | React.ReactNode;
    name: string;
    placeholder: string | React.ReactNode;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    maxLength?: number;
    pattern?: string;
    error?: boolean;
}

const InputField: FC<InputFieldProps> = ({
    label,
    name,
    placeholder,
    value,
    onChange,
    type = 'text',
    maxLength,
    pattern,
    error,
}) => (
    <div className="mb-4 flex flex-col justify-start">
        <label className="mb-2 flex text-h4 text-neutral-800">{label}</label>
        <input
            type={type}
            name={name}
            placeholder={placeholder as string}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            pattern={pattern}
            className={`rounded-[20px] border p-4 text-h5 text-neutral-700 placeholder:text-neutral-400 ${
                error ? 'border-red-500' : 'border-neutral-300'
            }`}
        />
    </div>
);

export default InputField;
