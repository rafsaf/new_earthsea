import { useState } from "react";

export const useLocalStorage = (
  key: string,
  defaultValue?: string
): [string | null, (value: string | null) => void] => {
  let item = window.localStorage.getItem(key);
  if (!item && defaultValue) {
    window.localStorage.setItem(key, defaultValue);
    item = defaultValue;
  }
  const [storedValue, setStoredValue] = useState<string | null>(item);

  const setValue = (value: string | null) => {
    if (value) {
      localStorage.setItem(key, value);
    } else {
      localStorage.removeItem(key);
    }
    setStoredValue(value);
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
