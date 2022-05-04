// ordered list

import OListItem from "./OListItem";

export default function OList(props) {
  return (
    <ol className="pl-4 mb-md-0 mb-4">
      {props.items.map((item, index) => (
        <OListItem key={index}>{item}</OListItem>
      ))}
    </ol>
  );
}
