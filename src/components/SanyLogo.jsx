import React from 'react';

export default function SanyLogo({ className = "h-7 md:h-8 w-auto", variant = "red", color }) {
  // If a white variant is requested, we can use CSS filters or just fall back if we had a white logo.
  // For now, we will use the uploaded logo image.
  
  // Optional: you can apply brightness filters if you need a white variant of the logo
  const filterClass = variant === "white" ? "brightness-0 invert" : "";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img 
        src="/images/sany-logo.png" 
        alt="SANY Logo" 
        className={`h-full w-auto object-contain ${filterClass}`}
      />
    </div>
  );
}
