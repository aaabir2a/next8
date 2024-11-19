import Link from "next/link";
import getAllPosts from "../lib/getAllPosts";

export default async function Posts() {
    const post = await getAllPosts();
    

    return(
        <div className="mt-6">
            <h1>gets all posts</h1>
            <ul className="mt-6">
                {post.map((post)=>(
                    <li key={post.id}>
                     <Link href={`/posts/${post.id}`}>{post.title}</Link>  </li>
                ))}

            </ul>
        </div>
    )

    
}