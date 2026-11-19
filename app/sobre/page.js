import { sobre, tecnologiasSite, perfil, fotos } from "../../lib/data";

export const metadata = { title: "Sobre | Isabella Martins" };

export default function Sobre() {
  return (
    <div className="pagina">
      <h1>Sobre mim</h1>
      <figure className="foto-larga">
        <img
          src={fotos.retrato.src}
          alt={fotos.retrato.alt}
          width={fotos.retrato.largura}
          height={fotos.retrato.altura}
        />
        <figcaption>No Tech Woman 2026.</figcaption>
      </figure>
      <div className="prosa">
        {sobre.texto.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <p>
          Quer conversar? Escreva para <a href={`mailto:${perfil.email}`}>{perfil.email}</a>
          {perfil.linkedin ? (
            <> ou chame no <a href={perfil.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></>
          ) : null}
          .
        </p>
      </div>

      <h2 className="subtitulo">Pontos fortes</h2>
      <ul className="chips chips-grandes">
        {sobre.forcas.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <h2 className="subtitulo">Tecnologias usadas neste site</h2>
      <p className="intro">
        Tudo o que foi usado para construir este portfólio, e para que serve.
      </p>
      <div className="grupos">
        {tecnologiasSite.map((g) => (
          <section key={g.grupo}>
            <h3>{g.grupo}</h3>
            <ul>
              {g.itens.map(([nome, uso]) => (
                <li key={nome}>
                  <strong>{nome}</strong>
                  <span>{uso}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
