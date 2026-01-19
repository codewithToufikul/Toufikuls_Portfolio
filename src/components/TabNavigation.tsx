import { User, FileText, FolderOpen, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "about", label: "About", icon: User },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "portfolio", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Mail },
];

const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <nav className="flex p-2 flex-row lg:flex-col h-auto lg:h-full justify-center items-center gap-2 bg-card/50 backdrop-blur-xl rounded-2xl border border-border/30 ">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="relative flex flex-row lg:flex-col flex-1 lg:w-full items-center justify-center gap-2 px-2 sm:px-4 py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm transition-colors duration-200"
          >
            {/* 🔥 ACTIVE BACKGROUND (shared animation) */}
            {isActive && (
              <motion.div
                layoutId="active-tab"   // ⭐ MAGIC
                className="absolute inset-0 rounded-xl bg-primary shadow-lg"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 35,
                }}
              />
            )}

            {/* CONTENT */}
            <tab.icon
              size={18}
              className={`relative z-10 ${isActive ? "text-primary-foreground" : "text-muted-foreground"
                }`}
            />
            <span
              className={`relative z-10 hidden sm:inline ${isActive ? "text-primary-foreground" : "text-muted-foreground"
                }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default TabNavigation;
