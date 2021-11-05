import TransitionLayout from "../components/Layout";
import { useState, useRef } from "react";
import "./global.css";
function MyApp({ Component, pageProps }) {
  return (
    <TransitionLayout>
      <Component {...pageProps} />
    </TransitionLayout>
  );
}

export default MyApp;
