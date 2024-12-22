import { ChangeEvent, FC } from 'react';

interface TextAreaFieldProps {
    label: string | React.ReactNode;
    placeholder: string | React.ReactNode;
    value: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    maxLength?: number;
    showCount?: boolean;
}

const TextAreaField: FC<TextAreaFieldProps> = ({
    label,
    placeholder,
    value,
    onChange,
    maxLength,
    showCount,
}) => (
    <div className="mb-4 flex flex-col justify-start">
        <label className="mb-2 flex text-h4 text-neutral-800">{label}</label>
        <textarea
            placeholder={placeholder as string}
            value={value}
            onChange={onChange}
            rows={5}
            maxLength={maxLength}
            className="resize-none rounded-[20px] border border-neutral-300 p-3 text-h5 text-neutral-700 placeholder:text-neutral-400"
        />
        {showCount && (
            <p className="mt-2 text-right text-sub3 text-neutral-400">
                {value.length} / {maxLength}
            </p>
        )}
    </div>
);

export default TextAreaField;
