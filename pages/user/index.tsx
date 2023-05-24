import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function UserPage() {
  return (
    <>
      <h1 className={styles.heading}>This is USER page!</h1>
      <Link className={styles.link} href="/">
        Back to home
      </Link>
    </>
  );
}
