/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import envConfig from "@/config/env.config";

const UpdateProject = ({ project, updateProjectList }) => {
  interface ProjectData {
    title: string;
    slug: string;
    brief: string;
    description: string[];
    cover: string;
    images: string[];
    type: string;
    frontend: {
      technologies: string[];
      deploymentLink: string;
      github: string;
    };
    backend: {
      technologies: string[];
      deploymentLink: string;
      github: string;
    };
  }

  const [projectData, setProjectData] = useState<ProjectData>({
    title: "",
    slug: "",
    brief: "",
    description: ["", ""], // Array to handle multiple descriptions
    cover: "",
    images: [""], // Array to handle multiple image URLs
    type: "",
    frontend: {
      technologies: [],
      deploymentLink: "",
      github: "",
    },
    backend: {
      technologies: [],
      deploymentLink: "",
      github: "",
    },
  });

  const [loading, setLoading] = useState(false);
  console.log(project);

  useEffect(() => {
    if (project) {
      setProjectData({
        title: project.title || "",
        slug: project.slug || "",
        brief: project.brief || "",
        description: project.description || ["", ""],
        cover: project.cover || "",
        images: project.images || [""],
        type: project.type || "",
        frontend: project.frontend || {
          technologies: [],
          deploymentLink: "",
          github: "",
        },
        backend: project.backend || {
          technologies: [],
          deploymentLink: "",
          github: "",
        },
      });
    }
  }, [project]);

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox")
      setProjectData({ ...projectData, [name]: checked });
    else if (name.includes("frontend") || name.includes("backend")) {
      const [section, field] = name.split(".") as [
        "frontend" | "backend",
        keyof ProjectData["frontend"] | keyof ProjectData["backend"]
      ];
      setProjectData({
        ...projectData,
        [section]: { ...projectData[section], [field]: value },
      });
    } else {
      setProjectData({ ...projectData, [name]: value });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send update request to your backend (assuming an API exists to handle updates)
      const response = await fetch(
        `http://localhost:5000/api/projects/${project._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(projectData),
        }
      );
      const result = await response.json();

      if (response.ok) {
        // Show success message or do something on success
        console.log(result.message);
        updateProjectList(result.updatedProject);
      } else {
        // Show error message
        console.error(result.error);
      }
    } catch (err) {
      console.error("Error updating project:", err);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
      <Card>
        <CardHeader>
          <div className="text-center space-y-1.5 px-2 md:px-0">
            <p>Modify project details as required.</p>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="basic-details">
            <TabsList className="flex justify-center space-x-12 mb-12">
              <TabsTrigger value="basic-details">Basic Details</TabsTrigger>
              <TabsTrigger value="frontend-backend">
                Frontend & Backend
              </TabsTrigger>
            </TabsList>

            <TabsContent value="basic-details">
              {/* Basic Details Tab */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="title">Project Title</Label>
                    <Input
                      id="title"
                      name="title"
                      value={projectData.title}
                      onChange={handleInputChange}
                      placeholder="Project Title"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="slug">Slug</Label>
                    <Input
                      id="slug"
                      name="slug"
                      value={projectData.slug}
                      onChange={handleInputChange}
                      placeholder="Slug"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="brief">Brief</Label>
                  <Input
                    id="brief"
                    name="brief"
                    value={projectData.brief}
                    onChange={handleInputChange}
                    placeholder="Brief"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={projectData.description.join(", ")}
                    onChange={(e) =>
                      setProjectData({
                        ...projectData,
                        description: e.target.value
                          .split(",")
                          .map((desc) => desc.trim()),
                      })
                    }
                    placeholder="Enter descriptions separated by commas"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="frontend-backend">
              {/* Frontend & Backend Tab */}
              <div className="space-y-4">
                {/* Frontend */}
                <div className="space-y-1">
                  <Label htmlFor="frontend.technologies">
                    Frontend Technologies
                  </Label>
                  <Input
                    id="frontend.technologies"
                    name="frontend.technologies"
                    value={projectData.frontend.technologies.join(", ")}
                    onChange={(e) =>
                      setProjectData({
                        ...projectData,
                        frontend: {
                          ...projectData.frontend,
                          technologies: e.target.value
                            .split(",")
                            .map((tech) => tech.trim()),
                        },
                      })
                    }
                    placeholder="Enter frontend technologies separated by commas"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="frontend.deploymentLink">
                    Frontend Deployment Link
                  </Label>
                  <Input
                    id="frontend.deploymentLink"
                    name="frontend.deploymentLink"
                    value={projectData.frontend.deploymentLink}
                    onChange={handleInputChange}
                    placeholder="Frontend Deployment Link"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="frontend.github">Frontend GitHub</Label>
                  <Input
                    id="frontend.github"
                    name="frontend.github"
                    value={projectData.frontend.github}
                    onChange={handleInputChange}
                    placeholder="Frontend GitHub"
                  />
                </div>

                {/* Backend */}
                <div className="space-y-1">
                  <Label htmlFor="backend.technologies">
                    Backend Technologies
                  </Label>
                  <Input
                    id="backend.technologies"
                    name="backend.technologies"
                    value={projectData.backend.technologies.join(", ")}
                    onChange={(e) =>
                      setProjectData({
                        ...projectData,
                        backend: {
                          ...projectData.backend,
                          technologies: e.target.value
                            .split(",")
                            .map((tech) => tech.trim()),
                        },
                      })
                    }
                    placeholder="Enter backend technologies separated by commas"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="backend.deploymentLink">
                    Backend Deployment Link
                  </Label>
                  <Input
                    id="backend.deploymentLink"
                    name="backend.deploymentLink"
                    value={projectData.backend.deploymentLink}
                    onChange={handleInputChange}
                    placeholder="Backend Deployment Link"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="backend.github">Backend GitHub</Label>
                  <Input
                    id="backend.github"
                    name="backend.github"
                    value={projectData.backend.github}
                    onChange={handleInputChange}
                    placeholder="Backend GitHub"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter className="flex justify-center">
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Updating..." : "Update"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UpdateProject;
