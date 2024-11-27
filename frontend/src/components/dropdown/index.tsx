import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { useAppContext } from "context/AppContext";
import { IDriver } from "types";
import ArrowDown from "../../assets/down.png";

type DropdownPropsType = {
  selectedDriver: Pick<IDriver, "id" | "name">;
  setSelectedDriver: React.Dispatch<
    React.SetStateAction<Pick<IDriver, "id" | "name">>
  >;
};

export const Dropdown = ({
  selectedDriver,
  setSelectedDriver,
}: DropdownPropsType) => {
  const { setIsLoading } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const drivers = [
    {
      id: 0,
      name: "Todos",
    },
    {
      id: 1,
      name: "Homer Simpson",
    },
    {
      id: 2,
      name: "Dominic Toretto",
    },
    {
      id: 3,
      name: "James Bond",
    },
  ];
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleDriverChange = async (driver: Pick<IDriver, "id" | "name">) => {
    setIsLoading(true);
    setIsOpen(false);
    setSelectedDriver(driver);
    setIsLoading(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        isOpen &&
        !buttonRef.current?.contains(e.target as Node) &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsOpen, isOpen]);

  return (
    <div className={styles.dropdownContainer}>
      <div
        className={styles.dropdownOpener}
        tabIndex={0}
        role="button"
        ref={buttonRef}
        onClick={() => toggleDropdown()}
      >
        <button className={styles.dropdownOpenerButton} tabIndex={-1}>
          {selectedDriver.id !== 0 ? (
            selectedDriver.name
          ) : (
            <>
              Filtrar motorista
              <img
                src={ArrowDown}
                alt="Seta para baixo"
                className={styles.dropdownOpenerIcon}
              />
            </>
          )}
        </button>
      </div>
      <div
        className={
          (styles.dropdownMenu,
          isOpen ? styles.dropdownMenu__opened : styles.dropdownMenu__closed)
        }
        aria-label="Menu dropdown para seleção de motorista"
        ref={menuRef}
      >
        <ul
          role="listbox"
          aria-label="Lista de motoristas"
          className={styles.dropdownList}
        >
          {drivers.map((driver) => {
            return (
              <li role="none" className={styles.dropdownItem} key={driver.id}>
                <button
                  role="option"
                  type="button"
                  tabIndex={-1}
                  aria-label={driver.name}
                  data-item="dropdown-item"
                  aria-selected={selectedDriver.id === driver.id}
                  className={styles.dropdownItemButton}
                  onClick={() => handleDriverChange(driver)}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {driver.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
