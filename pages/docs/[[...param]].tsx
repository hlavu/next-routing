import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";

export default function BookDetail() {
  const router = useRouter();
  const { param = Array<number | string> } = router.query;
  return (
    <>
      <h1 className={styles.heading}>
        This page url is DOCS/
        {param instanceof Array && param.map((param) => `${param}/`)}
      </h1>
    </>
  );
}
