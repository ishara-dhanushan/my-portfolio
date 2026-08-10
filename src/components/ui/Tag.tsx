// src/components/ui/Tag.tsx
export function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-primary-subtle px-3 py-1 font-mono text-xs text-primary-subtle-foreground">
      {children}
    </span>
  );
}
