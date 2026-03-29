/* eslint-disable react/prop-types -- section shell; props are stable */
import { SectionReveal } from "../Components/SectionReveal";

const EditorialSection = ({
  id,
  as = "section",
  kicker,
  title,
  subtitle,
  children,
  className = "",
  delay = 0,
}) => {
  return (
    <SectionReveal
      as={as}
      id={id}
      delay={delay}
      className={`editorial-section scroll-mt-28 ${className}`.trim()}
    >
      <header className="mb-10 text-center lg:mb-14 lg:text-left">
        {kicker ? <p className="editorial-kicker">{kicker}</p> : null}
        <h2 className="editorial-title">{title}</h2>
        {subtitle ? <p className="editorial-subtitle mx-auto lg:mx-0">{subtitle}</p> : null}
        <div className="editorial-rule mx-auto mt-6 lg:mx-0" aria-hidden />
      </header>
      {children}
    </SectionReveal>
  );
};

export default EditorialSection;
