import { HeroParallax } from "@/components/ui/hero-parallax";

const ResourcesBookmarks = () => {
  const products = [
    {
      title: "Bookmarks",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "Resources",
      link: "https://cursor.so",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
  ];

  return <HeroParallax products={products} />;
};

export default ResourcesBookmarks;
