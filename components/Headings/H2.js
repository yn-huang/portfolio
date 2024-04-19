export default function H2(props) {
    return (
      <h2 className="mb-4" style={{ color: props.color }}>
        {props.children}
      </h2>
    );
  }
  