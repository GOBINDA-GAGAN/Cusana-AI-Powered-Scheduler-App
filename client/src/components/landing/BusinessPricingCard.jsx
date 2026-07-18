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
        rounded-3xl
        border border-border
        bg-card
        p-6
        min-w-100
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Plan */}
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-light">
        Business
      </p>

      {/* Price */}
      <div className="mt-5 flex items-end gap-1">
        <span className="text-5xl font-bold text-text">
          $29.99
        </span>

        <span className="mb-2 text-text-light">
          /mo
        </span>
      </div>

      {/* Description */}
      <p className="mt-4 leading-7 text-text-light">
        For teams and growing businesses that need advanced collaboration
        and AI-powered workflow automation.
      </p>

      {/* Button */}
      <div className="mt-8">
        <Button className="w-full">
          Start 7-Day Free Trial
        </Button>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-border" />

      {/* Features */}
      <div className="space-y-4">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
              <Check size={12} />
            </div>

            <span className="text-sm text-text">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}