export default function H1(props) {
    return (
      <h1 className="text-center" style={{ color: props.color }}>
        {props.children}
      </h1>
    );
  }
  