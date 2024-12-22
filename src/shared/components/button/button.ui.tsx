import { FC } from 'react';

interface ButtonProps {
    label: string | React.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ label, onClick, isActive = true }) => (
    <button
        onClick={isActive ? onClick : undefined}
        className={`rounded-lg px-6 py-3 text-center text-h4 transition duration-200
            ${isActive ? 'bg-primary-500 text-white hover:bg-primary-600' : 'cursor-not-allowed bg-neutral-300 text-neutral-500'}
        `}
        disabled={!isActive}
    >
        {label}
    </button>
);

export default Button;
