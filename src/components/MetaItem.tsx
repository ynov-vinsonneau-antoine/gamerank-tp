type MetaItemProps = {
  label: string;
  value: string;
};

const MetaItem = ({ label, value }: MetaItemProps) => {
  return (
    <div className="rounded-2xl border border-zinc-200/80 bg-white px-4 py-3 shadow-sm">
      <dt className="text-[11px] font-extrabold uppercase tracking-[0.5px] text-zinc-400">
        {label}
      </dt>
      <dd className="mt-1 text-[15px] font-extrabold text-zinc-900">{value}</dd>
    </div>
  );
};

export default MetaItem;
