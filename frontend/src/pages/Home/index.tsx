import { estimateRoute } from "services/estimateRoute";
import styles from "./index.module.scss";
import { useAppContext } from "context/AppContext";
import homeImage from "../../assets/estimate-img.svg";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const {
    customerId,
    setCustomerId,
    origin,
    setOrigin,
    destination,
    setDestination,
    setError,
    setIsLoading,
    setRouteData,
  } = useAppContext();

  const handleEstimate = () => {
    if (!customerId || !origin || !destination) {
      setError("Todos os campos precisam ser preenchidos!");
    } else {
      setIsLoading(true);
      estimateRoute({ customer_id: customerId, origin, destination })
        .then((data) => {
          setIsLoading(false);
          setRouteData(data);
          navigate("/route");
        })
        .catch((error) => {
          setIsLoading(false);
          console.error("Erro ao estimar a rota:", error);
          setError("Erro ao estimar a rota");
        });
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Solicitação de viagem</h1>
      <div className={styles.formContainer}>
        <img
          src={homeImage}
          className={styles.formImage}
          alt="Ilustração de um carro em uma pista conectada a um celular com um mapa e opções de motoristas."
        />
        <form className={styles.form}>
          <label htmlFor="c_id" className={styles.label}>
            ID do usuário
          </label>
          <input
            id="c_id"
            type="text"
            placeholder="ID do usuário"
            value={customerId}
            onChange={(e) => {
              setCustomerId(e.target.value);
            }}
            className={styles.input}
          />
          <label htmlFor="origin" className={styles.label}>
            Endereço de origem
          </label>
          <input
            id="dest"
            type="text"
            placeholder="Endereço de origem"
            value={origin}
            onChange={(e) => {
              setOrigin(e.target.value);
            }}
            className={styles.input}
          />
          <label htmlFor="dest" className={styles.label}>
            Endereço de destino
          </label>
          <input
            id="dest"
            type="text"
            placeholder="Endereço de destino"
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value);
            }}
            className={styles.input}
          />
          <button
            type="submit"
            className={styles.button}
            onClick={(e) => {
              e.preventDefault();
              handleEstimate();
            }}
          >
            Traçar rota
          </button>
        </form>
      </div>
    </div>
  );
};
