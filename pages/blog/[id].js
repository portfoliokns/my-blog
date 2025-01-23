import Link from "next/link";
import { client } from "@/libs/client";
import styles from "../../styles/Home.module.scss";
import Header from "../_header";
import Footer from "../_footer";

//SSG
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};

export default function BlogId({ blog }) {
  return (
    <main className={styles.main}>
      <Header />
      <h1 className={styles.title}>{blog.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
        className={styles.post}
      ></div>
      <Footer />
    </main>
  );
}
