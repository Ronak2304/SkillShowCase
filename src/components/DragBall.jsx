"use client";

import { motion ,useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function DragBall() {
  const ref = useRef(null);
  const x = useSpring(0, { damping: 20, stiffness: 150 });
  const y = useSpring(0, { damping: 20, stiffness: 150 });

  useEffect(() => {
    const move = (e) => {
      const ball = ref.current;
      if (!ball) return;
      const { clientX, clientY } = e;

      const offsetX = clientX - ball.offsetWidth / 2;
      const offsetY = clientY - ball.offsetHeight / 2;

      x.set(offsetX);
      y.set(offsetY);
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        y,
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "#ff0088",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 50,
      }}
    />
  );
}
