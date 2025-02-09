/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Edit } from "lucide-react";
import UpdateProject from "../UpdateProject/page";

interface TEditProductProps {
  project: any;
  updateProjectList: any;
}

const EditProjectModal = ({
  project,
  updateProjectList,
}: TEditProductProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="flex hover:text-primary gap-2 items-center ">
          {" "}
          <Edit /> Edit{" "}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl mx-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Edit Product</DialogTitle>
          <DialogDescription className="py-5 overflow-x-auto flex flex-col justify-between h-[80vh]">
            <UpdateProject
              project={project}
              updateProjectList={updateProjectList}
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditProjectModal;
