import { useState } from "react";
import Button from "./ui/Button";
import InputField from "./ui/InputField";
import { useMutation } from "@apollo/client";
import { UPDATE_PROJECT } from "../graphql/mutations/project.mutation";
import { DELETE_PROJECT } from "../graphql/mutations/project.mutation";

const EditProjectForm = ({ project, closeModal }) => {
  const [projectData, setProjectData] = useState({
    _id: project._id,
    projectName: project.projectName,
    critterName: project.critterName,
    critterSpecies: project.critterSpecies,
  });
  const [warning, setWarning] = useState("");

  // TODO: change when relationships are added
  const [updateProject, { loading: updateLoading }] = useMutation(
    UPDATE_PROJECT,
    {
      refetchQueries: ["GetProjects"],
    }
  );

  const [deleteProject, { loading: deleteLoading }] = useMutation(
    DELETE_PROJECT,
    {
      refetchQueries: ["GetProjects"],
    }
  );

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

      await updateProject({ variables: { input: projectData } });

      closeModal(false);
    } catch (err) {
      console.error("Error updating project: ", err);
      setWarning(err.message);
    }
  };

  const handleDelete = async () => {
    try {
      setWarning("");

      await deleteProject({ variables: { projectId: project._id } });

      closeModal(false);
    } catch (err) {
      console.error("Error deleting project: ", err);
      setWarning(err.message);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <InputField
        label="Project Name"
        id={`${project._id}-projectName`}
        name="projectName"
        value={projectData.projectName}
        onChange={handleChange}
      />
      <InputField
        label="Critter Name"
        id={`${project._id}-critterName`}
        name="critterName"
        value={projectData.critterName}
        onChange={handleChange}
      />
      <InputField
        label="Critter Species"
        inputType="select"
        id={`${project._id}-critterSpecies`}
        name="critterSpecies"
        value={projectData.critterSpecies}
        onChange={handleChange}
        // note="*More species coming soon!"
      >
        <option value={"Giant Panda"}>Giant Panda</option>
        <option value={"Red Panda"}>Red Panda</option>
        <option value={"Trash Panda"}>Trash Panda</option>
      </InputField>
      <div className="flex justify-center items-center gap-4 mx-auto w-fit">
        <Button
          type="submit"
          className="mx-auto mt-1 max-w-fit"
          disabled={updateLoading || deleteLoading}
        >
          {updateLoading ? "Loading..." : "Update"}
        </Button>
        <Button
          type="button"
          style="danger"
          className="mx-auto mt-1 max-w-fit"
          onClick={handleDelete}
          disabled={updateLoading || deleteLoading}
        >
          {deleteLoading ? "Loading..." : "Delete"}
        </Button>
      </div>
      <p
        className={`mx-auto border border-red-800 p-2 bg-red-100 text-sm text-red-800 ${
          !warning && "hidden"
        }`}
      >
        {warning}
      </p>
    </form>
  );
};

export default EditProjectForm;
