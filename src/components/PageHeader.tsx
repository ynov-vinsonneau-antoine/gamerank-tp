type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

const PageHeader = ({ eyebrow, title, subtitle }: PageHeaderProps) => {
  return (
    <header className="mb-8">
      {eyebrow && (
        <p className="mb-2 text-[12px] font-extrabold uppercase tracking-[0.5px] text-orange-500">
          {eyebrow}
        </p>
      )}

      <h1 className="text-[28px] font-extrabold leading-tight tracking-tight text-zinc-900 md:text-[32px]">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-500">
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default PageHeader;
