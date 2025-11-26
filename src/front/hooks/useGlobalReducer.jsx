// ===============================
// useGlobalReducer.js
// ===============================

// React tools
import { useContext, useReducer, createContext } from "react";

// Store + Reducer
import storeReducer, { initialStore } from "../store";

// Create Global Context
const StoreContext = createContext(null);

// ===============================
// PROVIDER
// ===============================
export function StoreProvider({ children }) {
  // Initialize the reducer
  const [store, dispatch] = useReducer(storeReducer, initialStore());

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

// ===============================
// HOOK
// ===============================
export default function useGlobalReducer() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error(
      "useGlobalReducer must be used inside <StoreProvider />"
    );
  }

  return context; // { store, dispatch }
}
