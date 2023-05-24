import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <h1 className={styles.heading}>This is ABOUT page!</h1>

      <Link className={styles.link} href="/">
        Back to home
      </Link>
    </>
  );
}
