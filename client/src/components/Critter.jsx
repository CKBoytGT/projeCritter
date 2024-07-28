import CritterGiantPanda from "./CritterGiantPanda";
import CritterRedPanda from "./CritterRedPanda";
import CritterTrashPanda from "./CritterTrashPanda";

const Critter = ({ species = "Giant Panda", mood }) => {
  if (species === "Giant Panda") {
    return <CritterGiantPanda mood={mood} />;
  } else if (species === "Red Panda") {
    return <CritterRedPanda mood={mood} />;
  } else if (species === "Trash Panda") {
    return <CritterTrashPanda mood={mood} />;
  } else {
    return <p>Error loading critter species.</p>;
  }
};

export default Critter;
