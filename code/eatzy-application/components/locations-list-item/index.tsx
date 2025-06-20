import Link from "next/link";
import styles from "./index.module.css";
import {LocationType} from "mongoose/locations/schema";
import {JSX} from "react";

interface PropsInterface {
  location: LocationType
}

const LocationsListItem = (props: PropsInterface): JSX.Element => {
  const location: any = props.location;
  return (
    <>
      {location && (
        <li className={styles.root}>
          <Link href={`/location/${location.location_id}`}>
            <h2>

              {location.name}
              <small className={styles.details}>
                {location.cuisine} in {location.borough}
              </small>
            </h2>
          </Link>
        </li>
      )}
    </>
  );
};
export default LocationsListItem;
