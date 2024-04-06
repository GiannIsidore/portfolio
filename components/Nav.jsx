import Link from "next/link";

import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
const links = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "My projects" },
  { path: "/contact", name: "Contacts" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((links, index) => {
        return (
          <Link
            href={links.path}
            key={index}
            className={`capitalize  ${linkStyles}`}
          >
            {links.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {links.name}
          </Link>
        );
      })}
    </nav>
  );
};
export default Nav;
