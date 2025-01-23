import Link from "next/link";
import { client } from "../libs/client";
import styles from "@/styles/Home.module.scss";
import Header from "./_header";
import Footer from "./_footer";

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
      <Header />
      {blog.map((blog) => (
        <h2 key={blog.id} className={styles.title}>
          <Link href={`blog/${blog.id}`}>{blog.title}</Link>
        </h2>
      ))}
      <Footer />
    </main>
  );
}
