import { useState } from "react";
import Button from "./ui/Button";
import InputField from "./ui/InputField";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT } from "../graphql/mutations/project.mutation";

const AddProjectForm = ({ userId, closeModal }) => {
  const [projectData, setProjectData] = useState({
    userId: userId,
    projectName: "",
    critterName: "",
    critterSpecies: "Giant Panda",
  });
  const [warning, setWarning] = useState("");

  const [createProject, { loading }] = useMutation(CREATE_PROJECT, {
    refetchQueries: ["GetProjects"],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setWarning("");

      await createProject({ variables: { input: projectData } });

      closeModal(false);

      setProjectData({
        userId: userId,
        projectName: "",
        critterName: "",
        critterSpecies: "Giant Panda",
      });
    } catch (err) {
      console.error("Error creating project: ", err);
      setWarning(err.message);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <InputField
        label="Project Name"
        id="add-projectName"
        name="projectName"
        autocomplete="off"
        value={projectData.projectName}
        onChange={handleChange}
      />
      <InputField
        label="Critter Name"
        id="add-critterName"
        name="critterName"
        autocomplete="off"
        value={projectData.critterName}
        onChange={handleChange}
      />
      <InputField
        label="Critter Species"
        inputType="select"
        id="add-critterSpecies"
        name="critterSpecies"
        autocomplete="off"
        value={projectData.critterSpecies}
        onChange={handleChange}
      >
        <option value={"Giant Panda"}>Giant Panda</option>
        <option value={"Red Panda"}>Red Panda</option>
        <option value={"Trash Panda"}>Trash Panda</option>
      </InputField>
      <Button
        type="submit"
        className="mx-auto mt-1 max-w-fit"
        disabled={loading}
      >
        {loading ? "Loading..." : "Add Project"}
      </Button>
      <p
        className={`mx-auto border border-red-800 p-2 bg-red-100 text-sm text-red-800 font-medium ${
          !warning && "hidden"
        }`}
      >
        {warning}
      </p>
    </form>
  );
};

export default AddProjectForm;
