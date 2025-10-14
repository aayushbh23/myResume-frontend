import { PropsWithChildren } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  visuallyHiddenTitle?: boolean;
};

export default function Section({
  id,
  title,
  subtitle,
  className = "",
  visuallyHiddenTitle = false,
  children,
}: PropsWithChildren<SectionProps>) {
  return (
    <section id={id} className={`p-4 rounded-3 ${className}`.trim()}>
      {title && (
        <header className="mb-3">
          <h2 className={visuallyHiddenTitle ? "visually-hidden" : "h3 m-0"}>{title}</h2>
          {subtitle && <p className="text-muted m-0">{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
