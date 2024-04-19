import Banner from "@/components/Banner";
import BannerButton from "@/components/Banner/BannerButton";
import { paths } from "@/routes";
import bannerImg from '@/public/images/Cover.png'

export default function Home() {
  return (
    <main>
      <Banner
        bannerImg={bannerImg}
        styles={{
          backgroundPosition: "bottom",
        }}
        class="d-flex flex-column flex-md-row justify-content-center align-items-center"
      >
        <BannerButton link={paths.develop.root}>DEVELOP</BannerButton>
        <BannerButton link={paths.design.root}>DESIGN</BannerButton>
      </Banner>
    </main>
  );
}
