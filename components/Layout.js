import Link from "next/link";
import { useState, memo, useEffect } from "react";
import styles from "./Layout.module.css";

export default function TransitionLayout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");
  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut");
  }, [children, setDisplayChildren, displayChildren]);

  return (
    <div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <div
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            console.log("fading out");
            setDisplayChildren(children);
            setTransitionStage("fadeIn");
          }
        }}
        className={`${styles.content} ${styles[transitionStage]}`}
      >
        {displayChildren}
      </div>
    </div>
  );
}
