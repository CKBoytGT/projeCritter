import "./CritterAnimations.css";
import CritterGiantPanda from "./CritterGiantPanda";
import CritterRedPanda from "./CritterRedPanda";
import CritterSkeleton from "./CritterSkeleton";
import CritterTrashPanda from "./CritterTrashPanda";

const Critter = ({ species = "loading", mood = "loading" }) => {
  if (species === "loading" || mood === "loading") {
    return <CritterSkeleton />;
  } else if (species === "Giant Panda") {
    return <CritterGiantPanda mood={mood} />;
  } else if (species === "Red Panda") {
    return <CritterRedPanda mood={mood} />;
  } else {
    return <CritterTrashPanda mood={mood} />;
  }
};

export default Critter;
