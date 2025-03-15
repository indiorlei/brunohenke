import { notFound } from "next/navigation";
import styles from "./page.module.scss";

export default async function PostContent(props: {
  postData: { date: string; title: string; id: string; contentHtml: string };
}) {
  const { postData } = props;

  if (!postData) {
    return notFound();
  }

  return (
    <article className={styles.post}>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
