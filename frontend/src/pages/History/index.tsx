import { useState, useEffect } from "react";
import { useAppContext } from "context/AppContext";

import { fetchRideHistory } from "../../services/fetchRideHistory";
import styles from "./index.module.scss";
import { IDriver, TRideData, TRideHistory } from "types";
import { Link } from "react-router-dom";
import { Dropdown } from "components/dropdown";
import { RideCard } from "components/rideCard";

export const HistoryPage = () => {
  const { customerId, setCustomerId, isLoading, setIsLoading, setError } =
    useAppContext();
  const [selectedDriver, setSelectedDriver] = useState<
    Pick<IDriver, "id" | "name">
  >({ id: 0, name: "Todos os motoristas" });
  const [rideHistory, setRideHistory] = useState<TRideHistory | null>(null);

  const fetchRideHistoryData = (customer_id: string, driver_id: number) => {
    setIsLoading(true);

    const props =
      driver_id !== 0 ? { customer_id, driver_id } : { customer_id };

    fetchRideHistory(props)
      .then((result) => {
        console.log("result", result);

        if (result.error_code) {
          console.log("tem result.error_code");
          setError(result.error_description);
          setRideHistory(null);
          return;
        }
        console.log("deu boa", result.rides);
        setRideHistory(result.rides);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("deu ruim");
        console.error("Erro inesperado:", err);
        setError("Erro inesperado. Por favor, tente novamente.");
      });
  };

  const handleApplyFilter = () => {
    if (customerId) {
      fetchRideHistoryData(customerId, selectedDriver.id);
    } else {
      setError("Por favor, insira um ID de usuário.");
    }
  };

  useEffect(() => {
    if (customerId) {
      fetchRideHistoryData(customerId, 0);
    }
  }, []);

  console.log("ridesHistory", rideHistory);

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <Link to="/" className={styles.containerHeaderBackBtn}>
          ← Início
        </Link>
        <h1 className={styles.containerTitle}>Histórico de Viagens</h1>
      </div>
      <div className={styles.searchForm}>
        <input
          type="text"
          placeholder="ID do Usuário"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
        />
        <Dropdown
          selectedDriver={selectedDriver}
          setSelectedDriver={setSelectedDriver}
        />
        <button
          onClick={handleApplyFilter}
          className={styles.containerHeaderSearchBtn}
        >
          Aplicar Filtro
        </button>
      </div>

      {rideHistory ? (
        <>
          <div className={styles.historyList}>
            {rideHistory.map(
              (ride: Omit<TRideData, "customer_id"> & { date: string }) => (
                <RideCard key={`${ride.driver.id}-${ride.date}`} ride={ride} />
              )
            )}
          </div>
        </>
      ) : (
        <p>Nenhuma viagem encontrada</p>
      )}
    </div>
  );
};
