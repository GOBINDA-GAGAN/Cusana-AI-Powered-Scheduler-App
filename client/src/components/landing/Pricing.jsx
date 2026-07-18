import { Circle } from "lucide-react";
import PricingCard from "./PricingCard";
import ProPricingCard from "./ProPricingCard";
import BusinessPricingCard from "./BusinessPricingCard";

export default function Pricing() {
    return (
        <section className="relative overflow-hidden bg-background py-28">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">

                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-text shadow-sm">
                        <Circle size={8} fill="currentColor" strokeWidth={0} />
                        Pricing
                    </span>

                    {/* Heading */}
                    <h2 className="mt-8 text-4xl font-bold leading-tight text-text md:text-6xl">
                        Simple, Transparent
                        <br />
                        Pricing
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-text-light">
                        Start free. Upgrade when you're ready to grow seriously.
                    </p>

                    {/* Toggle */}
                    <div className="mt-10 flex justify-center">
                        <div className="flex items-center rounded-full border border-border bg-card p-1">

                            {/* Active */}
                            <button className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white shadow-md dark:bg-white dark:text-black">
                                Monthly
                            </button>

                            {/* Inactive */}
                            <button className="flex items-center gap-2 rounded-full px-6 py-2 text-sm text-text-light transition hover:text-text">
                                Yearly

                                <span className="rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                                    -20%
                                </span>
                            </button>


                        </div>




                    </div>
                    {/* Pricing Cards */}

                   <div className="mx-auto mt-24 flex justify-center gap-10">
                        <PricingCard />
                        <ProPricingCard />
                        <BusinessPricingCard />
                    </div>
                </div>

            </div>
        </section>
    );
}