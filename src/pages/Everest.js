import React, { useState, useEffect } from "react";

const Everest = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="font-['Poppins',sans-serif] bg-white text-slate-800 min-h-screen w-full flex flex-col">
      <h1 className="text-3xl font-bold p-6 bg-slate-100">Everest Document</h1>
      <div className="flex-grow w-full">
        <iframe
          src="https://docs.google.com/document/d/1nX0QzYU2wwWjpuQGjduQpcx4zl3tHFKrr_gysb9x0XI/pub?embedded=true"
          className="w-full h-full"
          style={{
            border: "none",
            height: isMobile ? "calc(100vh - 80px)" : "calc(100vh - 100px)",
          }}
          title="Everest Document"
        />
      </div>
    </div>
  );
};

export default Everest;
