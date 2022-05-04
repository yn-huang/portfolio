// image on left, text on right

import H5 from "../Headings/H5";

export default function TextImgL(props) {
  return (
    <section className="my-5 py-5 px-5 px-sm-0">
      <div className="container">
        <div className="row d-flex align-items-center flex-column-reverse flex-md-row">
          <img
            className="col-12 col-md-6 col-lg-8"
            src={require(`../../assets/images/${props.img}`)}
            alt=""
          />
          <div className="col-12 col-md-6 col-lg-4 mx-auto">
            <H5 color={props.color}>{props.subtitle}</H5>
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
}
