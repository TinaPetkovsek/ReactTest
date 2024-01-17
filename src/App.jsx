import { Button } from "./Button";
import { Zival } from "./Zival.jsx";

export default function App() {
  const zival = {
    ime: "Pingvin",
    opis: "Zivijo na enem od polov ... ne vem na katerem ...",
  };

  return <Zival zival={zival}></Zival>;
}
