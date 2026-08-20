import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type ActionLinkVariant = "primary" | "secondary";

type ActionLinkProps = {
  to: string;
  variant?: ActionLinkVariant;
  children: ReactNode;
};

/** Les deux styles de bouton du carnet, au même endroit. */
const variants: Record<ActionLinkVariant, string> = {
  primary:
    "bg-linear-to-r from-orange-400 to-orange-600 text-white shadow-sm shadow-orange-500/20 hover:opacity-90",
  secondary:
    "border-[1.5px] border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50",
};

const ActionLink = ({ to, variant = "primary", children }: ActionLinkProps) => {
  return (
    <Link
      to={to}
      className={`inline-flex h-11 items-center justify-center rounded-xl px-5 text-[14px] font-bold transition-all ${variants[variant]}`}
    >
      {children}
    </Link>
  );
};

export default ActionLink;
