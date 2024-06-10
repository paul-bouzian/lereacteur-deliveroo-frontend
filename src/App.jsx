import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import "./assets/fonts/stylesheet.css";
import Categories from "./components/Category/Categories";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://site--backend-deliveroo--dh6xg2c5vy8x.code.run/")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <Header />
      <Restaurant restaurant={data.restaurant} />
      <Categories categories={data.categories} />
    </>
  );
}

export default App;
