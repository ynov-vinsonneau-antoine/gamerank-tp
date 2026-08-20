import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type BackLinkProps = {
  to: string;
  children: ReactNode;
};

const BackLink = ({ to, children }: BackLinkProps) => {
  return (
    <Link
      to={to}
      className="inline-flex h-10 w-fit items-center gap-2 rounded-xl border-[1.5px] border-zinc-200 bg-white px-3.5 text-[13.5px] font-bold text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
    >
      <span aria-hidden="true">←</span>
      {children}
    </Link>
  );
};

export default BackLink;
