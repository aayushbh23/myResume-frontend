import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

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
  const theme = useSelector((s: RootState) => s.ui.theme);
  const base = theme === "dark" ? "bg-dark text-white" : "bg-light";

  return (
    <section id={id} className={`p-4 rounded-3 ${base} ${className}`.trim()}>
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
