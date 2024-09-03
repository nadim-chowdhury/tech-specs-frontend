// import { quickLinks, topMobileBrands, topPcBrands } from "@/utils/quick-links";
// import { socialMedia } from "@/utils/social-media";
// import Link from "next/link";
// import LinkList from "./LinkList";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-slate-900 text-white pt-8 mt-16 border-t border-slate-200">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8">
//         <div className="grid grid-cols-1 gap-8 w-full">
//           <LinkList title="Quick Links" links={quickLinks} />
//           <LinkList title="Top Mobile Brands" links={topMobileBrands} />
//           <LinkList title="Top PC Brands" links={topPcBrands} />
//         </div>
//       </div>

//       <div className="border-t border-slate-200 mt-8">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 py-4">
//           <p className="">&copy; 2024 TechSpecsMag. All Rights Reserved.</p>

//           <div className="flex items-center gap-4">
//             {socialMedia?.map((social) => {
//               const IconComponent = social.icon;
//               return (
//                 <Link
//                   key={social.id}
//                   href={social.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-slate-300 hover:text-slate-700 transition-all duration-300"
//                 >
//                   <IconComponent className="w-5 h-5" />
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { footerData } from "@/utils/footer-demo-data";
import { socialMedia } from "@/utils/social-media";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 mt-16">
      <div className="container mx-auto">
        <div className="text-center mb-12 border-b border-slate-700 pb-6">
          <h3 className="text-xl font-semibold mb-4">
            Technology Specifications
          </h3>
          <p className="text-slate-400">
            Your ultimate source for in-depth reviews, detailed specifications,
            and expert opinions on the latest mobile phones, laptops, cameras,
            PC hardware, and more. Stay updated with the newest technology
            trends and make informed decisions.
          </p>

          <div className="text-slate-300 hover:text-white flex flex-wrap items-center gap-8 justify-center mt-4">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerData.sections.map((section, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="flex flex-wrap items-center justify-center gap-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <Link href={link.url}>
                      <span className="text-slate-400 hover:text-white">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-4 border-t border-slate-700 mt-12">
          <h4 className="text-slate-400 font-medium text-center">
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
                  className="text-slate-400 hover:text-slate-200 transition-all duration-300"
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
