import Link from "next/link";
import { LinkItem } from "@/utils/types";

interface LinkListProps {
  title: string;
  links: LinkItem[];
}

const LinkList: React.FC<LinkListProps> = ({ title, links }) => (
  <div>
    <h4 className="text-lg font-semibold mb-4 border-b pb-2">{title}</h4>
    <ul className="flex gap-4 flex-wrap">
      {links?.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="hover:bg-slate-600 transition-all duration-300 border px-4 py-1 rounded-full text-slate-300"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default LinkList;
