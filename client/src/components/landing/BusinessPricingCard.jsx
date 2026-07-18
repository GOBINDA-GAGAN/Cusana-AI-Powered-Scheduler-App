import { Check } from "lucide-react";
import Button from "../ui/Buttton";

const features = [
  "Everything in Pro",
  "Up to 5 team members",
  "Custom brand voice AI",
  "Advanced analytics",
  "Bulk post generation",
  "API access",
  "Dedicated account manager",
];

export default function BusinessPricingCard() {
  return (
    <div
      className="
        flex
        w-full
        max-w-md
        mx-auto
        flex-col
        rounded-[28px]
        sm:rounded-[36px]
        border
        border-border
        bg-card
        p-6
        sm:p-8
        lg:p-10
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-[0_35px_90px_rgba(0,0,0,0.12)]
      "
    >
      {/* Plan */}
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-light sm:text-sm">
        BUSINESS
      </p>

      {/* Price */}
      <div className="mt-6 flex items-end justify-center gap-2 sm:justify-start">
        <span className="text-4xl font-bold text-text sm:text-5xl lg:text-6xl">
          $29.99
        </span>

        <span className="mb-2 text-sm text-text-light sm:text-base">
          /month
        </span>
      </div>

      {/* Description */}
      <p className="mt-6 text-sm leading-7 text-text-light sm:text-base sm:leading-8">
        For teams and growing businesses that need advanced collaboration
        and AI-powered workflow automation.
      </p>

      {/* Button */}
      <div className="mt-8 sm:mt-10">
        <Button className="w-full py-3 text-base sm:py-4 sm:text-lg">
          Start 7-Day Free Trial
        </Button>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-border sm:my-10" />

      {/* Features */}
      <div className="flex-1 space-y-4 sm:space-y-5">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3 sm:gap-4"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black sm:h-7 sm:w-7">
              <Check size={14} />
            </div>

            <span className="text-sm text-text sm:text-base">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}