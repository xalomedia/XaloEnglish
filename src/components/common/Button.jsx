import React from 'react';


const Button = ({ children, variant = 'primary', size = 'medium', onClick, className = '', ...props }) => {
    const baseClasses = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-light hover:shadow-[0_4px_12px_rgba(79,70,229,0.3)]",
        secondary: "bg-white text-primary border border-primary hover:bg-primary-light hover:text-white hover:border-primary-light",
        accent: "bg-accent text-white hover:bg-accent-hover hover:shadow-[0_4px_12px_rgba(244,63,94,0.3)]",
        ghost: "bg-transparent text-text-primary hover:bg-black/5"
    };

    const sizes = {
        small: "px-4 py-2 text-sm",
        medium: "px-6 py-3 text-base",
        large: "px-8 py-4 text-lg"
    };

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
