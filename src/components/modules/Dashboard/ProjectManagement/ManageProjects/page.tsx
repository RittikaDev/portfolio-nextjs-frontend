/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";

import { Toaster } from "react-hot-toast";
import AddNewProjectModal from "../AddNewProjectModal/page";
import ActionMenu from "../ActionMenu/page";

// const ManageProjects = (data) => {
//   const projects = data.data;
//   console.log(projects);

//   const handleDeletedProject = (id: string) => {
//     // const toastId = ShowToast("Logging in...", "#ffdf20", "loading");
//     try {
//       //   const res = deleteproject(id);
//       //   console.log(res);
//       //   ShowToast("project Deleted", "#4CAF50", "success", toastId);
//     } catch (err) {
//       console.log(err);
//       //   ShowToast("Failed to delete", "#FF6347", "error", toastId);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto">
//       <Toaster />
//       <div className="container px-4 2xl:px-0 mx-auto py-4">
//         <div className="md:flex items-center gap-10 justify-between">
//           <div>
//             {" "}
//             <AddNewProjectModal />{" "}
//           </div>
//         </div>

//         {/* project table  */}
//         {(projects?.length ?? 0) > 0 ? (
//           <div className="py-6">
//             <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//               <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//                 <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                   <tr>
//                     <th scope="col" className="px-6 w-8  py-3">
//                       #
//                     </th>
//                     <th scope="col" className="px-2 py-3">
//                       Project Image
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                       project name
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                       Live Link
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                       Description
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {projects?.map((project: any, i: number) => (
//                     <tr
//                       key={i}
//                       className="odd:bg-orange-100 odd:dark:bg-primary-900 even:bg-primary-500 even:dark:bg-gray-800 dark:dark:bg-gray-600 border-b dark:border-gray-700"
//                     >
//                       <th scope="row" className="px-6 py-4 font-medium ">
//                         {i + 1}
//                       </th>
//                       <th scope="row" className="px-2 py-4 font-medium ">
//                         <Link href={`/projects/${project._id}`}>
//                           <Image
//                             className="h-20 w-20 hover:resize-150  hover:scale-150 object-cover"
//                             src={project.cover}
//                             alt=""
//                             width={100}
//                             height={100}
//                           />
//                         </Link>
//                       </th>
//                       <th
//                         scope="row"
//                         className="px-6 py-4 font-medium max-w-60"
//                       >
//                         <Link href={`/projects/${project._id}`}>
//                           {project.title}
//                         </Link>
//                       </th>

//                       <td className="px-6 py-4">
//                         {project.frontend.deploymentLink}
//                       </td>
//                       <td className="px-6 py-4">{project.brief}</td>
//                       <td className="px-6 py-4">
//                         <ActionMenu
//                           project={project}
//                           handleDeletedProject={handleDeletedProject}
//                         />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         ) : (
//           <>{/* <NotFound text={"projects are not available"} /> */}</>
//         )}
//       </div>
//     </div>
//   );
// };

const ManageProjects = ({ data, updateProjectList }) => {
  console.log(data);
  const projects = data;

  const handleDeletedProject = (id: string) => {
    // const toastId = ShowToast("Logging in...", "#ffdf20", "loading");
    try {
      //   const res = deleteproject(id);
      //   console.log(res);
      //   ShowToast("project Deleted", "#4CAF50", "success", toastId);
    } catch (err) {
      console.log(err);
      //   ShowToast("Failed to delete", "#FF6347", "error", toastId);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Toaster />
      <div className="container px-4 2xl:px-0 mx-auto py-4">
        <div className="md:flex items-center gap-10 justify-between">
          <div>
            <AddNewProjectModal />
          </div>
        </div>

        {/* Project table  */}
        {(projects?.length ?? 0) > 0 ? (
          <div className="py-6">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 w-8 py-3">
                      #
                    </th>
                    <th scope="col" className="px-2 py-3">
                      Project Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Project Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Live Link
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projects?.map((project: any, i: number) => (
                    <tr
                      key={i}
                      className="odd:bg-orange-100 odd:dark:bg-primary-900 even:bg-primary-500 even:dark:bg-gray-800 dark:dark:bg-gray-600 border-b dark:border-gray-700"
                    >
                      <th scope="row" className="px-6 py-4 font-medium ">
                        {i + 1}
                      </th>
                      <th scope="row" className="px-2 py-4 font-medium ">
                        <Link href={`/projects/${project._id}`}>
                          <Image
                            className="h-20 w-20 hover:resize-150  hover:scale-150 object-cover"
                            src={project.cover}
                            alt=""
                            width={100}
                            height={100}
                          />
                        </Link>
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium max-w-60"
                      >
                        <Link href={`/projects/${project._id}`}>
                          {project.title}
                        </Link>
                      </th>

                      <td className="px-6 py-4">
                        {project.frontend.deploymentLink}
                      </td>
                      <td className="px-6 py-4">{project.brief}</td>
                      <td className="px-6 py-4">
                        <ActionMenu
                          project={project}
                          handleDeletedProject={handleDeletedProject}
                          updateProjectList={updateProjectList}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p>No projects available</p>
        )}
      </div>
    </div>
  );
};

export default ManageProjects;

// export default ManageProjects;
