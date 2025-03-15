import { getAllPosts } from "@/lib/post";
import { notFound } from "next/navigation";
import PostContent from "../post-content";

export default async function Posts() {
  const posts = await getAllPosts();

  if (!posts || posts.length === 0) {
    return notFound();
  }

  return posts.map((post) => <PostContent key={post.id} postData={post} />);
}
