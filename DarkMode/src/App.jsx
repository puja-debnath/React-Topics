import { useEffect, useState } from "react";
import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card.jsx";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };
  //here we are only changing the state , it dont have any effect in browser
  //if you want to make it happen in web page, use any event like onclick/onchange
  //it you want to make it haapen through state change use useEffect

  //any value in the dependency array change i will rerender the whole page
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
