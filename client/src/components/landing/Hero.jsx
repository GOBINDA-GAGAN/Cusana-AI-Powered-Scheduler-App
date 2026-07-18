import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import xLogo from "/x.png";
import linkedinLogo from "/linkedin.png";

import heroImage from "/heroimage.png"

import Button from "../ui/Buttton";
import Stats from "./Stats";
import { Link } from "react-router-dom";

const logos = [xLogo, linkedinLogo];

export default function Hero() {
  const [currentLogo, setCurrentLogo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % logos.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-background pt-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h1 className="text-7xl font-bold leading-none tracking-[-0.04em] text-heading">
          Turn Ideas into{" "}

          <span className="relative inline-flex h-16 w-16 items-center justify-center overflow-hidden align-middle mx-2">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentLogo}
                src={logos[currentLogo]}
                alt="Social Logo"
                className="absolute h-20 w-20 object-contain"
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.7,
                  rotate: -15,
                  filter: "blur(4px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -40,
                  scale: 0.7,
                  rotate: 15,
                  filter: "blur(4px)",
                }}
                transition={{
                  type: "tween",
                  stiffness: 100,
                  damping: 20,
                }}
              />
            </AnimatePresence>
          </span>

          Posts
          <br />
          in Seconds, Not Hours
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
          Just drop your idea. Our AI transforms it into engaging,
          ready-to-publish posts in seconds, optimized for maximum reach and
          audience engagement.
        </p>

        <div className="mt-10 flex justify-center">
          <Link to="/dashbord">
            <Button className="group">
              Get Started

              <span className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:bg-white/20">
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Button>
          </Link>

        </div>
      </div>

      <div className="mx-auto max-w-6xl flex  mt-10 justify-center">
        <img src={heroImage} alt="hero" className=" object-cover w-250 " srcset="" />

      </div>
      <div className="mx-auto max-w-6xl flex  mt-10 justify-center">


      </div>




    </section>
  );
}