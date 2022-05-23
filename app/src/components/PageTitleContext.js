import React, { useState } from "react";

export const TitleContext = React.createContext({
    title: '',
    changeTitle: () => {}
});

export function TitleContextProvider ({
 children
}) {
  const [ title, setTitle ] = useState('Allergenz');

  return (
    <TitleContext.Provider value={{
        title: title,
        changeTitle: setTitle
    }}
    >
      {children}
    </TitleContext.Provider>
  )
}

export default function useTitleContext() {
  return React.useContext(TitleContext)
}