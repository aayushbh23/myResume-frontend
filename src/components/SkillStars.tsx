import React from "react";

type SkillStarsProps = {
  name: string;
  rating: number; // 0 - 5 (supports halves like 3.5)
};

const Star = ({ type }: { type: "full" | "half" | "empty" }) => {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", "aria-hidden": true };
  if (type === "full") {
    return (
      <svg {...common} role="img" className="me-1 text-warning">
        <path fill="currentColor" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    );
  }
  if (type === "half") {
    return (
      <svg {...common} role="img" className="me-1 text-warning">
        <defs>
          <linearGradient id="half">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path fill="url(#half)" stroke="currentColor" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    );
  }
  return (
    <svg {...common} role="img" className="me-1 text-muted">
      <path fill="none" stroke="currentColor" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  );
};

export const SkillStars: React.FC<SkillStarsProps> = ({ name, rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const diff = rating - i;
    const type: "full" | "half" | "empty" =
      diff >= 1 ? "full" : diff >= 0.5 ? "half" : "empty";
    return <Star key={i} type={type} />;
  });

  return (
    <div className="d-flex align-items-center justify-content-between py-2">
      <span className="fw-medium">{name}</span>
      <div className="d-flex" aria-label={`${name} skill rating ${rating} out of 5`} title={`${rating}/5`}>
        {stars}
      </div>
    </div>
  );
};
