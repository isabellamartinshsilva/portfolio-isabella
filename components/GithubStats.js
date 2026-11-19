"use client";

import { useEffect, useState } from "react";

// Integração com a API pública do GitHub: https://docs.github.com/rest
export default function GithubStats({ user }) {
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(`https://api.github.com/users/${user}`, { signal: ctrl.signal })
      .then((r) => {
        if (!r.ok) throw new Error(r.status);
        return r.json();
      })
      .then(setDados)
      .catch((e) => {
        if (e.name !== "AbortError") setErro(true);
      });
    return () => ctrl.abort();
  }, [user]);

  if (erro) {
    return (
      <p className="aviso">
        Não consegui carregar os dados do GitHub agora. Abra o perfil direto em
        github.com/{user}.
      </p>
    );
  }

  const itens = [
    ["Repositórios públicos", dados?.public_repos],
    ["Seguidores", dados?.followers],
    ["Seguindo", dados?.following],
  ];

  return (
    <dl className="stats" aria-busy={!dados}>
      {itens.map(([rotulo, valor]) => (
        <div key={rotulo}>
          <dd>{valor ?? "–"}</dd>
          <dt>{rotulo}</dt>
        </div>
      ))}
    </dl>
  );
}
