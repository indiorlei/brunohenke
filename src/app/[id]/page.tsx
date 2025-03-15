import PostContent from "@/components/post-content";
import { getPostData } from "@/lib/post";
import { notFound } from "next/navigation";

export default async function Post(props: { params: { id: string } }) {
  const params = props.params;
  const postData = await getPostData(params.id);

  if (!postData) {
    notFound();
  }

  return <PostContent postData={postData} />;
}
