
import React from "react";
import { Card } from "@/components/ui/card";
import { Mail, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="min-h-[70vh] bg-syria-light py-16 flex-grow">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-4 text-syria-dark">{t('about.title')}</h1>
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-syria-teal mb-2">{t('about.mission')}</h2>
            <p className="text-gray-700">
              {t('about.missionText')}
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-syria-teal mb-2">{t('about.whoWeAre')}</h2>
            <p className="text-gray-700">
              {t('about.whoWeAreText')}
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-syria-teal mb-2">{t('about.howItWorks')}</h2>
            <ul className="list-disc ml-8 text-gray-700">
              <li>{t('about.howItWorksSteps.step1')}</li>
              <li>{t('about.howItWorksSteps.step2')}</li>
              <li>{t('about.howItWorksSteps.step3')}</li>
            </ul>
          </section>
          <Card className="p-6 bg-white flex flex-col gap-2">
            <div className="flex items-center gap-2 text-syria-teal text-lg font-medium mb-1">
              <Info size={20} /> {t('about.generalInquiries')} / {t('about.contact')}
            </div>
            <p className="text-gray-700 mb-3">{t('about.contactText')}</p>
            <div className="flex items-center gap-3 text-gray-800">
              <Mail size={18} />{" "}
              <a
                href="mailto:info@syriahealthcare.com"
                className="underline hover:text-syria-teal"
              >
                {t('about.email')}
              </a>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
