import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () =>{},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

//creating a customized hook 
export default function useTheme(){
    return useContext(ThemeProvider)
}