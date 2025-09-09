import React from "react";
import clsx from "clsx";

function Wave({ color = "dark", className = "" }) {
  const colors = {
    dark: "#7C3AED",
    light: "#f5f3ff",
  };

  return (
    <div className="absolute top-[-5%] w-screen overflow-hidden via-violet-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1512 112"
        className={`h-[112px] w-full ${className}`}
        preserveAspectRatio="none"
      >
        <path
          d="M1512 0L1475.88 10.5507C1439.76 21.1014 1367.52 42.2029 1295.62 53.8087C1223.54 65.4956 1151.98 67.6058 1079.9 65.9826C1008 64.3594 935.76 59.0029 863.856 48.9391C791.784 38.9565 720.216 24.3478 648.144 20.9391C576.24 17.6116 504 25.4029 432.096 31.084C360.024 36.7652 288.456 40.3362 216.384 39.9304C144.48 39.5246 72.24 35.142 36.12 33.0319L4.72069e-05 30.8406V112H36.12C72.24 112 144.48 112 216.384 112C288.456 112 360.024 112 432.096 112C504 112 576.24 112 648.144 112C720.216 112 791.784 112 863.856 112C935.76 112 1008 112 1079.9 112C1151.98 112 1223.54 112 1295.62 112C1367.52 112 1439.76 112 1475.88 112H1512V0Z"
          fill={colors[color] || color}
        />
      </svg>
    </div>
  );
}

export default Wave;
