import { Check } from "lucide-react";
import Button from "../ui/Buttton";


const features = [
  "Unlimited AI posts",
  "Advanced formatting",
  "Thread builder",
  "5 writing styles",
  "Post history & library",
  "Direct scheduling",
  "Priority support",
  "Team collaboration",
  "Custom brand voice",
];

export default function ProPricingCard() {
  return (
    <div
      className="
        relative
        rounded-3xl
        border border-white/10
        bg-[#12161F]
     min-w-100
        p-6
        text-white
        transition-all
        duration-300
        hover:-translate-y-2
      "
    >
      {/* Badge */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <span className="rounded-full bg-white px-4 py-1 text-xs font-semibold text-black shadow-lg">
          Most Popular
        </span>
      </div>

      {/* Plan */}
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
        Pro
      </p>

      {/* Price */}
      <div className="mt-5 flex items-end gap-1">
        <span className="text-5xl font-bold">$9.99</span>

        <span className="mb-2 text-gray-400">
          /mo
        </span>
      </div>

      <p className="mt-4 leading-7 text-gray-400">
        For creators serious about building their audience consistently.
      </p>

      {/* Button */}
      <div className="mt-8">
        <Button className="w-full">
          Start 7-Day Free Trial
        </Button>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-white/10" />

      {/* Features */}
      <div className="space-y-4">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#12161F]">
              <Check size={12} />
            </div>

            <span className="text-sm text-gray-200">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}