import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../config/sanityClient";

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => {
  return builder.image(source);
};
