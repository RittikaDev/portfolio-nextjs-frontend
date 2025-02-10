/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";
import axios from "axios";

const BlogTable = () => {
	const [blogs, setBlogs] = useState<any[]>([]);
	const [isEditing, setIsEditing] = useState(false);
	const [loading, setLoading] = useState(false);
	const [editingblog, setEditingblog] = useState<any>(null);
	const [formData, setFormData] = useState<any>({});
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	useEffect(() => {
		const fetchblogs = async () => {
			const res = await fetch("http://localhost:5000/api/blog");
			const { data } = await res.json();
			console.log(data);
			setBlogs(data);
		};
		fetchblogs();
	}, []);

	const handleImageUpload = async (event: any) => {
		const file = event.target.files[0];
		if (file) {
			setLoading(true);
			const formData = new FormData();
			formData.append("file", file);
			formData.append("upload_preset", "WheelDeal");

			try {
				const res = await axios.post(
					`https://api.cloudinary.com/v1_1/dxm5tpw0l/image/upload`,
					formData
				);
				const imageUrl = res.data.secure_url;
				setFormData((prev: any) => ({ ...prev, cover: imageUrl }));
				setLoading(false);
			} catch (err) {
				console.error("Error uploading image", err);
				setLoading(false);
			}
		}
	};

	const handleCreate = async () => {
		const blogData = {
			...formData,
			content: [
				{ type: "heading1", text: formData.heading1, items: [] },
				{ type: "paragraph", text: formData.paragraph1, items: [] },
				{ type: "heading2", text: formData.heading2, items: [] },
				{ type: "paragraph", text: formData.paragraph2, items: [] },
				{ type: "heading3", text: formData.heading3, items: [] },
				{ type: "paragraph", text: formData.paragraph3, items: [] },
			],
		};

		console.log(blogData);
		const res = await fetch("http://localhost:5000/api/blog", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blogData),
		});
		const result = await res.json();
		console.log(result);
		setBlogs((prev) => [...prev, result.data]);
		setFormData({});
		setIsDialogOpen(false);
	};

	// const handleEdit = (blog: any) => {
	// 	setIsEditing(true);
	// 	setEditingblog(blog);
	// 	setFormData(blog);
	// 	setIsDialogOpen(true); // Open the dialog
	// };

	const handleEdit = (blog: any) => {
		setIsEditing(true);
		setEditingblog(blog);
		// Map content array back to individual fields
		const content = blog.content.reduce((acc: any, item: any) => {
			acc[
				`heading${
					item.type === "heading1" ? 1 : item.type === "heading2" ? 2 : 3
				}`
			] = item.text;
			acc[
				`paragraph${
					item.type === "paragraph" ? 1 : item.type === "heading2" ? 2 : 3
				}`
			] = item.text;
			return acc;
		}, {});
		setFormData({ ...blog, ...content });
		setIsDialogOpen(true);
	};

	const handleSave = async () => {
		if (isEditing) {
			const res = await fetch(
				`http://localhost:5000/api/blog/${editingblog._id}`,
				{
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(formData),
				}
			);
			const result = await res.json();
			setBlogs((prev) =>
				prev.map((proj) => (proj._id === result.data._id ? result.data : proj))
			);
		} else {
			handleCreate();
		}

		setIsEditing(false);
		setEditingblog(null);
		setIsDialogOpen(false);
	};

	const handleDelete = async (blogId: string) => {
		const res = await fetch(`http://localhost:5000/api/blog/${blogId}`, {
			method: "DELETE",
		});
		if (res.ok) {
			setBlogs((prev) => prev.filter((proj) => proj._id !== blogId));
		}
	};

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	// const handleAddContent = (index: number, field: string, value: string) => {
	// 	const newContent = [...formData.content];
	// 	newContent[index] = { ...newContent[index], [field]: value };
	// 	setFormData({ ...formData, content: newContent });
	// };

	const handleContentBlur = () => {
		const content = [
			{ type: "heading1", text: formData.heading1, items: [] },
			{ type: "paragraph", text: formData.paragraph1, items: [] },
			{ type: "heading2", text: formData.heading2, items: [] },
			{ type: "paragraph", text: formData.paragraph2, items: [] },
			{ type: "heading3", text: formData.heading3, items: [] },
			{ type: "paragraph", text: formData.paragraph3, items: [] },
		];

		setFormData({ ...formData, content });
	};

	return (
		<div className="p-6">
			<div className="flex justify-between items-center mb-4">
				<h1 className="text-xl font-semibold">Blogs</h1>
				<Button
					onClick={() => {
						setIsEditing(false);
						setFormData({});
						setIsDialogOpen(true);
					}}
				>
					Create Blog
				</Button>
			</div>

			{/* Shared Dialog for Create & Edit */}
			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogContent className="p-6">
					<Tabs defaultValue="basic">
						<TabsList className="flex space-x-2 mb-4">
							<TabsTrigger value="basic">Basic Info</TabsTrigger>
							<TabsTrigger value="content">Content</TabsTrigger>
						</TabsList>
						<TabsContent value="basic" className="space-y-3">
							<Input
								name="title"
								value={formData.title || ""}
								onChange={handleChange}
								placeholder="Title"
							/>
							<Input
								name="brief"
								value={formData.brief || ""}
								onChange={handleChange}
								placeholder="Brief"
							/>
							<Input
								name="publishedDate"
								value={formData.publishedDate || ""}
								onChange={handleChange}
								placeholder="Published Date"
							/>
							<Input
								name="readTime"
								value={formData.readTime || ""}
								onChange={handleChange}
								placeholder="Read Time"
							/>
							<input
								type="file"
								accept="image/*"
								onChange={handleImageUpload}
							/>
							{loading && <p>Uploading...</p>}
							{/* {formData.cover && (
                <img src={formData.cover} alt="Cover" className="w-32 h-32" />
              )} */}
						</TabsContent>
						<TabsContent value="content" className="space-y-3">
							{/* Static Content Fields */}
							<div className="space-y-2">
								<Input
									name="heading1"
									value={formData.heading1 || ""}
									onChange={handleChange}
									onBlur={handleContentBlur}
									placeholder="Heading 1"
								/>
								<Input
									name="paragraph1"
									value={formData.paragraph1 || ""}
									onChange={handleChange}
									onBlur={handleContentBlur}
									placeholder="Paragraph 1"
								/>
							</div>
							<div className="space-y-2">
								<Input
									name="heading2"
									value={formData.heading2 || ""}
									onChange={handleChange}
									onBlur={handleContentBlur}
									placeholder="Heading 2"
								/>
								<Input
									name="paragraph2"
									value={formData.paragraph2 || ""}
									onChange={handleChange}
									onBlur={handleContentBlur}
									placeholder="Paragraph 2"
								/>
							</div>
							<div className="space-y-2">
								<Input
									name="heading3"
									value={formData.heading3 || ""}
									onChange={handleChange}
									onBlur={handleContentBlur}
									placeholder="Heading 3"
								/>
								<Input
									name="paragraph3"
									value={formData.paragraph3 || ""}
									onChange={handleChange}
									onBlur={handleContentBlur}
									placeholder="Paragraph 3"
								/>
							</div>
						</TabsContent>
						{/* <TabsContent value="content" className="space-y-3"> */}
						{/* <Input
								name="content.heading1"
								value={formData.content.heading1 || ""}
								onChange={handleChange}
								placeholder="Frontend Technologies (comma-separated)"
							/>
							<Input
								name="frontendDeployment"
								value={formData.frontendDeployment || ""}
								onChange={handleChange}
								placeholder="Frontend Deployment Link"
							/>
							<Input
								name="frontendGithub"
								value={formData.frontendGithub || ""}
								onChange={handleChange}
								placeholder="Frontend GitHub"
							/> */}
						{/* </TabsContent> */}
					</Tabs>
					<div className="flex justify-end space-x-2 mt-4">
						<Button variant="outline" onClick={() => setIsDialogOpen(false)}>
							Cancel
						</Button>
						<Button onClick={handleSave}>
							{isEditing ? "Update" : "Save"}
						</Button>
					</div>
				</DialogContent>
			</Dialog>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Title</TableHead>
						<TableHead>Brief</TableHead>
						<TableHead>Published Date</TableHead>
						<TableHead>Read Time</TableHead>
						<TableHead>Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{blogs.map((blog) => (
						<TableRow key={blog._id}>
							<TableCell>{blog.title}</TableCell>
							<TableCell>{blog.brief}</TableCell>
							<TableCell>{blog.publishedDate}</TableCell>
							<TableCell>{blog.readTime}</TableCell>
							<TableCell className="flex space-x-2">
								<Button
									size="icon"
									variant="outline"
									onClick={() => handleEdit(blog)}
								>
									<Pencil className="w-4 h-4" />
								</Button>
								<Button
									size="icon"
									variant="destructive"
									onClick={() => handleDelete(blog._id)}
								>
									<Trash className="w-4 h-4" />
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default BlogTable;
