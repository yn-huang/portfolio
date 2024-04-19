import Image from "next/image";

export default function OneImgS({img, imgAlt, unoptimized}) {
  return (
    <section className="py-5 px-5 px-sm-0">
      <div className="container">
        <div className="row">
          <Image
            className="col-12 col-md-6 mx-auto"
            src={img.src}
            alt={imgAlt}
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
