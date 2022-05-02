import { CoffeeStores, IVenue } from "../types";

const requestHeaders = () => {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set(
    "Authorization",
    process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY!
  );

  return requestHeaders;
};

const getUrlForCoffeeStores = (
  latLon: string,
  query: string,
  limit: number
) => {
  return `https://api.foursquare.com/v3/places/nearby?ll=${latLon}&query=${query}&limit=${limit}`;
};

export const getCoffeeStores = async (
  latLong = "43.65267326999575,-79.39545615725015",
  limit = 8
): Promise<CoffeeStores> => {
  const response = await fetch(
    getUrlForCoffeeStores(latLong, "coffee stores", limit),
    {
      headers: requestHeaders(),
    }
  );

  const coffeeStoresData = await response.json();

  return (
    coffeeStoresData.results?.map((venue: IVenue, idx: number) => {
      return {
        // ...venue,
        id: venue.fsq_id,
        address: venue.location.address || "",
        name: venue.name,
        neighborhood:
          venue.location.neighborhood || venue.location.cross_street || "",
      };
    }) || []
  );
};
