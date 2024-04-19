import Image from "next/image";

export default function OneImgL({ img, imgAlt, unoptimized }) {
  return (
    <section className="py-5">
      <div className="row">
        <Image
          className="col"
          src={img.src}
          alt={imgAlt}
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
          unoptimized={unoptimized ? true : false}
        />
      </div>
    </section>
  );
}
