export default function StatCard({ value, label }) {
  return (
    <div
      className="
        flex flex-1 flex-col items-center justify-center
        border-r border-border
        px-6 py-6
        last:border-r-0
      "
    >
      <h3 className="text-3xl font-black tracking-tight text-text">
        {value}
      </h3>

      <p className="mt-3 text-sm text-text-light">
        {label}
      </p>
    </div>
  );
}