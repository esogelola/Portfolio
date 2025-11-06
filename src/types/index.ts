export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  devpostUrl?: string;
  videoUrl?: string;
  imageUrl?: string;
  status: "active" | "completed" | "archived";
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: "Security" | "Product Design" | "Finance" | "Machine Learning";
  date: string;
  readTime: string;
  url: string;
  type: "article" | "thesis" | "project";
  markdownFile?: string;
}

export interface BlogMetadata {
  id: string;
  title: string;
  description: string;
  category: "Security" | "Product Design" | "Finance" | "Machine Learning";
  date: string;
  readTime: string;
  url: string;
  type: "article" | "thesis" | "project";
  markdownFile: string;
}

