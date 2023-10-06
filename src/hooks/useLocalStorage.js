import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem(key));
    if (storedValue) {
      return storedValue;
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });
  const handleChange = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setData(newValue);
  };

  return [data, handleChange];
}
