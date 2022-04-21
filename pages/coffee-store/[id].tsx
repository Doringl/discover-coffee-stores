import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      CoffeeStore {id}
      <Link href='/'>
        <a>Back to home</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
