import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import xLogo from "/x.png";
import linkedinLogo from "/linkedin.png";
import heroImage from "/heroimage.png";

import Button from "../ui/Buttton";

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
    <section className="bg-background pt-12 sm:pt-16 lg:pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">

        <h1 className="text-4xl font-bold leading-tight tracking-[-0.04em] text-heading sm:text-5xl md:text-6xl lg:text-7xl lg:leading-none">

          Turn Ideas into{" "}

          <span className="relative mx-1 inline-flex h-10 w-10 items-center justify-center overflow-hidden align-middle sm:mx-2 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentLogo}
                src={logos[currentLogo]}
                alt="Social Logo"
                className="absolute h-full w-full object-contain"
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
                  duration: 0.35,
                }}
              />
            </AnimatePresence>
          </span>

          Posts
          <br />
          in Seconds, Not Hours
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted sm:max-w-2xl sm:text-lg sm:leading-8">
          Just drop your idea. Our AI transforms it into engaging,
          ready-to-publish posts in seconds, optimized for maximum reach and
          audience engagement.
        </p>

        <div className="mt-8 flex justify-center sm:mt-10">
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

      {/* Hero Image */}
      <div className="mx-auto mt-10 flex max-w-7xl justify-center px-4 sm:px-6 lg:mt-14">
        <img
          src={heroImage}
          alt="Hero"
          className="
            w-full
            max-w-sm
            sm:max-w-xl
            md:max-w-3xl
            lg:max-w-5xl
            xl:max-w-6xl
            object-contain
          "
        />
      </div>
    </section>
  );
}