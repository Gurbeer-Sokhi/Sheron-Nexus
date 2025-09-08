"use client";

import PropTypes from "prop-types";

const ACCENT_HEX = "#8B5CF6";

export default function Button({
  text,
  onClick,
  variant = "primary",
  ariaLabel,
  className = "",
  type = "button",
  ...rest
}) {
  const baseClasses =
    "inline-flex items-center justify-center whitespace-nowrap rounded-full px-6 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-0 transform-gpu transition-transform duration-200 hover:scale-105 active:scale-95";

  // Use literal Tailwind arbitrary values so JIT can see them
  const primaryClasses =
    "text-white shadow-sm hover:shadow-lg bg-[#8B5CF6] hover:brightness-110 focus:ring-[#8B5CF6]/50";

  const secondaryClasses =
    "border bg-transparent text-[#8B5CF6] border-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white focus:ring-[#8B5CF6]/50";

  const variantClasses = variant === "secondary" ? secondaryClasses : primaryClasses;

  return (
    <button
      type={type}
      aria-label={ariaLabel || text}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...rest}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};


