import { Check } from "lucide-react";
import Button from "../ui/Buttton";

export default function PricingCard() {
  const features = [
    "5 AI posts per month",
    "Basic formatting",
    "Copy to clipboard",
    "1 writing style",
    "Community support",
  ];

  const disabledFeatures = [];

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
        border-neutral-200
        bg-gradient-to-b
        from-white
        to-neutral-50
        p-6
        sm:p-8
        lg:p-10
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-[0_35px_90px_rgba(0,0,0,0.12)]
      "
    >
      {/* Header */}
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-600 sm:text-sm">
          STARTER
        </p>

        <h2 className="mt-6 text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
          Free
        </h2>

        <p className="mx-auto mt-6 max-w-xs text-sm leading-7 text-neutral-500 sm:text-base sm:leading-8">
          Perfect for testing the waters and creating your first viral post.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8 sm:mt-10">
        <Button className="w-full py-3 text-base sm:py-4 sm:text-lg">
          Start 7-Day Free Trial
        </Button>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-neutral-200 sm:my-10" />

      {/* Features */}
      <div className="flex-1 space-y-4 sm:space-y-6">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3 sm:gap-4"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white sm:h-7 sm:w-7">
              <Check size={14} />
            </div>

            <span className="text-sm text-neutral-800 sm:text-base">
              {feature}
            </span>
          </div>
        ))}

        {disabledFeatures.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3 opacity-35 sm:gap-4"
          >
            <div className="h-6 w-6 rounded-full border border-neutral-300 sm:h-7 sm:w-7" />

            <span className="text-sm line-through sm:text-base">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}