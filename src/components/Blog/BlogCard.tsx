import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Badge } from "../ui/Badge";
import { BlogPost } from "../../types";

interface BlogCardProps {
  post: BlogPost;
}

const categoryColors: Record<BlogPost["category"], string> = {
  Security: "bg-emerald-600 hover:bg-emerald-700 text-white",
  "Product Design": "bg-blue-600 hover:bg-blue-700 text-white",
  Finance: "bg-amber-600 hover:bg-amber-700 text-white",
  "Machine Learning": "bg-purple-600 hover:bg-purple-700 text-white",
};

const typeLabels: Record<BlogPost["type"], string> = {
  article: "Article",
  thesis: "Thesis",
  project: "Project",
};

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="bg-white border-2 border-gray-300 rounded-lg p-6 h-full hover:shadow-md hover:border-gray-400 transition-all duration-200">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <Badge className={`font-mono text-xs ${categoryColors[post.category]}`}>
            {post.category}
          </Badge>
          <FaExternalLinkAlt className="w-4 h-4 text-gray-500 group-hover:text-gray-800 transition-colors" />
        </div>

        {/* Title */}
        <h3 className="font-mono text-lg font-semibold mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Description */}
        <p className="font-mono text-sm text-gray-600 mb-4 line-clamp-3">
          {post.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs font-mono text-gray-500 pt-4 border-t-2 border-gray-200">
          <span>{typeLabels[post.type]}</span>
          <div className="flex items-center gap-3">
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;

