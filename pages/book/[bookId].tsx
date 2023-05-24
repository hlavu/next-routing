import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";

export default function BookDetail() {
  const router = useRouter();
  const { bookId } = router.query;
  return (
    <>
      <h1 className={styles.heading}> This is BOOK {bookId} detail page</h1>
    </>
  );
}
