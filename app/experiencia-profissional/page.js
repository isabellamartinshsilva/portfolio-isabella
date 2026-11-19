import Linha from "../../components/Linha";
import { profissional } from "../../lib/data";

export const metadata = { title: "Experiência profissional | Isabella Martins" };

export default function Profissional() {
  return (
    <div className="pagina">
      <h1>Experiência profissional</h1>
      <p className="intro">Trabalhos em equipe com entrega e prazo reais.</p>
      <Linha itens={profissional} />
    </div>
  );
}
