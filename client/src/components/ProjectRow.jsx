import { useState } from "react";
import IconGiantPanda from "./ui/IconGiantPanda";
import IconRedPanda from "./ui/IconRedPanda";
import IconTrashPanda from "./ui/IconTrashPanda";
import Button from "./ui/Button";
import { FaEdit } from "react-icons/fa";
import Modal from "./ui/Modal";
import EditProjectForm from "./EditProjectForm";

const ProjectRow = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <tr
      key={project._id}
      className="flex justify-between items-center gap-4 rounded-xl border-black border-4 even:shadow-[0.3rem_0.3rem_#bbf7d0] odd:shadow-[0.3rem_0.3rem_#c7d2fe] even:bg-indigo-100 odd:bg-emerald-50 p-4"
    >
      <td className="flex items-center">
        {project.critterSpecies === "Giant Panda" && (
          <IconGiantPanda className="size-12 shrink-0" />
        )}
        {project.critterSpecies === "Red Panda" && (
          <IconRedPanda className="size-12 shrink-0" />
        )}
        {project.critterSpecies === "Trash Panda" && (
          <IconTrashPanda className="size-12 shrink-0" />
        )}
        <span className="sr-only">{project.critterSpecies}</span>
        <a href={`/project/${project._id}`} className="font-semibold ml-4">
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
      </td>
    </tr>
  );
};

export default ProjectRow;
