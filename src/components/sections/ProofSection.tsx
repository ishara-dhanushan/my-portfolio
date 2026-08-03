import { proofItems } from "@/data/portfolio";

export function ProofSection() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-5">
        {proofItems.map((item) => (
          <div key={item.label}>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {item.label}
            </p>
            <p className="mt-2 text-sm text-foreground">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
