import { motion } from "framer-motion";
import airplane from "/img/logos/Aviones.png";

export default function AirplaneAnimation({
  onComplete,
  className = "absolute inset-0 overflow-hidden pointer-events-none z-0",
  duration = 1,
}) {
  return (
    <div className={className}>

      {/* Estela */}
      <motion.div
        className="absolute top-1/2 left-0 h-3 w-[140vw] -translate-y-1/2 blur-[2px]"
        style={{
          background: `
            linear-gradient(
              to right,
              #006847 0%,
              #006847 33%,
              #ffffff 33%,
              #ffffff 66%,
              #ce1126 66%,
              
              #ce1126 100%
            )
          `,
        }}
        initial={{
          opacity: 0,
          scaleX: 0.1,
          x: "-120vw",
        }}
        animate={{
          opacity: [0, 1, 1, 0],
          scaleX: [0.1, 0.7, 1, 1.1],
          x: ["-120vw", "-60vw", "0vw", "30vw"],
        }}
        transition={{
          duration,
          ease: "easeOut",
        }}
      />

      {/* Avión */}
      <motion.img
        src={airplane}
        alt="Avión"
        className="absolute w-70 md:w-78 top-1/2 -translate-y-1/2 drop-shadow-2xl"
        initial={{
          x: "-35vw",
          rotate: 0,
        }}
        animate={{
          x: ["-35vw", "25vw", "55vw", "130vw"],
          rotate: [0, 0, 12, 12],
        }}
        transition={{
          duration,
          ease: [0.42, 0, 0.58, 1],
          times: [0, 0.35, 0.45, 1],
        }}
        onAnimationComplete={onComplete}
      />
    </div>
  );
}
