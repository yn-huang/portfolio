export default function OverviewListItem(props) {
    const styles = { fontFamily: "AcuminRegular, sans-serif" };
    return (
      <li className="row mb-3">
        <p className="col-5 text-right" style={styles}>
          {props.name}
        </p>
        <p className="col-7">{props.children}</p>
      </li>
    );
  }
  