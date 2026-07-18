import { Star } from "lucide-react";
import StatCard from "./StatCard";

const stats = [
  {
    value: "50K+",
    label: "Active Creators",
  },
  {
    value: "2.4M+",
    label: "Posts Generated",
  },
  {
    value: "8.3x",
    label: "Avg. Reach Increase",
  },
  {
    value: "4 min",
    label: "Avg. Time to Post",
  },
];

export default function Stats() {
  return (
    <section className="py-4 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Top */}
        <div className="text-center">
          <p className="text-sm sm:text-base text-text-light">
            Loved by{" "}
            <span className="font-semibold text-text">
              50,000+ creators
            </span>{" "}
            worldwide
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="currentColor"
                  strokeWidth={0}
                />
              ))}
            </div>

            <span className="text-sm font-semibold text-text">
              4.9/5
            </span>

            <span className="text-sm text-text-light">
              from 3,800+ reviews
            </span>
          </div>
        </div>

        {/* Stats */}
        <div
          className="
            mt-10
            overflow-hidden
            rounded-2xl
            border
            border-border
            bg-card
            shadow-[0_20px_60px_rgba(0,0,0,0.05)]
          "
        >
          <div className="grid grid-cols-2 divide-x divide-y divide-border lg:grid-cols-4 lg:divide-y-0">
            {stats.map((item) => (
              <StatCard
                key={item.label}
                value={item.value}
                label={item.label}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}