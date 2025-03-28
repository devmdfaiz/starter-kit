import React from "react";

interface GitHubIconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  strokeWidth?: number;
  hoverColor?: string;
  onClick?: () => void;
}

export const GitHubIcon: React.FC<GitHubIconProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
  title = "GitHub",
  strokeWidth = 1.5,
  hoverColor,
  onClick,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`github-icon ${className}`}
      onClick={onClick}
      style={{
        cursor: onClick ? "pointer" : "default",
        transition: "stroke 0.3s ease",
      }}
      onMouseOver={(e) => {
        if (hoverColor) e.currentTarget.style.stroke = hoverColor;
      }}
      onMouseOut={(e) => {
        if (hoverColor) e.currentTarget.style.stroke = color;
      }}
      aria-labelledby={title ? "github-icon-title" : undefined}
      role="img"
    >
      {title && <title id="github-icon-title">{title}</title>}
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
};
