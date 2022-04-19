import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CoffeeStore: React.FC = () => {
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
