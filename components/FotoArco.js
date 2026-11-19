// Foto em formato de arco, como a copa de uma sombrinha de frevo.
export default function FotoArco({ foto, legenda }) {
  return (
    <figure className="arco">
      <div className="arco-anel" aria-hidden="true" />
      <div className="arco-foto">
        <img src={foto.src} alt={foto.alt} width={foto.largura} height={foto.altura} />
      </div>
      {legenda && <figcaption>{legenda}</figcaption>}
    </figure>
  );
}
