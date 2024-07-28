import Critter from "./Critter";
import "./CritterAnimations.css";
import InputField from "./ui/InputField";
import { useState } from "react";

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
    <div className="mx-auto flex w-full max-w-2xl grow flex-col items-center justify-center p-4 md:flex-row md:gap-10">
      <div className="w-full md:basis-2/3">
        <Critter
          species={critterSettings.species}
          mood={critterSettings.mood}
        />
      </div>
      <div className="flex w-full flex-col rounded-xl border-4 border-black bg-white shadow-[0.3rem_0.3rem_#bbf7d0] md:basis-1/3">
        <div className="bg-indigo-650 flex w-full items-center rounded-t-md border-b-4 border-black text-right text-white">
          <h2 id="dialog_label" className="pl-2 text-center text-xl font-bold">
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
