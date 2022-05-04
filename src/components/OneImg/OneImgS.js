export default function OneImgS(props) {
  return (
    <section className="py-5 px-5 px-sm-0">
      <div className="container">
        <div className="row">
          <img
            className="col-12 col-md-6 mx-auto"
            src={require(`../../assets/images/${props.img}`)}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
