import { useState } from "react";
import "./CritterAnimations.css";
import Critter from "./Critter";
import InputField from "./ui/InputField";

// This is a component for testing Critter animations.
// Uncomment the route in App.jsx to view.

const AnimationTester = () => {
  const [critterSettings, setCritterSettings] = useState({
    species: "Giant Panda",
    mood: "Content",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCritterSettings((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center grow md:gap-10 mx-auto w-full max-w-2xl p-4">
      <div className="md:basis-2/3 w-full">
        <Critter
          species={critterSettings.species}
          mood={critterSettings.mood}
        />
      </div>
      <div className="flex flex-col md:basis-1/3 rounded-xl border-black border-4 w-full bg-white shadow-[0.3rem_0.3rem_#bbf7d0]">
        <div className="flex items-center w-full rounded-t-md border-b-4 border-black bg-indigo-650 text-white text-right">
          <h2 id="dialog_label" className="pl-2 text-xl font-bold text-center">
            Tester
          </h2>
        </div>
        <div className="flex flex-col gap-2 p-4 pt-2">
          <InputField
            label="Species"
            inputType="select"
            id="species"
            name="species"
            value={critterSettings.species}
            onChange={handleChange}
          >
            <option value={"Giant Panda"}>Giant Panda</option>
            <option value={"Red Panda"}>Red Panda</option>
            <option value={"Trash Panda"}>Trash Panda</option>
          </InputField>
          <InputField
            label="Mood"
            inputType="select"
            id="mood"
            name="mood"
            value={critterSettings.mood}
            onChange={handleChange}
          >
            <option value={"Happy"}>Happy</option>
            <option value={"Chipper"}>Chipper</option>
            <option value={"Content"}>Content</option>
            <option value={"Nervous"}>Nervous</option>
            <option value={"Stressed"}>Stressed</option>
            <option value={"Panicking"}>Panicking</option>
            <option value={"Wiped-Out"}>Wiped-Out</option>
          </InputField>
        </div>
      </div>
    </div>
  );
};

export default AnimationTester;
