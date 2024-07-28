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
    // note: padding is on inner elements to create more clickable area
    <div
      key={project._id}
      className="flex items-center justify-between gap-4 rounded-xl bg-indigo-100 transition-colors hover:bg-indigo-200 motion-reduce:transition-none"
    >
      <a
        href={`/project/${project._id}`}
        className="flex grow items-center p-5"
      >
        {project.critterSpecies === "Giant Panda" && (
          <IconGiantPanda className="h-auto w-12 shrink-0" />
        )}
        {project.critterSpecies === "Red Panda" && (
          <IconRedPanda className="h-auto w-12 shrink-0" />
        )}
        {project.critterSpecies === "Trash Panda" && (
          <IconTrashPanda className="h-auto w-12 shrink-0" />
        )}
        <span className="sr-only">{project.critterSpecies}</span>
        <p className="ml-4 font-semibold">{project.projectName}</p>
      </a>
      <div className="flex flex-row gap-4">
        <Button className="p-5" style="icon" onClick={() => setModalOpen(true)}>
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
