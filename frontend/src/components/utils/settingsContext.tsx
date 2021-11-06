import React, { createContext } from "react";

interface SettingsTypes {
  jwtToken: string | null;
  setJwtToken: (value: string | null) => void;
  isLoggedIn: () => boolean;
}

const defaultSettingsState: SettingsTypes = {
  jwtToken: null,
  setJwtToken: () => {},
  isLoggedIn: () => false
};

const SettingsContext = createContext<SettingsTypes>(defaultSettingsState);

export default SettingsContext;
