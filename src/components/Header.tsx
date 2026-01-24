import { Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-primary/10 border-2 border-primary rounded flex items-center justify-center shadow-glow-gold">
                <span className="text-2xl font-bold text-primary">ATF</span>
              </div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-foreground tracking-tight">
                {t("header.title")}
              </h1>
              <p className="text-xs text-muted-foreground">{t("header.subtitle")}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#market" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {t("header.market")}
            </a>
            <a href="#assets" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {t("header.assets")}
            </a>
            <a href="/whitepaper" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {t("header.whitepaper")}
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {t("header.about")}
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            {/* CTA Button */}
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <Coins className="mr-2 h-4 w-4" />
              {t("header.connect_wallet")}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
