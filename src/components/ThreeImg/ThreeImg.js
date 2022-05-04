export default function ThreeImg(props) {
  return (
    <section className="row mx-5 py-5">
      <img
        className="col-12 col-md-3 mx-auto mb-5 mb-md-0"
        src={require(`../../assets/images/${props.img1}`)}
        alt=""
      />
      <img
        className="col-12 col-md-3 mx-auto mb-5 mb-md-0"
        src={require(`../../assets/images/${props.img2}`)}
        alt=""
      />
      <img
        className="col-12 col-md-3 mx-auto"
        src={require(`../../assets/images/${props.img3}`)}
        alt=""
      />
    </section>
  );
}
