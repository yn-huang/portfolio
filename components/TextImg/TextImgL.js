// image on left, text on right
import Image from "next/image";

import H5 from "../Headings/H5";

export default function TextImgL({img, imgAlt, color, subtitle, unoptimized, children}) {
  return (
    <section className="my-5 py-5 px-5 px-sm-0">
      <div className="container">
        <div className="row d-flex align-items-center flex-column-reverse flex-md-row">
          <Image
            className="col-12 col-md-6 col-lg-8"
            src={img.src}
            alt={imgAlt}
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            unoptimized={unoptimized ? true : false}
          />
          <div className="col-12 col-md-6 col-lg-4 mx-auto">
            <H5 color={color}>{subtitle}</H5>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
