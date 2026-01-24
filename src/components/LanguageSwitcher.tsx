import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "zh" : "en";
        i18n.changeLanguage(newLang);
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2 text-foreground hover:text-primary"
        >
            <Globe className="h-4 w-4" />
            <span>{i18n.language === "zh" ? "中文" : "EN"}</span>
        </Button>
    );
};

export default LanguageSwitcher;
