// paragraph with headings

import H2 from "../Headings/H2";
import { forwardRef } from "react";

const Paragraph = forwardRef((props, ref) => {
  return (
    <section className="my-5 py-5 px-5 px-sm-0" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 mx-auto">
            <H2 color={props.color}>{props.subtitle}</H2>
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Paragraph;
