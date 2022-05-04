// article overview section

import H1 from "../Headings/H1";
import OverviewListItem from "./OverviewListItem";
import { forwardRef } from "react";

const Overview = forwardRef((props, ref) => {
  return (
    <section className="my-5 py-5 px-5 px-sm-0" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 mx-auto">
            <H1 color={props.color}>{props.title}</H1>
            <ul className="my-5">
              {props.date && (
                <OverviewListItem name="Date">{props.date}</OverviewListItem>
              )}
              {props.type && (
                <OverviewListItem name="Type">{props.type}</OverviewListItem>
              )}
              {props.languages && (
                <OverviewListItem name="Languages">
                  {props.languages}
                </OverviewListItem>
              )}
              {props.tools && (
                <OverviewListItem name="Tools">{props.tools}</OverviewListItem>
              )}
              {props.liveLink && (
                <OverviewListItem name="Live Version">
                  <a target="_blank" rel="noreferrer" href={props.liveLink}>
                    {props.liveLink}
                  </a>
                </OverviewListItem>
              )}
            </ul>
            <p>{props.children}</p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Overview;
