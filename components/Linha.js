// Linha do tempo reutilizada nas páginas de experiência.
export default function Linha({ itens }) {
  return (
    <ol className="linha">
      {itens.map((it) => (
        <li key={it.titulo}>
          <time>{it.periodo}</time>
          <h2>{it.titulo}</h2>
          <p className="local">{it.local}</p>
          <p>{it.descricao}</p>
          {it.destaques?.length > 0 && (
            <ul>
              {it.destaques.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
