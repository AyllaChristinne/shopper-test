import { useAppContext } from "context/AppContext";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";

export const Snackbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { error, setError } = useAppContext();

  console.log("error na snackbar", error);

  useEffect(() => {
    if (error) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
        setError(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error, setError]);

  if (!error) return null;

  return (
    <div className={styles.snackbar}>
      <p>{error}</p>
    </div>
  );
};
