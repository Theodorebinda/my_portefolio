import { LazyLoadImage } from "react-lazy-load-image-component";

const ImageComponent = ({ src, alt }) => (
  <LazyLoadImage src={src} alt={alt} effect="blur" />
);

export default ImageComponent;
