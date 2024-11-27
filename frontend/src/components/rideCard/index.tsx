import { formatDistance, formatTime } from "utils/formatters";
import styles from "./index.module.scss";

interface IRideCardProps {
  ride: {
    date: string;
    origin: string;
    destination: string;
    distance: number;
    duration: string;
    driver: {
      id: number;
      name: string;
    };
    value: number;
  };
}

export const RideCard = ({ ride }: IRideCardProps) => {
  const { date, driver, destination, origin, value, distance, duration } = ride;
  const price = `R$${value}`;

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span>{date}</span>
        <span>{price}</span>
      </div>
      <div className={styles.cardBody}>
        <p>
          <b>{origin}</b> → <b>{destination}</b>
        </p>
        <p>{driver.name}</p>
      </div>
      <div className={styles.cardFooter}>
        <p>
          {formatDistance(distance)} • {formatTime(duration)}
        </p>
      </div>
    </div>
  );
};
