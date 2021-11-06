import { useState } from "react";

export const useLocalStorage = (key: string): [string | null, (value: string | null) => void] => {
  const item = window.localStorage.getItem(key);
  const [storedValue, setStoredValue] = useState<string | null>(item);

  const setValue = (value: string | null) => {
    if (value) {
      localStorage.setItem(key, value);
    } else {
      localStorage.removeItem(key)
    }
    setStoredValue(value)
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
