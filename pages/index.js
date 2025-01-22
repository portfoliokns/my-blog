import Link from "next/link";
import { client } from "../libs/client";
import styles from "@/styles/Home.module.scss";

//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
    // revalidate: 10,
  };
};

export default function Home({ blog }) {
  return (
    <main className={styles.main}>
      <h1>◯◯ブログ</h1>
      {blog.map((blog) => (
        <h2 key={blog.id} className={styles.title}>
          <Link href={`blog/${blog.id}`}>{blog.title}</Link>
        </h2>
      ))}
    </main>
  );
}
