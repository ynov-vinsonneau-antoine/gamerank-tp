import type { ReactNode } from "react";

type EmptyStateProps = {
  code?: string;
  title: string;
  message: string;
  children?: ReactNode;
};

const EmptyState = ({ code, title, message, children }: EmptyStateProps) => {
  return (
    <section className="flex flex-col items-center rounded-2xl border border-zinc-200/80 bg-white px-6 py-16 text-center shadow-sm">
      {code && (
        <p className="bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-7xl font-extrabold tracking-tight text-transparent">
          {code}
        </p>
      )}

      <h2 className="mt-4 text-[22px] font-extrabold tracking-tight text-zinc-900">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-[14px] leading-relaxed text-zinc-500">
        {message}
      </p>

      {children && <div className="mt-8">{children}</div>}
    </section>
  );
};

export default EmptyState;
