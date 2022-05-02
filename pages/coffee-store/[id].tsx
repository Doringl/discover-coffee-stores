import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "../../styles/coffee-store.module.css";
import { getCoffeeStores } from "../../lib/coffee-stores";
import { CoffeeStore } from "../../types";

interface IPageProps {
  coffeeStore: CoffeeStore;
}

const CoffeeStore: NextPage<IPageProps> = ({ coffeeStore }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading ...</div>;
  }

  const { id, name, imgUrl, address, neighborhood } = coffeeStore;

  const handleUpVoteButton = () => {
    console.log("test");
  };

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
        <meta
          name='description'
          content={`${!name.includes("Coffee") ? "coffee" : ""} shop`}
        ></meta>
      </Head>
      <div className={styles.container}>
        <div className={styles.colOne}>
          <div className={styles.backToHomeLink}>
            <Link href='/'>
              <a>← Back to home</a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={
              imgUrl ||
              "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            }
            width={600}
            height={360}
            className={styles.storeImg}
            alt={name}
          ></Image>
        </div>

        <div className={`glass ${styles.colTwo}`}>
          <div className={styles.iconWrapper}>
            <Image
              src='/static/icons/places.svg'
              width='24'
              height='24'
              alt='places icon'
            />
            <p className={styles.text}>{address}</p>
          </div>
          {neighborhood && (
            <div className={styles.iconWrapper}>
              <Image
                src='/static/icons/nearMe.svg'
                width='24'
                height='24'
                alt='near me icon'
              />
              <p className={styles.text}>{neighborhood}</p>
            </div>
          )}
          <div className={styles.iconWrapper}>
            <Image
              src='/static/icons/star.svg'
              width='24'
              height='24'
              alt='star icon'
            />
            {/* <p className={styles.text}>{votingCount}</p> */}
          </div>

          <button className={styles.upVoteButton} onClick={handleUpVoteButton}>
            Up vote!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeStore;

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async (context) => {
  const coffeeStores = await getCoffeeStores();
  const findCoffeeStoreById = coffeeStores.find((coffeeStore) => {
    return coffeeStore.id.toString() === context.params?.id;
  });

  return {
    props: {
      coffeeStore: findCoffeeStoreById ? findCoffeeStoreById : {},
    }, // will be passed to the page component as props
  };
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async () => {
  const coffeeStores = await getCoffeeStores();
  const paths = coffeeStores.map((coffeeStore) => {
    return { params: { id: coffeeStore.id.toString() } };
  });

  return {
    paths,
    fallback: true,
  };
};
