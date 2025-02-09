/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Delete, EllipsisVertical } from "lucide-react";
import EditProjectModal from "../EditProjects/page";

interface TActionMenuProps {
  project: any;
  handleDeletedProject: (projectId: string) => void;
  updateProjectList: (projectId: string) => void;
}

const ActionMenu = ({
  project,
  handleDeletedProject,
  updateProjectList,
}: TActionMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          {" "}
          <EllipsisVertical />
        </p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute right-16 -bottom-16 border ">
        <div className="space-y-3 p-2 ">
          <EditProjectModal
            project={project}
            updateProjectList={updateProjectList}
          />

          <button
            onClick={() => handleDeletedProject(project._id)}
            className="flex  hover:text-primary gap-2 items-center "
          >
            <Delete /> Delete
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionMenu;
