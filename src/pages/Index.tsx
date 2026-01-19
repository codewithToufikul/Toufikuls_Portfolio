import { useState, useRef } from "react";
import bgSvg from "@/assets/bg.svg";

import ProfileCard from "@/components/ProfileCard";
import TabNavigation from "@/components/TabNavigation";
import AboutTab from "@/components/tabs/AboutTab";
import ResumeTab from "@/components/tabs/ResumeTab";
import PortfolioTab from "@/components/tabs/PortfolioTab";
import ContactTab from "@/components/tabs/ContactTab";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");
  const contentRef = useRef<HTMLElement>(null);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Scroll to content on mobile after tab change
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutTab />;
      case "resume":
        return <ResumeTab />;
      case "portfolio":
        return <PortfolioTab />;
      case "contact":
        return <ContactTab />;
      default:
        return <AboutTab />;
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgSvg})` }}
      className="relative min-h-screen w-full bg-cover bg-center bg-fixed flex items-center justify-center p-0 lg:p-4"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] pointer-events-none" />

      <div className="relative w-full lg:h-[760px] lg:max-h-[760px] flex flex-col lg:flex-row gap-6 p-4 lg:p-12 max-w-[1370px] mx-auto z-10">
        <header className="absolute left-5 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50 border-l-[2px] border-l-primary border-b-[2px] border-b-primary pl-2 pb-2 rounded-2xl hidden lg:block">
          <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
        </header>

        {/* Mobile Navigation */}
        <div className="lg:hidden sticky top-2 z-50 mb-4 px-2">
          <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
        </div>

        {/* Left Side - Profile Card */}
        <aside
          style={{ borderRadius: "40px 4px 40px 4px" }}
          className="w-full lg:w-80 xl:w-96 lg:h-full card-glass shadow-2xl flex-shrink-0 overflow-hidden"
        >
          <div className="relative overflow-hidden h-full">
            <ProfileCard />
          </div>
        </aside>

        {/* Right Side - Main Content */}
        <main ref={contentRef} className="flex-1 flex flex-col min-h-0 gap-4 lg:gap-6 lg:h-full scroll-mt-24">
          <div className="flex-1 min-h-0 card-glass overflow-hidden shadow-2xl">
            <div className="h-full lg:overflow-y-auto custom-scrollbar p-6 lg:p-10">
              {renderTabContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
