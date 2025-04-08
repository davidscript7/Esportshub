import React from 'react';

const Button = ({
                    children,
                    variant = 'primary',
                    size = 'md',
                    icon = null,
                    iconPosition = 'left',
                    fullWidth = false,
                    disabled = false,
                    onClick,
                    className = '',
                    type = 'button'
                }) => {
    // Base classes for all buttons
    const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gaming-dark";

    // Variant specific classes
    const variantClasses = {
        primary: "bg-gaming-accent hover:bg-gaming-accent/90 text-white focus:ring-gaming-accent/50",
        secondary: "bg-cyber-400 hover:bg-cyber-500 text-white focus:ring-cyber-400/50",
        outline: "bg-transparent border-2 border-gaming-accent text-gaming-accent hover:bg-gaming-accent/10 focus:ring-gaming-accent/30",
        ghost: "bg-transparent text-gray-300 hover:bg-gaming-panel hover:text-white focus:ring-transparent",
        danger: "bg-gaming-highlight hover:bg-gaming-highlight/90 text-white focus:ring-gaming-highlight/50"
    };

    // Size specific classes
    const sizeClasses = {
        sm: "text-xs px-3 py-1.5 rounded",
        md: "text-sm px-4 py-2 rounded-md",
        lg: "text-base px-5 py-2.5 rounded-md",
        xl: "text-lg px-6 py-3 rounded-lg"
    };

    // Disabled state
    const disabledClasses = disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer";

    // Full width
    const widthClasses = fullWidth ? "w-full" : "";

    // Special effects/animations
    const effectClasses = !disabled && variant === 'primary' ? "after:absolute after:inset-0 after:rounded-md after:shadow-[0_0_15px_rgba(123,47,255,0.5)] after:opacity-0 hover:after:opacity-100 after:transition-opacity" : "";

    // Icon handling
    const renderIcon = () => {
        if (!icon) return null;

        return (
            <span className={`inline-flex ${iconPosition === 'left' ? 'mr-2' : 'ml-2'}`}>
                {icon}
            </span>
        );
    };

    return (
        <button
            type={type}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${widthClasses} ${effectClasses} ${className}`}
            onClick={!disabled ? onClick : undefined}
            disabled={disabled}
        >
            {iconPosition === 'left' && renderIcon()}
            {children}
            {iconPosition === 'right' && renderIcon()}
        </button>
    );
};

export default Button;