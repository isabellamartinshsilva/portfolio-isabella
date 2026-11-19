import Linha from "../../components/Linha";
import { academica } from "../../lib/data";

export const metadata = { title: "Experiência acadêmica | Isabella Martins" };

export default function Academica() {
  return (
    <div className="pagina">
      <h1>Experiência acadêmica</h1>
      <p className="intro">Onde estudo e o que já pratiquei na faculdade e na residência.</p>
      <Linha itens={academica} />
    </div>
  );
}
