// unordered list

import UListItem from "./UListItem";

export default function UList(props) {
  return (
    <ul className="pl-4 mb-md-0 mb-4">
      {props.items.map((item, index) => (
        <UListItem key={index}>{item}</UListItem>
      ))}
    </ul>
  );
}
