import React from 'react';

const Card = ({
                  children,
                  title,
                  subtitle,
                  className = '',
                  variant = 'default',
                  headerAction = null,
                  noPadding = false,
                  bordered = false,
                  hoverable = false,
                  onClick = null
              }) => {
    const baseClasses = "bg-gaming-panel text-gaming-text rounded-lg overflow-hidden transition-all duration-200";

    const variantClasses = {
        default: "",
        highlighted: "border-l-4 border-gaming-accent",
        stats: "bg-gradient-to-br from-gaming-panel to-gaming-dark"
    };

    const paddingClasses = noPadding ? "" : "p-5";
    const borderClasses = bordered ? "border border-gray-700" : "";
    const hoverClasses = hoverable ? "hover:shadow-lg hover:shadow-gaming-accent/20 cursor-pointer" : "";
    const clickClasses = onClick ? "cursor-pointer" : "";

    return (
        <div
            className={`${baseClasses} ${variantClasses[variant]} ${borderClasses} ${hoverClasses} ${clickClasses} ${className}`}
            onClick={onClick}
        >
            {title && (
                <div className="flex justify-between items-center border-b border-gray-700 px-5 py-3">
                    <div>
                        <h3 className="text-lg font-gaming font-semibold">{title}</h3>
                        {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
                    </div>
                    {headerAction && <div>{headerAction}</div>}
                </div>
            )}
            <div className={noPadding ? "" : paddingClasses}>{children}</div>
        </div>
    );
};

export default Card;