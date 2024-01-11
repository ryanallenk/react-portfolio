import { createContext, memo, useState } from 'react';

type UiContextType = {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};

type UiContextProviderProps = {
  children: React.ReactNode;
};

export const UiContext = createContext<UiContextType>({
  showNav: false,
  setShowNav: () => null
});

function UiContextProvider({ children }: UiContextProviderProps) {
  const [showNav, setShowNav] = useState(false);

  return (
    <UiContext.Provider
      value={{
        showNav,
        setShowNav
      }}
    >
      {children}
    </UiContext.Provider>
  );
}

export default memo(UiContextProvider);
