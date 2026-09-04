import React from 'react';
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#030014] text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#6366f1]/15 to-[#a855f7]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Glassmorphism Card */}
      <div className="relative max-w-lg w-full bg-[#0b0c1b]/60 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-xl text-center shadow-2xl">
        
        {/* Icon with Aura */}
        <div className="relative flex justify-center mb-6">
          <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur-md opacity-40 animate-pulse" />
          <div className="relative w-20 h-20 rounded-2xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-[#a855f7]">
            <AlertTriangle className="w-10 h-10" />
          </div>
        </div>

        {/* 404 Title */}
        <h1 className="text-7xl sm:text-8xl font-extrabold mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7]">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
          Page Not Found
        </h2>

        <p className="text-gray-400 text-sm sm:text-base mb-8 leading-relaxed font-light">
          The page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>

          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/25 active:scale-[0.98]"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

      </div>
    </div>
  );
}