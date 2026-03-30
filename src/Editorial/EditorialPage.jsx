/* eslint-disable react/prop-types */

/** Full-page shell: base tint, fixed grain & blobs — matches BannerEditorial mood site-wide */
const EditorialPage = ({ children }) => {
  return (
    <div className="editorial-page font-jost relative">
      <div className="editorial-page-blobs" aria-hidden />
      <div className="editorial-page-grain" aria-hidden />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
};

export default EditorialPage;
