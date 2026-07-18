import { TrendingUp } from "lucide-react";

export default function StartCard({
  label,
  value,
  icon: Icon,
  trend,
}) {
  return (
    <div className="rounded-md border border-border bg-card p-4 transition hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-secondary">
          <Icon size={24} />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-green-500">
        <TrendingUp size={16} />
        <span>{trend}</span>
      </div>
    </div>
  );
}