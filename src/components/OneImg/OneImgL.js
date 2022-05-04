export default function OneImgL(props) {
  return (
    <section className="py-5">
      <div className="row">
        <img
          className="col"
          src={require(`../../assets/images/${props.img}`)}
          alt=""
        />
      </div>
    </section>
  );
}
