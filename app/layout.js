import "./globals.css";
import Nav from "../components/Nav";
import { perfil } from "../lib/data";

export const metadata = {
  title: `${perfil.nome} | Currículo e portfólio`,
  description: perfil.frase,
  openGraph: {
    title: `${perfil.nome} | Currículo e portfólio`,
    description: perfil.frase,
    images: ["/img/isabella-techwoman.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Public+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip" href="#conteudo">Ir para o conteúdo</a>
        <Nav />
        <main id="conteudo">{children}</main>
        <footer className="rodape">
          <p>
            {perfil.nome}, {perfil.cidade}. Feito com Next.js e hospedado na Vercel.
          </p>
          <p>
            <a href={perfil.githubUrl}>GitHub</a>
            {perfil.linkedin ? <> <a href={perfil.linkedin}>LinkedIn</a></> : null}
            {" "}
            <a href={`mailto:${perfil.email}`}>E-mail</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
