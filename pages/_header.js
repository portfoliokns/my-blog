import Link from "next/link";
import styles from "@/styles/Home.module.scss";

export default function Header() {
  return (
    <Link href="/">
      <img src="../logo.png" alt="Website Logo" className={styles.logo} />
    </Link>
  );
}
