"use client"
import '../styles/globals.css';
import { cartStore, wrapper } from '../redux/store';
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={cartStore}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
