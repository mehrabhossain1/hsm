import { HeroParallax } from "@/components/ui/hero-parallax";

const ResourcesBookmarks = () => {
  const products = [
    {
      title: "Bookmarks",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://www.shutterstock.com/image-vector/website-bookmark-favorite-web-page-260nw-2304565527.jpg",
    },
    {
      title: "Resources",
      link: "https://cursor.so",
      thumbnail:
        "https://thumbs.dreamstime.com/b/human-resources-icon-management-rotation-partnership-communication-symbol-ui-web-logo-sign-flat-design-app-stock-vector-79806898.jpg",
    },
  ];

  return <HeroParallax products={products} />;
};

export default ResourcesBookmarks;
