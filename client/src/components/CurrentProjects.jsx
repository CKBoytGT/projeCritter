import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
import Button from "./ui/Button";
import { HiPencil } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi2";

const CurrentProjects = () => {
  return (
    <div className="mx-auto w-full lg:max-w-2xl">
      <h3 className="text-lg font-bold mb-2">Current Projects:</h3>
      <table className="border w-full">
        <tbody>
          <tr className="align-middle">
            {/* TODO: icon determined by species */}
            <td className="border p-4">
              <HiMiniQuestionMarkCircle className="size-10" />
            </td>
            <td className="border p-4 w-full">
              <div className="flex flex-row justify-between items-center">
                {/* TODO: modify url by project id */}
                <a href="/project">Project Name</a>
                {/* TODO: attach edit and delete*/}
                <div className="flex flex-row gap-2">
                  <Button style="icon">
                    <HiPencil className="mx-auto inline size-6 hover:fill-neutral-800" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button style="icon">
                    <HiTrash className="mx-auto inline size-6 hover:fill-neutral-800" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CurrentProjects;
