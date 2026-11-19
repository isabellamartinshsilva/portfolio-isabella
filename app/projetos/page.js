import GithubRepos from "../../components/GithubRepos";
import { projetos, perfil } from "../../lib/data";

export const metadata = { title: "Projetos | Isabella Martins" };

export default function Projetos() {
  return (
    <div className="pagina">
      <h1>Projetos desenvolvidos</h1>
      <p className="intro">Os principais trabalhos e, mais abaixo, tudo o que está no meu GitHub.</p>

      <div className="destaques">
        {projetos.map((p) => (
          <article key={p.nome}>
            <h2>{p.nome}</h2>
            <p>{p.resumo}</p>
            <ul className="chips">
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            {p.link && (
              <a className="btn" href={p.link} target="_blank" rel="noreferrer">
                Ver código
              </a>
            )}
          </article>
        ))}
      </div>

      <h2 className="subtitulo">Repositórios no GitHub</h2>
      <p className="intro">Lista carregada pela API do GitHub, ordenada pela atividade mais recente.</p>
      <GithubRepos user={perfil.github} />
    </div>
  );
}
