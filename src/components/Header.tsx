import { useState } from "react";
import { Menu, X, Home } from "lucide-react";

interface HeaderProps {
  navigate: (page: string) => void;
}

export default function Header({ navigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const event = new CustomEvent('toggleNavigation', { detail: !isMenuOpen });
    window.dispatchEvent(event);
  };

  return (
    <header className="header-gradient text-white p-4 md:p-8 min-h-[120px] flex items-center justify-between relative">
      <div className="flex items-center gap-4 max-w-[70%]">
        <button
          onClick={() => navigate("accueil")}
          aria-label="Accueil"
          title="Accueil"
          className="text-white hover:text-gray-300 flex-shrink-0"
        >
          <Home size={24} />
        </button>
        <div className="logo text-sm md:text-base leading-relaxed">
          Proposition d'une démarche méthodologique d'accompagnement par l'expert-comptable dans la création et le pilotage d'une école de production
        </div>
      </div>

      <button
        className="burger w-8 h-6 flex flex-col justify-between cursor-pointer z-50 transition-all duration-300"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>
    </header>
  );
}
