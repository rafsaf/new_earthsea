import { useState } from "react";

export const useLocalStorage = (key: string) => {
  const [storedValue, setStoredValue] = useState<string | null>(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  });

  const setValue = (value: string) => {
    localStorage.setItem(key, value);
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
