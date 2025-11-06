import React from "react";
import BlogCard from "./BlogCard";
import { BlogPost } from "../../types";
import blogData from "../../data/blogs.json";

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = blogData as BlogPost[];

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="font-mono text-2xl font-bold">Writing & Research</h2>
        <p className="font-mono text-sm text-gray-600">
          Articles, thesis papers, and project documentation
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

