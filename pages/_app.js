import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule un chargement (ex: données async, délai...)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Change 2000 par le temps de chargement réel
  }, []);

  return loading ? <Loader /> : <Component {...pageProps} />;
}

export default MyApp;
