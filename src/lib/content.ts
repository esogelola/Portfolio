import { BlogPost, Project } from "../types";
import blogs from "../data/blogs.json";
import projects from "../data/projects.json";

export const getPosts = (): BlogPost[] => blogs as BlogPost[];
export const getFeaturedPost = (): BlogPost | undefined => getPosts().find((p) => p.featured);
export const getProjects = (): Project[] => projects as Project[];
