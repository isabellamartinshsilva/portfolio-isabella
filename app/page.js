import Link from "next/link";
import FotoArco from "../components/FotoArco";
import GithubStats from "../components/GithubStats";
import { perfil, fotos, eventoTechWoman } from "../lib/data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-texto">
          <p className="hero-sub">{perfil.titulo}</p>
          <h1>
           <span className="nome">Isabella Martins.</span>
          </h1>
          <p className="hero-frase">{perfil.frase}</p>
          <div className="botoes">
            <Link className="btn btn-cheio" href="/projetos">Ver projetos</Link>
            <Link className="btn" href="/sobre">Conhecer meu trabalho</Link>
          </div>
        </div>
        <FotoArco foto={fotos.retrato} legenda="No Tech Woman 2026" />
      </section>

      <section className="bloco">
        <div className="bloco-cab">
          <h2>Minha atividade no GitHub</h2>
          <p>Números puxados ao vivo da API pública do GitHub.</p>
        </div>
        <GithubStats user={perfil.github} />
      </section>

      <section className="bloco evento">
        <figure>
          <img
            src={fotos.plateia.src}
            alt={fotos.plateia.alt}
            width={fotos.plateia.largura}
            height={fotos.plateia.altura}
            loading="lazy"
          />
        </figure>
        <div>
          <h2>{eventoTechWoman.titulo}</h2>
          <p>{eventoTechWoman.texto}</p>
          <Link className="btn" href="/experiencia-academica">Ver experiência acadêmica</Link>
        </div>
      </section>

      <section className="bloco atalhos">
        <Link href="/experiencia-academica">
          <h3>Experiência acadêmica</h3>
          <p>Sistemas para Internet na Unicap, a residência e os eventos que frequentei.</p>
        </Link>
        <Link href="/experiencia-profissional">
          <h3>Experiência profissional</h3>
          <p>Hackathon Converge Challenge e o projeto integrador.</p>
        </Link>
        <Link href="/projetos">
          <h3>Projetos desenvolvidos</h3>
          <p>Destaques e todos os repositórios públicos.</p>
        </Link>
      </section>
    </>
  );
}
