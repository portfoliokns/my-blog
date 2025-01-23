import Link from "next/link";
import styles from "@/styles/Home.module.scss";

export default function Footer() {
  return (
    <footer>
      <Link href="/" className={styles.back}>
        © 2025 portfolioknsブログ
      </Link>
    </footer>
  );
}
