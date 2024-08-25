import React from "react";

const Everest = () => {
  return (
    <div className="font-['Poppins',sans-serif] bg-slate-50 text-slate-800 h-screen w-screen flex p-4">
      <div className="flex-grow w-full h-full">
        <iframe
          src="https://docs.google.com/document/d/1nX0QzYU2wwWjpuQGjduQpcx4zl3tHFKrr_gysb9x0XI/pub"
          className="w-full h-full rounded-lg shadow-lg"
          title="Everest Document"
        />
      </div>
    </div>
  );
};

export default Everest;
