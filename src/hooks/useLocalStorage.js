import { useEffect, useState } from "react";

const useLocalStorage = (storageKey, initialValue) => {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(storageKey)) ?? initialValue);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [storageKey, value]);

  return [value, setValue];
};
export { useLocalStorage };
