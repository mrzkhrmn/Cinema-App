import AllRoutes from "./routes/AllRoutes";
import { Header, Footer } from "./components";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
