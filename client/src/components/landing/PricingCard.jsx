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

  const disabledFeatures = [
  
  ];

  return (
    <div
      className="
        flex flex-col
        min-h-125
        min-w-100
        rounded-[36px]
        border border-neutral-200
        bg-linear-to-b from-white to-neutral-50
        p-6
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-[0_35px_90px_rgba(0,0,0,0.12)]
      "
    >
      {/* Header */}
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-neutral-600">
          STARTER
        </p>

        <h2 className="mt-8 text-5xl font-black tracking-tight text-neutral-900">
          Free
        </h2>

        <p className="mx-auto mt-8 max-w-xs text-lg leading-9 text-neutral-500">
          Perfect for testing the waters and creating your first viral post.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <Button className="w-full py-4 text-lg">
          Start 7-Day Free Trial
        </Button>
      </div>

      {/* Divider */}
      <div className="my-10 h-px bg-neutral-200" />

      {/* Features */}
      <div className="flex-1 space-y-6">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-4">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
              <Check size={15} />
            </div>

            <span className="text-sm text-neutral-800">
              {feature}
            </span>
          </div>
        ))}

        {disabledFeatures.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-4 opacity-35"
          >
            <div className="h-7 w-7 rounded-full border border-neutral-300" />

            <span className="text-lg line-through">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}