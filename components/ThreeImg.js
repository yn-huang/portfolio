import Image from "next/image";

export default function ThreeImg({img1, img1Alt, img2, img2Alt, img3, img3Alt, unoptimized}) {
  return (
    <section className="row mx-5 py-5">
      <Image
        className="col-12 col-md-3 mx-auto mb-5 mb-md-0"
        src={img1.src}
        alt={img1Alt}
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
        unoptimized={unoptimized ? true : false}
      />
      <Image
        className="col-12 col-md-3 mx-auto mb-5 mb-md-0"
        src={img2.src}
        alt={img2Alt}
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
        unoptimized={unoptimized ? true : false}
      />
      <Image
        className="col-12 col-md-3 mx-auto"
        src={img3.src}
        alt={img3Alt}
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
        unoptimized={unoptimized ? true : false}
      />
    </section>
  );
}
