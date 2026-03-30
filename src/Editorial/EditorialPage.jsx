/* eslint-disable react/prop-types */
import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";
import SmoothScroll from "../Components/SmoothScroll";

/** Full-page shell: base tint, fixed grain & blobs — matches BannerEditorial mood site-wide */
const EditorialPage = ({ children }) => {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <div className="editorial-page font-jost relative">
          <SmoothScroll />
          <div className="editorial-page-blobs" aria-hidden />
          <div className="editorial-page-grain" aria-hidden />
          <div className="relative z-[1]">{children}</div>
        </div>
      </MotionConfig>
    </LazyMotion>
  );
};

export default EditorialPage;
