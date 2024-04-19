// text on left, image on right

"use client";

import Image from "next/image";

import H5 from "../Headings/H5";
import H2 from "../Headings/H2";
import { forwardRef } from "react";

const TextImgR = forwardRef(({title, color, subtitle, children, img, imgAlt, unoptimized}, ref) => {
  return (
    <section className="py-5 px-5 px-sm-0" ref={ref}>
      <div className="container">
        {title && (
          <div className="row pb-5">
            <div className="col-12 col-md-8 offset-md-4 mx-0">
              <H2 color={color}>{title}</H2>
            </div>
          </div>
        )}
        <div className="row d-flex align-items-center flex-column flex-md-row">
          <div className="col-12 col-md-6 col-lg-4 mx-auto">
            <H5 color={color}>{subtitle}</H5>
            {children}
          </div>

          <Image
            className="col-12 col-md-6 col-lg-8"
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
});

TextImgR.displayName = "TextImgR";

export default TextImgR;
