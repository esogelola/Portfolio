export type Category = "Security" | "Product Design" | "Finance" | "Machine Learning";

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: Category;
  date: string;            // ISO yyyy-mm-dd
  readTime: string;
  url: string;             // external (substack) or "" when local
  type: "article" | "thesis" | "essay";
  state: "live" | "soon";  // "soon" => Automaton II placeholder, not linked
  featured?: boolean;      // exactly one featured
  markdownFile?: string;   // present for on-site essays
  local?: boolean;         // true => route to on-site reader, not external url
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  image?: string;          // key resolved via an imported asset map (NOT a /src path)
  logo?: string;           // real product logo served from /public (e.g. "/projects/munk-logo.png")
  artHeader?: string;      // full-bleed art image header (from /public) — replaces the mock-UI thumb
  icon?: string;           // optional named icon key (overrides the id->icon default)
  status: "active" | "completed";
}
