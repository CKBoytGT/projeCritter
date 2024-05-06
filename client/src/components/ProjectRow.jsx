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
    <div
      key={project._id}
      className="flex justify-between items-center gap-4 rounded-xl border-black border-4 even:bg-indigo-50 odd:bg-indigo-100 hover:bg-indigo-200 transition-colors motion-reduce:transition-none"
    >
      <a
        href={`/project/${project._id}`}
        className="flex items-center grow p-4 pr-0"
      >
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
      </a>
      <div className="flex flex-row gap-4 p-4 pl-0">
        <Button style="icon" onClick={() => setModalOpen(true)}>
          <FaEdit className="size-6" />
          <span className="sr-only">Edit</span>
        </Button>
        <Modal
          title={"Edit Project"}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        >
          <EditProjectForm project={project} closeModal={setModalOpen} />
        </Modal>
      </div>
    </div>
  );
};

export default ProjectRow;
