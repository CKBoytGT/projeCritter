import "./CritterAnimations.css";
import CritterHeadGiantPanda from "./CritterHeadGiantPanda";
import CritterHeadRedPanda from "./CritterHeadRedPanda";
import CritterHeadSkeleton from "./CritterHeadSkeleton";
import CritterHeadTrashPanda from "./CritterHeadTrashPanda";

const CritterHead = ({ species, mood }) => {
  if (species === 0) {
    return <CritterHeadSkeleton />;
  } else if (species === 1) {
    return <CritterHeadGiantPanda mood={mood} />;
  } else if (species === 2) {
    return <CritterHeadRedPanda mood={mood} />;
  } else if (species === 3) {
    return <CritterHeadTrashPanda mood={mood} />;
  } else {
    return <p>Error loading critter species.</p>;
  }
};

export default CritterHead;
