// CUSTOM PROPS
// page - determines which queries to refetch based on what page the modal is opened from
// --- "dashboard" - (default) refetch GetProjects
// --- "project" - refetch GetProject, singular

import { useState } from "react";
import Button from "./ui/Button";
import InputField from "./ui/InputField";
import { useMutation } from "@apollo/client";
import { UPDATE_PROJECT } from "../graphql/mutations/project.mutation";
import { DELETE_PROJECT } from "../graphql/mutations/project.mutation";

const EditProjectForm = ({ project, closeModal, page = "dashboard" }) => {
  const [projectData, setProjectData] = useState({
    _id: project._id,
    projectName: project.projectName,
    critterName: project.critterName,
    critterSpecies: project.critterSpecies,
  });
  const [warning, setWarning] = useState("");

  let queriesToRefetch = [];
  if (page === "project") {
    queriesToRefetch = ["GetProject"];
  } else {
    queriesToRefetch = ["GetProjects"];
  }

  const [updateProject, { loading: updateLoading }] = useMutation(
    UPDATE_PROJECT,
    {
      refetchQueries: queriesToRefetch,
    },
  );

  const [deleteProject, { loading: deleteLoading }] = useMutation(
    DELETE_PROJECT,
    {
      refetchQueries: queriesToRefetch,
    },
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
        autocomplete="off"
        value={projectData.projectName}
        onChange={handleChange}
      />
      <InputField
        label="Critter Name"
        id={`${project._id}-critterName`}
        name="critterName"
        autocomplete="off"
        value={projectData.critterName}
        onChange={handleChange}
      />
      <InputField
        label="Critter Species"
        inputType="select"
        id={`${project._id}-critterSpecies`}
        name="critterSpecies"
        autocomplete="off"
        value={projectData.critterSpecies}
        onChange={handleChange}
      >
        <option value={"Giant Panda"}>Giant Panda</option>
        <option value={"Red Panda"}>Red Panda</option>
        <option value={"Trash Panda"}>Trash Panda</option>
      </InputField>
      <div className="mx-auto flex w-fit items-center justify-center gap-4">
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
        className={`mx-auto border border-red-800 bg-red-100 p-2 text-sm font-medium text-red-800 ${
          !warning && "hidden"
        }`}
      >
        {warning}
      </p>
    </form>
  );
};

export default EditProjectForm;
