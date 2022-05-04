import Banner from "../components/Banner/Banner";
import Button from "../components/Buttons/Button";

export default function Home() {
  return (
    <>
      <main>
        <Banner
          bannerImg="Cover.png"
          styles={{
            backgroundPosition: "bottom",
          }}
          class="d-flex flex-column flex-md-row justify-content-center align-items-center"
        >
          <Button link="/develop">DEVELOP</Button>
          <Button link="/design">DESIGN</Button>
        </Banner>
      </main>
    </>
  );
}
