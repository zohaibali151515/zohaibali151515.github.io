"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { IridescentMesh } from "./IridescentMesh";

export function HeroCanvas() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const targetPointer = useRef({ x: 0, y: 0 });
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Track pointer (window-level so the parallax works even when cursor is over the text overlay)
  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      targetPointer.current = { x, y };
    };
    const tick = () => {
      // Lerp pointer toward target so motion is butter-smooth
      pointer.current.x += (targetPointer.current.x - pointer.current.x) * 0.08;
      pointer.current.y += (targetPointer.current.y - pointer.current.y) * 0.08;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, [reduced]);

  if (reduced) {
    return (
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 72% 55%, #8a4bff 0%, #4b6cff 14%, #ff4bc0 32%, transparent 50%)",
          filter: "blur(60px)",
          opacity: 0.22,
        }}
      />
    );
  }

  return (
    <div ref={wrapRef} className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 4.6], fov: 42 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[2, 3, 2]} intensity={0.6} color="#8a4bff" />
        <pointLight position={[-2, -1, 3]} intensity={0.4} color="#4b6cff" />
        <IridescentMesh pointer={pointer} />
      </Canvas>
    </div>
  );
}
