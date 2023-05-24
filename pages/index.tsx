import Head from "next/head";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Routing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <h1 className={styles.heading}>This is HOME page!</h1>
    </>
  );
}
