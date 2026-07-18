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
        flex
        w-full
        max-w-md
        mx-auto
        flex-col
        rounded-[28px]
        sm:rounded-[36px]
        border
        border-white/10
        bg-[#12161F]
        p-6
        sm:p-8
        lg:p-10
        text-white
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-[0_35px_90px_rgba(0,0,0,0.35)]
      "
    >
      {/* Badge */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <span className="rounded-full bg-white px-4 py-1 text-xs font-semibold text-black shadow-lg">
          Most Popular
        </span>
      </div>

      {/* Plan */}
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400 sm:text-sm">
        PRO
      </p>

      {/* Price */}
      <div className="mt-6 flex items-end justify-center sm:justify-start gap-2">
        <span className="text-4xl font-bold sm:text-5xl lg:text-6xl">
          $9.99
        </span>

        <span className="mb-2 text-sm text-gray-400 sm:text-base">
          /month
        </span>
      </div>

      {/* Description */}
      <p className="mt-6 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
        For creators serious about building their audience consistently.
      </p>

      {/* CTA */}
      <div className="mt-8 sm:mt-10">
        <Button className="w-full py-3 text-base sm:py-4 sm:text-lg">
          Start 7-Day Free Trial
        </Button>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-white/10 sm:my-10" />

      {/* Features */}
      <div className="flex-1 space-y-4 sm:space-y-5">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3 sm:gap-4"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#12161F] sm:h-7 sm:w-7">
              <Check size={14} />
            </div>

            <span className="text-sm text-gray-200 sm:text-base">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}