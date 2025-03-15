import PostContent from "@/components/post-content";
import { getPostData } from "@/lib/post";
import { notFound } from "next/navigation";

interface PostProps {
  params: Promise<{ id: string }>;
}

export default async function Post(props: PostProps) {
  const params = await props.params;
  const postData = await getPostData(params.id);

  if (!postData) {
    return notFound();
  }

  return <PostContent postData={postData} />;
}
