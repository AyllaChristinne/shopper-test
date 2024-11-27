import { StaticMap } from "components/staticMap";
import styles from "./index.module.scss";
import { useAppContext } from "context/AppContext";
import starIcon from "../../assets/star.png";
import { saveRide } from "services/saveRide";
import { Navigate, useNavigate } from "react-router-dom";
import { formatDistance, formatTime } from "utils/formatters";

export const RoutePage = () => {
  const navigate = useNavigate();
  const {
    routeData,
    customerId,
    origin: enteredOrigin,
    destination: enteredDest,
  } = useAppContext();

  const handleSaveRide = (
    driver_id: number,
    driver_name: string,
    value: number
  ) => {
    if (routeData) {
      const { distance, duration } = routeData;

      saveRide({
        customer_id: customerId,
        origin: enteredOrigin,
        destination: enteredDest,
        distance,
        driver: { id: driver_id, name: driver_name },
        duration,
        value,
      }).then(() => {
        navigate(`/rides`);
      });
    }
  };

  return !routeData ? (
    <Navigate to="/" replace={true} />
  ) : (
    <div className={styles.content}>
      <StaticMap
        markers={[
          {
            lat: routeData.origin.latitude,
            lng: routeData.origin.longitude,
          },
          {
            lat: routeData.destination.latitude,
            lng: routeData.destination.longitude,
          },
        ]}
        polylineString={routeData.routeResponse.encodedPolyline}
      />

      <section className={styles.driversSection}>
        <div className={styles.driversSectionHeader}>
          <h1 className={styles.driversSectionHeaderTitle}>
            Selecione o motorista
          </h1>
          <div>
            <p>
              De <b>{enteredOrigin}</b> a <b>{enteredDest}</b>
            </p>
            <p className={styles.driversSectionHeaderInfo}>
              {`${formatDistance(routeData.distance)} • 
              ${formatTime(routeData.duration)}`}
            </p>
          </div>
        </div>
        <div className={styles.driversSectionContent}>
          {routeData.options.map((driver) => {
            const price = `R$ ${driver.value}`;
            return (
              <div className={styles.driverContainer} key={driver.id}>
                <div className={styles.driverContainerHeader}>
                  <h2 className={styles.driverName}>{driver.name}</h2>
                  <div>
                    <p className={styles.driverRatingText}>
                      {driver.review.rating}
                    </p>
                    <img
                      src={starIcon}
                      alt="Ilustração de uma estrela amarela"
                      className={styles.driverRatingIcon}
                    />
                  </div>
                </div>
                <p className={styles.driverDescription}>{driver.description}</p>
                <div className={styles.driverContainerFooter}>
                  <p className={styles.driverVehicle}>{driver.vehicle}</p>
                  <p className={styles.driverPrice}>{price}</p>
                </div>
                <button
                  type="button"
                  className={styles.driverButton}
                  onClick={() =>
                    handleSaveRide(driver.id, driver.name, driver.value)
                  }
                >
                  Escolher
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
