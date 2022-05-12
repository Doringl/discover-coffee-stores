import { useContext, useState } from "react";
import { Types } from "../store/reducers";
import { StoreContext } from "../store/storeProvider";

const useTrackLocations = () => {
  const [locationErrorMsg, setLocationErrorMsg] = useState<string>("");
  /* const [latLong, setLatLong] = useState<string>(""); */
  const { dispatch } = useContext(StoreContext);
  const [isFindingLocation, setIsFindingLocation] = useState<boolean>(false);

  const success = (position: GeolocationPosition) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    /*  setLatLong(`${latitude},${longitude}`); */
    dispatch({ type: Types.SET_LAT_LONG, payload: `${latitude},${longitude}` });
    setLocationErrorMsg("");
    setIsFindingLocation(false);
  };

  const error = () => {
    setIsFindingLocation(false);
    setLocationErrorMsg("Unable to retrieve your location");
  };

  const handleTrackLocation = () => {
    setIsFindingLocation(true);

    if (!navigator.geolocation) {
      setLocationErrorMsg("Geolocation is not supported by your browser");
      setIsFindingLocation(false);
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return {
    /* latLong, */
    handleTrackLocation,
    locationErrorMsg,
    isFindingLocation,
  };
};

export default useTrackLocations;
