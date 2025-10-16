import React, { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  id?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  bg?: "light" | "dark" | "white";
}

export function Section({ id, title, description, bg = "white", children }: SectionProps) {
  const bgClass = bg === "light" ? "bg-zinc-100 text-black" : bg === "dark" ? "bg-white text-black" : "bg-white text-black";
  return (
    <section id={id} className={`${bgClass} py-20`}>
      <div className="mx-auto w-[90%] max-w-[1200px]">
        {title ? (
          <h2 className="section-title mb-12 text-center text-4xl font-bold text-black">
            {title}
            <span className="mx-auto mt-4 block h-[3px] w-16 bg-[#EB0028]" />
          </h2>
        ) : null}
        {description ? (
          <p className="section-description mx-auto mb-12 max-w-[800px] text-center text-lg text-zinc-600">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}


