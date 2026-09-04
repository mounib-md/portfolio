import React, { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check, ArrowRight, Sparkles } from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  // Vos informations réelles
  const email = "mohamedmounib.mediouni@enicar.ucar.tn";
  const githubUrl = "https://github.com/mounib-md";
  const linkedinUrl = "https://www.linkedin.com/in/mohamed-mounib-mediouni-b360a7369/";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-[5%] text-white min-h-[80vh] flex flex-col justify-center items-center relative overflow-hidden" id="Contact">
      {/* Effet Glow en arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#6366f1]/10 to-[#a855f7]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* En-tête */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          Let’s build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7]">something.</span>
        </h2>
        <p 
          className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          I'm currently open to internship opportunities and engineering roles. Feel free to reach out — I respond within 24 hours.
        </p>
      </div>

      {/* Grille des 3 Cartes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
        
        {/* Carte Email */}
        <div 
          className="group relative bg-[#0b0c1b]/60 border border-white/10 rounded-2xl p-6 backdrop-blur-xl flex flex-col justify-between hover:border-[#6366f1]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="space-y-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-[#6366f1] group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">Email</p>
              <p className="text-sm font-medium text-gray-200 truncate" title={email}>{email}</p>
            </div>
          </div>

          <button
            onClick={handleCopyEmail}
            className={`w-full py-2.5 px-4 rounded-xl border text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
              copied
                ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400"
                : "border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy email
              </>
            )}
          </button>
        </div>

        {/* Carte GitHub */}
        <div 
          className="group relative bg-[#0b0c1b]/60 border border-white/10 rounded-2xl p-6 backdrop-blur-xl flex flex-col justify-between hover:border-[#8b5cf6]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="space-y-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center text-[#8b5cf6] group-hover:scale-110 transition-transform">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">GitHub</p>
              <p className="text-sm font-medium text-gray-200 truncate">github.com/mounib-md</p>
            </div>
          </div>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn"
          >
            <span>View Profile</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Carte LinkedIn */}
        <div 
          className="group relative bg-[#0b0c1b]/60 border border-white/10 rounded-2xl p-6 backdrop-blur-xl flex flex-col justify-between hover:border-[#a855f7]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="space-y-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#a855f7]/10 border border-[#a855f7]/20 flex items-center justify-center text-[#a855f7] group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">LinkedIn</p>
              <p className="text-sm font-medium text-gray-200 truncate">Mohamed Mounib MEDIOUNI</p>
            </div>
          </div>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn"
          >
            <span>Connect</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>

      {/* Footer */}
      <div 
        className="mt-20 text-center text-xs text-gray-500 flex items-center justify-center gap-1.5"
        data-aos="fade-up"
        data-aos-duration="1400"
      >
        <span>Built with React, Tailwind CSS, & a sprinkle of magic</span>
        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
      </div>
    </section>
  );
};

export default Contact;