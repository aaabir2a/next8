import Link from "next/link";
import React from "react";

const page = () => {
  const blog = [
    {
      id: 1,
      title: "Blog-1",
      description: "Blog-1 description",
    },
    {
      id: 2,
      title: "Blog-2",
      description: "blog-2 description",
    },
  ];
  return (
    <main>
      <div>Blog</div>
      <hr />
      <ul>
        {blog.map((blog) => (
          <li className="mb-5" key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default page;
