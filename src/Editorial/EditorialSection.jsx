/* eslint-disable react/prop-types -- section shell; props are stable */
import React from "react";
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
  const aosTypes = [
    "fade-up",
    "fade-down",
    "zoom-in-up",
    "flip-up",
    "zoom-in",
    "fade",
  ];

  const headerDelay = 90 + delay * 100;
  const childParts = React.Children.toArray(children);

  return (
    <SectionReveal
      as={as}
      id={id}
      delay={delay}
      className={`editorial-section scroll-mt-28 ${className}`.trim()}
    >
      <header
        className="mb-10 text-center lg:mb-14 lg:text-left"
        data-aos="fade-up"
        data-aos-delay={headerDelay}
      >
        {kicker ? (
          <p className="editorial-kicker" data-aos="fade-up" data-aos-delay={headerDelay + 40}>
            {kicker}
          </p>
        ) : null}
        <h2
          className="editorial-title"
          data-aos="fade-up"
          data-aos-delay={headerDelay + 70}
        >
          {title}
        </h2>
        {subtitle ? (
          <p
            className="editorial-subtitle mx-auto lg:mx-0"
            data-aos="fade-up"
            data-aos-delay={headerDelay + 110}
          >
            {subtitle}
          </p>
        ) : null}
        <div className="editorial-rule mx-auto mt-6 lg:mx-0" aria-hidden />
      </header>

      {childParts.map((child, i) => {
        if (!React.isValidElement(child)) return child;
        const aosType = aosTypes[(i + delay) % aosTypes.length];
        const childDelay = 170 + i * 80 + delay * 80;
        return React.cloneElement(child, {
          ...(child.props ?? {}),
          "data-aos": child.props["data-aos"] ?? aosType,
          "data-aos-delay": child.props["data-aos-delay"] ?? childDelay,
        });
      })}
    </SectionReveal>
  );
};

export default EditorialSection;
