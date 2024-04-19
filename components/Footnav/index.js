// article's bottom navigation with 2 links

import FootnavLink from "./FootnavLink";

export default function Footnav(props) {
  return (
    <div className="container d-flex justify-content-between my-5">
      <div className="footnavItem d-flex flex-column align-items-start">
        <FootnavLink link={props.leftLink}>{props.leftNav}</FootnavLink>
      </div>
      <div className="footnavItem d-flex flex-column align-items-end">
        <FootnavLink link={props.rightLink}>{props.rightNav}</FootnavLink>
      </div>
    </div>
  );
}
