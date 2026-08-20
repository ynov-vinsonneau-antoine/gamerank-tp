type StepListProps = {
  steps: string[];
};

const StepList = ({ steps }: StepListProps) => {
  return (
    <ol className="flex flex-col gap-3">
      {steps.map((step, index) => (
        <li
          key={step}
          className="flex gap-4 rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-sm"
        >
          <span className="grid size-7 shrink-0 place-items-center rounded-full bg-linear-to-br from-orange-400 to-orange-600 text-[12px] font-extrabold text-white">
            {index + 1}
          </span>
          <p className="pt-0.5 text-[14px] leading-relaxed text-zinc-600">
            {step}
          </p>
        </li>
      ))}
    </ol>
  );
};

export default StepList;
