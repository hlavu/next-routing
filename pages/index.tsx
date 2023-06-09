import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const handleClicked = () => {
    router.push("/about");
    // router.replace("/about");
  };
  return (
    <>
      <Head>
        <title>Next Routing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1 className={styles.heading}>This is HOME page!</h1>
      <Link className={styles.link} href="/about">
        About
      </Link>
      <Link className={styles.link} href="/admin">
        Admin
      </Link>
      <Link className={styles.link} href="/user">
        User
      </Link>
      <Link className={styles.link} href="/book">
        Book
      </Link>
      <button className={styles.btn} onClick={handleClicked}>
        View our story!
      </button>
    </>
  );
}
