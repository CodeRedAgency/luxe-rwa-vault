import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Whitepaper = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-background pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex items-center justify-between mb-8">
                    <Button
                        variant="ghost"
                        onClick={() => navigate("/")}
                        className="hover:bg-primary/10 hover:text-primary"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        {t("whitepaper.back_home")}
                    </Button>
                    <LanguageSwitcher />
                </div>

                <div className="space-y-12 animate-fade-in">
                    {/* Header */}
                    <div className="text-center space-y-4 border-b border-border pb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground">{t("whitepaper.title")}</h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-primary">{t("whitepaper.subtitle")}</h2>
                        <p className="text-xl text-muted-foreground">{t("whitepaper.desc_short")}</p>
                        <p className="text-sm text-muted-foreground font-mono">{t("whitepaper.date_version")}</p>
                    </div>

                    {/* 1. Overview */}
                    <section className="space-y-4">
                        <h3 className="text-2xl font-bold text-foreground">{t("whitepaper.overview_title")}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {t("whitepaper.overview_p1")}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            {t("whitepaper.overview_p2")}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            {t("whitepaper.overview_p3")}
                        </p>
                    </section>

                    {/* 2. The Problem */}
                    <section className="space-y-4">
                        <h3 className="text-2xl font-bold text-foreground">{t("whitepaper.problem_title")}</h3>
                        <p className="text-muted-foreground">{t("whitepaper.problem_subtitle")}</p>
                        <div className="grid md:grid-cols-3 gap-6 mt-4">
                            <div className="p-6 rounded-lg bg-card border border-border">
                                <h4 className="font-semibold text-primary mb-2">{t("whitepaper.problem_cost_title")}</h4>
                                <p className="text-sm text-muted-foreground">{t("whitepaper.problem_cost_desc")}</p>
                            </div>
                            <div className="p-6 rounded-lg bg-card border border-border">
                                <h4 className="font-semibold text-primary mb-2">{t("whitepaper.problem_slow_title")}</h4>
                                <p className="text-sm text-muted-foreground">{t("whitepaper.problem_slow_desc")}</p>
                            </div>
                            <div className="p-6 rounded-lg bg-card border border-border">
                                <h4 className="font-semibold text-primary mb-2">{t("whitepaper.problem_real_title")}</h4>
                                <p className="text-sm text-muted-foreground">{t("whitepaper.problem_real_desc")}</p>
                            </div>
                        </div>
                    </section>

                    {/* 3. The Solution */}
                    <section className="space-y-4">
                        <h3 className="text-2xl font-bold text-foreground">{t("whitepaper.solution_title")}</h3>
                        <p className="text-muted-foreground">{t("whitepaper.solution_subtitle")}</p>
                        <ul className="space-y-4 list-disc pl-6 text-muted-foreground">
                            <li><strong className="text-foreground">{t("whitepaper.solution_fast_title")}</strong> {t("whitepaper.solution_fast_desc")}</li>
                            <li><strong className="text-foreground">{t("whitepaper.solution_proof_title")}</strong> {t("whitepaper.solution_proof_desc")}</li>
                            <li><strong className="text-foreground">{t("whitepaper.solution_share_title")}</strong> {t("whitepaper.solution_share_desc")}</li>
                        </ul>
                    </section>

                    {/* 4. How It Works */}
                    <section className="space-y-6">
                        <h3 className="text-2xl font-bold text-foreground">{t("whitepaper.tech_title")}</h3>
                        <p className="text-muted-foreground">{t("whitepaper.tech_subtitle")}</p>

                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-foreground">{t("whitepaper.tech_id_title")}</h4>
                            <p className="text-muted-foreground">{t("whitepaper.tech_id_desc")}</p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li><strong className="text-foreground">{t("whitepaper.tech_id_rule_title")}</strong> {t("whitepaper.tech_id_rule_desc")}</li>
                                <li><strong className="text-foreground">{t("whitepaper.tech_id_why_title")}</strong> {t("whitepaper.tech_id_why_desc")}</li>
                                <li><strong className="text-foreground">{t("whitepaper.tech_id_safe_title")}</strong> {t("whitepaper.tech_id_safe_desc")}</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-foreground">{t("whitepaper.tech_wait_title")}</h4>
                            <p className="text-muted-foreground">{t("whitepaper.tech_wait_subtitle")}</p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li><strong className="text-foreground">{t("whitepaper.tech_wait_problem_title")}</strong> {t("whitepaper.tech_wait_problem_desc")}</li>
                                <li><strong className="text-foreground">{t("whitepaper.tech_wait_fix_title")}</strong> {t("whitepaper.tech_wait_fix_desc")}</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-foreground">{t("whitepaper.tech_ink_title")}</h4>
                            <p className="text-muted-foreground">{t("whitepaper.tech_ink_desc")}</p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li><strong className="text-foreground">{t("whitepaper.tech_ink_treasury_title")}</strong> {t("whitepaper.tech_ink_treasury_desc")}</li>
                                <li><strong className="text-foreground">{t("whitepaper.tech_ink_wrap_title")}</strong> {t("whitepaper.tech_ink_wrap_desc")}</li>
                            </ul>
                        </div>
                    </section>

                    {/* 5. Our First Products */}
                    <section className="space-y-4">
                        <h3 className="text-2xl font-bold text-foreground">{t("whitepaper.products_title")}</h3>
                        <p className="text-muted-foreground">{t("whitepaper.products_subtitle")}</p>
                        <div className="grid md:grid-cols-3 gap-6 my-6">
                            <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                                <h4 className="font-bold text-primary mb-2">{t("whitepaper.products_2019_title")}</h4>
                                <p className="text-sm text-muted-foreground">{t("whitepaper.products_2019_desc")}</p>
                            </div>
                            <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                                <h4 className="font-bold text-primary mb-2">{t("whitepaper.products_2020_title")}</h4>
                                <p className="text-sm text-muted-foreground">{t("whitepaper.products_2020_desc")}</p>
                            </div>
                            <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                                <h4 className="font-bold text-primary mb-2">{t("whitepaper.products_2021_title")}</h4>
                                <p className="text-sm text-muted-foreground">{t("whitepaper.products_2021_desc")}</p>
                            </div>
                        </div>

                        <h4 className="text-xl font-semibold text-foreground mt-8">{t("whitepaper.products_legal_title")}</h4>
                        <p className="text-muted-foreground">{t("whitepaper.products_legal_subtitle")}</p>
                        <ul className="list-disc pl-6 text-muted-foreground mt-2">
                            <li><strong className="text-foreground">{t("whitepaper.products_legal_fr_title")}</strong> {t("whitepaper.products_legal_fr_desc")}</li>
                            <li><strong className="text-foreground">{t("whitepaper.products_legal_bvi_title")}</strong> {t("whitepaper.products_legal_bvi_desc")}</li>
                        </ul>
                    </section>

                    {/* 6. How We Make Money */}
                    <section className="space-y-4">
                        <h3 className="text-2xl font-bold text-foreground">{t("whitepaper.money_title")}</h3>
                        <p className="text-muted-foreground">{t("whitepaper.money_subtitle")}</p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="p-4 rounded border border-border text-center">
                                <span className="block text-2xl font-bold text-primary mb-1">3-5%</span>
                                <span className="text-sm font-semibold">{t("whitepaper.money_creation_fee")}</span>
                                <p className="text-xs text-muted-foreground mt-2">{t("whitepaper.money_creation_desc")}</p>
                            </div>
                            <div className="p-4 rounded border border-border text-center">
                                <span className="block text-2xl font-bold text-primary mb-1">1.5%</span>
                                <span className="text-sm font-semibold">{t("whitepaper.money_storage_fee")}</span>
                                <p className="text-xs text-muted-foreground mt-2">{t("whitepaper.money_storage_desc")}</p>
                            </div>
                            <div className="p-4 rounded border border-border text-center">
                                <span className="block text-2xl font-bold text-primary mb-1">1%</span>
                                <span className="text-sm font-semibold">{t("whitepaper.money_trading_fee")}</span>
                                <p className="text-xs text-muted-foreground mt-2">{t("whitepaper.money_trading_desc")}</p>
                            </div>
                            <div className="p-4 rounded border border-border text-center">
                                <span className="block text-2xl font-bold text-primary mb-1">$$</span>
                                <span className="text-sm font-semibold">{t("whitepaper.money_delivery_fee")}</span>
                                <p className="text-xs text-muted-foreground mt-2">{t("whitepaper.money_delivery_desc")}</p>
                            </div>
                        </div>
                    </section>

                    {/* 7. The Plan (Roadmap) */}
                    <section className="space-y-6">
                        <h3 className="text-2xl font-bold text-foreground">{t("whitepaper.roadmap_title")}</h3>
                        <div className="relative border-l border-primary/30 ml-3 space-y-8 pl-8 py-2">
                            <div className="relative">
                                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-2 border-primary bg-background"></span>
                                <h4 className="text-lg font-bold text-primary">{t("whitepaper.roadmap_p1_title")}</h4>
                                <div className="mt-2 space-y-1">
                                    <p className="text-muted-foreground"><strong className="text-foreground">{t("whitepaper.roadmap_p1_goal_label")}</strong> {t("whitepaper.roadmap_p1_goal_desc")}</p>
                                    <p className="text-muted-foreground"><strong className="text-foreground">{t("whitepaper.roadmap_p1_action_label")}</strong> {t("whitepaper.roadmap_p1_action_desc")}</p>
                                </div>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-2 border-primary bg-background"></span>
                                <h4 className="text-lg font-bold text-primary">{t("whitepaper.roadmap_p2_title")}</h4>
                                <div className="mt-2 space-y-1">
                                    <p className="text-muted-foreground"><strong className="text-foreground">{t("whitepaper.roadmap_p2_goal_label")}</strong> {t("whitepaper.roadmap_p2_goal_desc")}</p>
                                    <p className="text-muted-foreground"><strong className="text-foreground">{t("whitepaper.roadmap_p2_action_label")}</strong> {t("whitepaper.roadmap_p2_action_desc")}</p>
                                </div>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-2 border-primary bg-background"></span>
                                <h4 className="text-lg font-bold text-primary">{t("whitepaper.roadmap_p3_title")}</h4>
                                <div className="mt-2 space-y-1">
                                    <p className="text-muted-foreground"><strong className="text-foreground">{t("whitepaper.roadmap_p3_goal_label")}</strong> {t("whitepaper.roadmap_p3_goal_desc")}</p>
                                    <p className="text-muted-foreground"><strong className="text-foreground">{t("whitepaper.roadmap_p3_action_label")}</strong> {t("whitepaper.roadmap_p3_action_desc")}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 8. Safety (Risk Management) */}
                    <section className="space-y-4">
                        <h3 className="text-2xl font-bold text-foreground">{t("whitepaper.safety_title")}</h3>
                        <div className="grid gap-4">
                            <div className="p-4 border border-border rounded bg-card/50">
                                <h4 className="font-semibold text-foreground">{t("whitepaper.safety_legal_title")}</h4>
                                <p className="text-sm text-muted-foreground mt-1">{t("whitepaper.safety_legal_desc")}</p>
                            </div>
                            <div className="p-4 border border-border rounded bg-card/50">
                                <h4 className="font-semibold text-foreground">{t("whitepaper.safety_storage_title")}</h4>
                                <p className="text-sm text-muted-foreground mt-1">{t("whitepaper.safety_storage_desc")}</p>
                            </div>
                            <div className="p-4 border border-border rounded bg-card/50">
                                <h4 className="font-semibold text-foreground">{t("whitepaper.safety_money_title")}</h4>
                                <p className="text-sm text-muted-foreground mt-1">{t("whitepaper.safety_money_desc")}</p>
                            </div>
                        </div>
                    </section>

                    {/* Footer Contact */}
                    <section className="pt-8 border-t border-border text-center space-y-2">
                        <h4 className="text-lg font-semibold text-foreground">{t("whitepaper.footer_contact_title")}</h4>
                        <p className="text-muted-foreground">{t("whitepaper.footer_locations")}</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Whitepaper;
