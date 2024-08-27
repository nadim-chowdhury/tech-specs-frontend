import { quickLinks, topMobileBrands, topPcBrands } from "@/utils/quick-links";
import { socialMedia } from "@/utils/social-media";
import Link from "next/link";
import LinkList from "./LinkList";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-8 mt-16 border-t border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="grid grid-cols-1 gap-8 w-full">
          <LinkList title="Quick Links" links={quickLinks} />
          <LinkList title="Top Mobile Brands" links={topMobileBrands} />
          <LinkList title="Top PC Brands" links={topPcBrands} />
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 py-4">
          <p className="">&copy; 2024 TechSpecsMag. All Rights Reserved.</p>

          <div className="flex items-center gap-4">
            {socialMedia?.map((social) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-slate-700 transition-all duration-300"
                >
                  <IconComponent className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
