type InfoRowProps = {
  label: string;
  value: string;
};

const InfoRow = ({ label, value }: InfoRowProps) => {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-slate-800 py-3 last:border-b-0">
      <dt className="text-sm text-slate-500">{label}</dt>
      <dd className="text-right text-sm font-medium text-slate-50">{value}</dd>
    </div>
  );
};

export default InfoRow;
