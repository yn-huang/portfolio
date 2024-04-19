import Image from "next/image";

export default function FourImg({
  img1,
  img1Alt,
  img2,
  img2Alt,
  img3,
  img4,
  img3Alt,
  img4Alt,
  unoptimized,
}) {
  return (
    <section className="mx-5 py-5">
      <div className="container">
        <div className="row mb-5 mb-md-3">
          <Image
            className="col-12 col-md-6 mb-5 mb-md-0"
            src={img1.src}
            alt={img1Alt}
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            unoptimized={unoptimized ? true : false}
          />
          <Image
            className="col-12 col-md-6"
            src={img2.src}
            alt={img2Alt}
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            unoptimized={unoptimized ? true : false}
          />
        </div>
        <div className="row">
          <Image
            className="col-12 col-md-6 mb-5 mb-md-0"
            src={img3.src}
            alt={img3Alt}
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            unoptimized={unoptimized ? true : false}
          />
          <Image
            className="col-12 col-md-6"
            src={img4.src}
            alt={img4Alt}
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            unoptimized={unoptimized ? true : false}
          />
        </div>
      </div>
    </section>
  );
}
