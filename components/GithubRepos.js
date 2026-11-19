"use client";

import { useEffect, useState } from "react";

const cores = {
  JavaScript: "#f1c40f",
  TypeScript: "#3178c6",
  Python: "#3572a5",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#7b4fd6",
  PHP: "#777bb3",
  "C#": "#178600",
  C: "#555555",
};

function dataCurta(iso) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    month: "short",
    year: "numeric",
  });
}

export default function GithubRepos({ user }) {
  const [repos, setRepos] = useState(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(
      `https://api.github.com/users/${user}/repos?sort=updated&per_page=100`,
      { signal: ctrl.signal }
    )
      .then((r) => {
        if (!r.ok) throw new Error(r.status);
        return r.json();
      })
      .then((lista) => setRepos(lista.filter((r) => !r.fork)))
      .catch((e) => {
        if (e.name !== "AbortError") setErro(true);
      });
    return () => ctrl.abort();
  }, [user]);

  if (erro) {
    return (
      <p className="aviso">
        Não consegui carregar os repositórios agora (o GitHub limita as
        consultas sem login). Tente recarregar a página em alguns minutos.
      </p>
    );
  }
  if (!repos) return <p className="aviso">Carregando repositórios do GitHub…</p>;
  if (repos.length === 0)
    return (
      <p className="aviso">
        Ainda não há repositórios públicos nesta conta. Quando você publicar um,
        ele aparece aqui automaticamente.
      </p>
    );

  return (
    <ul className="repos">
      {repos.map((r) => (
        <li key={r.id}>
          <a href={r.html_url} target="_blank" rel="noreferrer">
            <h3>{r.name}</h3>
            <p>{r.description || "Sem descrição."}</p>
            <footer>
              {r.language && (
                <span>
                  <i
                    className="lang"
                    style={{ background: cores[r.language] || "#8a93b2" }}
                  />
                  {r.language}
                </span>
              )}
              <span>{r.stargazers_count} estrelas</span>
              <span>Atualizado em {dataCurta(r.pushed_at)}</span>
            </footer>
          </a>
        </li>
      ))}
    </ul>
  );
}
