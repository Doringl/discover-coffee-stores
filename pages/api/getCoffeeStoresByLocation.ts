// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getCoffeeStores } from "../../lib/coffee-stores";
import { CoffeeStores } from "../../types";

interface IQuery {
  [key: string]: string | undefined;
}

const getCoffeeStoresByLocation = async (
  req: NextApiRequest,
  res: NextApiResponse<CoffeeStores | { message: string; error: Error }>
) => {
  try {
    const { latLong, limit } = req.query as IQuery;
    const response = await getCoffeeStores(latLong, limit);

    res.status(200).json(response);
  } catch (error) {
    res.status(500);
    res.json({ message: "Oh no! Something went wrong", error: error as Error });
  }
};

export default getCoffeeStoresByLocation;
