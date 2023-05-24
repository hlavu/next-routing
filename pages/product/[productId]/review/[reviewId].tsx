import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";

export default function BookDetail() {
  const router = useRouter();
  const { reviewId } = router.query;
  return (
    <>
      <h1 className={styles.heading}>This is REVIEW {reviewId} detail page</h1>
    </>
  );
}
