import { PreberiVec } from "./PreberiVec";
import { Profil } from "./Profil";

export function Zival(props) {
  return (
    <div>
      <Profil zival={props.zival}></Profil>
      <PreberiVec></PreberiVec>
    </div>
  );
}
