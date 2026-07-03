"use client";

import { Circles } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white/90 flex items-center justify-center z-50">
      <Circles
        height="80"
        width="80"
        color="#16a34a"
        ariaLabel="loading"
      />
    </div>
  );
}