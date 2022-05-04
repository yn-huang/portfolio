export default function H5(props) {
  return (
    <h5 className="mb-4" style={{ color: props.color }}>
      {props.children}
    </h5>
  );
}
