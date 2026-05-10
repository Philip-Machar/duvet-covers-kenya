import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="absolute bottom-0 text-9xl md:text-[12rem] font-black text-gray-50 select-none pointer-events-none z-0">
        404
      </h1>
      <div className="relative z-10">
        <div className="w-16 h-16 flex items-center justify-center mb-4">
          <i className="ri-hotel-bed-line text-primary text-4xl"></i>
        </div>
        <h1 className="text-xl md:text-2xl font-semibold mt-6">This page has not been generated</h1>
        <p className="mt-2 text-base text-gray-400 font-mono">{location.pathname}</p>
        <p className="mt-4 text-lg md:text-xl text-gray-500">Tell me more about this page, so I can generate it</p>
        <a href="/" className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-md hover:bg-primary-dark transition-colors">
          <i className="ri-arrow-left-line text-sm"></i>
          Back to Home
        </a>
      </div>
    </div>
  );
}