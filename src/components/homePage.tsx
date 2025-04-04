import { seoData } from "@/common/seoTitleDescription";
import HomeBanners from "./homeBanners";
import TabSEO from "./seoOptimize";

const HomePage: React.FC = () => {
  return (
    <>
      <TabSEO
        title={seoData.home.title}
        description={seoData.home.description}
        keywords={seoData.home.keywords}
        image={seoData.home.image}
        url={seoData.home.url}
      />
      <div id="home">
          <HomeBanners />
      </div>
    </>
  );
};

export default HomePage;
