// text on left, image on right

import H5 from "../Headings/H5";
import H2 from "../Headings/H2";
import { forwardRef } from "react";

const TextImgR = forwardRef((props, ref) => {
  return (
    <section className="py-5 px-5 px-sm-0" ref={ref}>
      <div className="container">
        {props.title && (
          <div className="row pb-5">
            <div className="col-12 col-md-8 offset-md-4 mx-auto">
              <H2 color={props.color}>{props.title}</H2>
            </div>
          </div>
        )}
        <div className="row d-flex align-items-center flex-column flex-md-row">
          <div className="col-12 col-md-6 col-lg-4 mx-auto">
            <H5 color={props.color}>{props.subtitle}</H5>
            {props.children}
          </div>
          <img
            className="col-12 col-md-6 col-lg-8"
            src={require(`../../assets/images/${props.img}`)}
            alt=""
          />
        </div>
      </div>
    </section>
  );
});

export default TextImgR;
