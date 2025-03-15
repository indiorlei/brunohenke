import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkRehype from "remark-rehype";

interface PostData {
  id: string;
  contentHtml: string;
  date: string;
  title: string;
}

const POSTS_DIRECTORY = path.join(process.cwd(), "_posts");

export async function getAllPosts(): Promise<PostData[]> {
  const fileNames: string[] = fs.readdirSync(POSTS_DIRECTORY);
  const allPostsData: PostData[] = await Promise.all(
    fileNames.map(async (fileName): Promise<PostData> => {
      const id: string = fileName.replace(/\.md$/, "");
      const fullPath: string = path.join(POSTS_DIRECTORY, fileName);
      const fileContents: string = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      const processedContent = await remark()
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeStringify)
        .process(content);

      const contentHtml: string = processedContent.toString();

      return {
        id,
        contentHtml,
        ...(data as { date: string; title: string }),
      };
    })
  );

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string): Promise<PostData | null> {
  const fullPath = path.join(POSTS_DIRECTORY, `${id}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(data as { date: string; title: string }),
  };
}
