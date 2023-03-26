import "@/styles/globals.css";
import Navbar from "../components/Navbar";
import styles from "../styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <div className={styles.body}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
