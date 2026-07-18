import { Circle } from "lucide-react";
import PricingCard from "./PricingCard";
import ProPricingCard from "./ProPricingCard";
import BusinessPricingCard from "./BusinessPricingCard";

export default function Pricing() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-text shadow-sm">
            <Circle size={8} fill="currentColor" strokeWidth={0} />
            Pricing
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-3xl font-bold leading-tight text-text sm:text-4xl lg:mt-8 lg:text-6xl">
            Simple, Transparent
            <br />
            Pricing
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-text-light sm:mt-6 sm:text-lg sm:leading-8">
            Start free. Upgrade when you're ready to grow seriously.
          </p>

          {/* Toggle */}
          <div className="mt-8 flex justify-center lg:mt-10">
            <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-border bg-card p-1">

              <button className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white shadow-md dark:bg-white dark:text-black sm:px-6">
                Monthly
              </button>

              <button className="flex items-center gap-2 rounded-full px-5 py-2 text-sm text-text-light transition hover:text-text sm:px-6">
                Yearly

                <span className="rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                  -20%
                </span>
              </button>

            </div>
          </div>

        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          <PricingCard />
          <ProPricingCard />
          <BusinessPricingCard />
        </div>

      </div>
    </section>
  );
}