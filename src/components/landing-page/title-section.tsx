import React from "react";

interface TitleSectionProps {
  title: string;
  subheading?: string;
  pill: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  pill,
  subheading,
  title,
}) => {
  return (
    <>
      <section className="flex flex-col gap-4 justify-center items-start md:items-center">
        <article className="rounded-full p-[1px] text-sm dark:bg-gradient-to-r dark:from-brand-primaryBlue dark:to-brand-primaryPurple">
          <div className="rounded-full px-3 py-1 dark:bg-black">{pill}</div>
        </article>
        {subheading ? (
          <>
            <h2 className="text-left text-3xl sm:text-5xl md:text-center font-semibold sm:max-w-[750px]">
              {title}
            </h2>
            <p className="dark:text-washed-purple-700 md:text-center sm:max-w-[450px]">
              {subheading}
            </p>
          </>
        ) : (
          <h1 className="text-left text-4xl sm:text-6xl md:text-center font-semibold sm:max-2-[850px]">
            {title}
          </h1>
        )}
      </section>
    </>
  );
};

export default TitleSection;
