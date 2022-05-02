import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";

import styles from "../styles/Home.module.css";

import { getCoffeeStores } from "../lib/coffee-stores";
import { CoffeeStores } from "../types";

interface IPageProps {
  coffeeStores: CoffeeStores;
}

const Home: NextPage<IPageProps> = ({ coffeeStores }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Discover Coffee Stores</title>
        <meta name='description' content='Discover your local coffee shops!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Banner />
        {coffeeStores.length > 0 && (
          <>
            <h2 className={styles.headingTwo}>Toronto stores</h2>
            <div className={styles.cardLayout}>
              {coffeeStores.map((coffeeStore) => (
                <Card
                  key={coffeeStore.id}
                  href={`/coffee-store/${coffeeStore.id}`}
                  name={coffeeStore.name}
                  imgUrl={coffeeStore.imgUrl}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async () => {
  const coffeeStores = await getCoffeeStores();

  return {
    props: {
      coffeeStores,
    }, // will be passed to the page component as props
  };
};
