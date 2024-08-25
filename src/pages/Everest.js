import React from "react";

const Everest = () => {
  return (
    <div className="font-['Poppins',sans-serif] bg-slate-50 text-slate-800 h-screen w-screen flex p-4">
      <div className="flex-grow w-full h-full">
        <div
          className="relative w-full h-full"
          style={{ paddingBottom: "56.25%", height: 0 }}
        >
          <iframe
            src="https://docs.google.com/document/d/1nX0QzYU2wwWjpuQGjduQpcx4zl3tHFKrr_gysb9x0XI/pub?embedded=true"
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            title="Everest Document"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Everest;
