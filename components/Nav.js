"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/experiencia-academica", label: "Acadêmica" },
  { href: "/experiencia-profissional", label: "Profissional" },
  { href: "/projetos", label: "Projetos" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="topo">
      <Link href="/" className="marca" aria-label="Isabella Martins, página inicial">
        <span className="marca-pontos" aria-hidden="true">
          <i /><i /><i /><i />
        </span>
        Isabella Martins
      </Link>
      <nav aria-label="Principal">
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
