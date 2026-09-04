import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 border-t border-white/10 bg-[#030014] text-center">
      <p className="text-[#9ca3af] text-sm font-light">
        © {new Date().getFullYear()} <span className="font-medium text-white">Mounib™</span>. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;