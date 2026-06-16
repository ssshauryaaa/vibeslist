"use client";

import { useEffect, useState } from "react";
import { MagneticDock } from "@/components/ui/magnetic-dock";
import { Home, Compass, PlusCircle, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (pathname === "/contact") {
      setActiveSection("contact");
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const toolsEl = document.getElementById("tools");
      const submitEl = document.getElementById("submit");

      if (submitEl && scrollPosition >= submitEl.offsetTop - 400) {
        setActiveSection("submit");
      } else if (toolsEl && scrollPosition >= toolsEl.offsetTop - 400) {
        setActiveSection("tools");
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const dockItems = [
    {
      id: "home",
      label: "Home",
      icon: <Home className="w-5 h-5" />,
      isActive: activeSection === "home",
      onClick: () => {
        if (pathname !== "/") {
          window.location.href = "/";
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      },
    },
    {
      id: "tools",
      label: "Directory",
      icon: <Compass className="w-5 h-5" />,
      isActive: activeSection === "tools",
      onClick: () => {
        if (pathname !== "/") {
          window.location.href = "/#tools";
        } else {
          const el = document.getElementById("tools");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      },
    },
    {
      id: "submit",
      label: "Suggest Tool",
      icon: <PlusCircle className="w-5 h-5" />,
      isActive: activeSection === "submit",
      onClick: () => {
        if (pathname !== "/") {
          window.location.href = "/#submit";
        } else {
          const el = document.getElementById("submit");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      },
    },
    {
      id: "contact",
      label: "Contact",
      icon: <Mail className="w-5 h-5" />,
      isActive: activeSection === "contact",
      onClick: () => {
        window.location.href = "/contact";
      },
    },
    {
      id: "github",
      label: "GitHub",
      icon: <GithubIcon className="w-5 h-5" />,
      onClick: () => {
        window.open("https://github.com", "_blank", "noopener,noreferrer");
      },
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-lg flex justify-center pointer-events-none">
      <div className="pointer-events-auto">
        <MagneticDock
          items={dockItems}
          iconSize={44}
          maxScale={1.3}
          magneticDistance={100}
          className="p-2.5 rounded-2xl md:p-3 md:rounded-3xl shadow-2xl"
        />
      </div>
    </div>
  );
}
