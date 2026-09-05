import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FolderGit2, LogOut, Menu, X } from "lucide-react";
import { supabase } from "../supabase";

const NAVIGATION = [
  { label: "Portfolio", href: "/#Portofolio", icon: FolderGit2 },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login", { replace: true });
  };

  return (
    <main className="min-h-screen px-4 py-8 text-white sm:px-8">
      <section className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[#0a0a1a]/80 p-6 backdrop-blur-xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-indigo-300">Admin portal</p>
            <h1 className="mt-1 text-3xl font-bold">Dashboard</h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
              Your portfolio administration area is available from here.
            </p>
          </div>
          <button
            type="button"
            aria-label="Toggle dashboard menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-xl border border-white/10 p-2 text-gray-300 transition-colors hover:border-indigo-400/50 hover:text-white"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Dashboard navigation">
            {NAVIGATION.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-gray-200 transition-colors hover:border-indigo-400/40 hover:bg-indigo-500/10"
              >
                <Icon className="h-5 w-5 text-indigo-400" />
                {label}
              </a>
            ))}
          </nav>
        )}

        <div className="mt-8 border-t border-white/10 pt-6">
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-xl border border-red-500/20 px-4 py-2 text-sm text-red-300 transition-colors hover:bg-red-500/10"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </section>
    </main>
  );
}
