import { Plus } from "lucide-react";

import { useState } from "react";
import AddProject from "../AddProject/page";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AddNewProjectModal = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger className="inline-flex items-center justify-center px-6 py-2 text-white bg-primary hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:bg-yellow-700 focus:ring-opacity-50 rounded-md min-w-[150px]">
        <span className="mr-2">
          <Plus />
        </span>
        Add New
      </DialogTrigger>
      <DialogContent className="max-w-5xl mx-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Add New Product</DialogTitle>
          <DialogDescription className="py-5 text-left overflow-x-auto flex flex-col justify-between h-[80vh]">
            <AddProject />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewProjectModal;
