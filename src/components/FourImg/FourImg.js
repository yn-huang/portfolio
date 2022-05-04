export default function FourImg(props) {
  return (
    <section className="mx-5 py-5">
      <div className="container">
        <div className="row mb-5 mb-md-3">
          <img
            className="col-12 col-md-6 mb-5 mb-md-0"
            src={require(`../../assets/images/${props.img1}`)}
            alt=""
          />
          <img
            className="col-12 col-md-6"
            src={require(`../../assets/images/${props.img2}`)}
            alt=""
          />
        </div>
        <div className="row">
          <img
            className="col-12 col-md-6 mb-5 mb-md-0"
            src={require(`../../assets/images/${props.img3}`)}
            alt=""
          />
          <img
            className="col-12 col-md-6"
            src={require(`../../assets/images/${props.img4}`)}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
