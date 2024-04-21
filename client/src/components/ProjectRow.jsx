import { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../graphql/mutations/project.mutation";
import IconGiantPanda from "./ui/IconGiantPanda";
import IconRedPanda from "./ui/IconRedPanda";
import IconTrashPanda from "./ui/IconTrashPanda";
import Button from "./ui/Button";
import { FaEdit } from "react-icons/fa";
import { BsFillTrash3Fill } from "react-icons/bs";
import Modal from "./ui/Modal";
import EditProjectForm from "./EditProjectForm";

const ProjectRow = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [deleteProject, { loading }] = useMutation(DELETE_PROJECT, {
    refetchQueries: ["GetProjects"],
  });

  const handleDelete = async () => {
    try {
      await deleteProject({ variables: { projectId: project._id } });
    } catch (err) {
      console.error("Error deleting project: ", err);
      //TODO: add toast for error reporting
    }
  };

  return (
    <tr
      key={project._id}
      className="flex justify-between items-center gap-4 rounded-xl border-black border-4 even:shadow-[0.3rem_0.3rem_#bbf7d0] odd:shadow-[0.3rem_0.3rem_#c7d2fe] even:bg-indigo-100 odd:bg-emerald-50 p-4"
    >
      <td>
        {project.critterSpecies === "Giant Panda" && (
          <IconGiantPanda className="size-12" />
        )}
        {project.critterSpecies === "Red Panda" && (
          <IconRedPanda className="size-12" />
        )}
        {project.critterSpecies === "Trash Panda" && (
          <IconTrashPanda className="size-12" />
        )}
        <span className="sr-only">{project.critterSpecies}</span>
      </td>
      <td>
        <a href={`/project/${project._id}`} className="font-semibold">
          {project.projectName}
        </a>
      </td>
      <td className="flex flex-row gap-4">
        <Button style="icon" onClick={() => setModalOpen(true)}>
          <FaEdit className="mx-auto size-6 active:translate-x-0.5 active:translate-y-0.5" />
          <span className="sr-only">Edit</span>
        </Button>
        <Modal
          title={"Edit Project"}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        >
          <EditProjectForm project={project} closeModal={setModalOpen} />
        </Modal>
        {/* TODO: confirmation modal before deleting */}
        <Button style="icon" onClick={handleDelete} disabled={loading}>
          <BsFillTrash3Fill className="mx-auto size-6 active:translate-x-0.5 active:translate-y-0.5" />
          <span className="sr-only">{loading ? "Loading..." : "Delete"}</span>
        </Button>
      </td>
    </tr>
  );
};

export default ProjectRow;
