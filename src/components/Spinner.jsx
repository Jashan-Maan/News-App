import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-emerald-500"></div>
    </div>
  );
};

export default Spinner;
