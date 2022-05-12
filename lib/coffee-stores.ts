import { CoffeeStores, IVenue } from "../types";
import { createApi } from "unsplash-js";

const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY!,
});

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
  limit: string
) => {
  return `https://api.foursquare.com/v3/places/nearby?ll=${latLon}&query=${query}&limit=${limit}`;
};

const getListOfCoffeeStorePhotos = async () => {
  const photos = await unsplashApi.search.getPhotos({
    query: "coffee shop",
    perPage: 40,
  });
  const unsplashResults = photos.response?.results || [];

  return unsplashResults.map((result) => result.urls["full"]);
};

export const getCoffeeStores = async (
  latLong = "43.65267326999575,-79.39545615725015",
  limit = "8"
): Promise<CoffeeStores> => {
  const photos = await getListOfCoffeeStorePhotos();
  const response = await fetch(
    getUrlForCoffeeStores(latLong, "coffee stores", limit),
    {
      headers: requestHeaders(),
    }
  );

  const coffeeStoresData = await response.json();
  console.log(coffeeStoresData);

  return (
    coffeeStoresData.results?.map((venue: IVenue, idx: number) => {
      return {
        id: venue.fsq_id,
        address: venue.location.address || "",
        name: venue.name,
        neighborhood:
          venue.location.neighborhood || venue.location.cross_street || "",
        imgUrl: photos[idx],
      };
    }) || []
  );
};
