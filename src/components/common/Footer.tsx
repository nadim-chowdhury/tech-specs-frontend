import Link from "next/link";
import { socialMedia } from "@/utils/social-media";
import { footerData, footerLinks } from "@/utils/footer-demo-data";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 mt-12 lg:mt-16">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-6 tracking-wide">
            Technology Specifications
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Your ultimate source for in-depth reviews, detailed specifications,
            and expert opinions on the latest mobile phones, laptops, cameras,
            PC hardware, and more. Stay updated with the newest technology
            trends and make informed decisions.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-slate-300">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Grid Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12 pt-12 border-t border-slate-700">
          {footerData.sections?.map((section, index) => (
            <div key={index} className="text-left">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.url}>
                      <span className="text-slate-400 hover:text-white transition-colors">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-4 border-t border-slate-700">
          <h4 className="text-slate-400 text-center md:text-left">
            &copy; 2024 TechSpecs. All Rights Reserved.
          </h4>

          <div className="flex items-center gap-4">
            {socialMedia?.map((social) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-200 transition-colors duration-300"
                >
                  <IconComponent className="w-4 h-4" />
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
