import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner/Banner";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Discover Coffee Stores</title>
        <meta name='description' content='Discover your local coffee shops!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Banner />
      </main>
    </div>
  );
};

export default Home;
