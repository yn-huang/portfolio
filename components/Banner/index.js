// full screen banner with image on background

import classes from "./Banner.module.css";

export default function Banner(props) {
  const styles = {
    backgroundImage: `url(${props.bannerImg.src})`,
    ...props.styles,
  };

  return (
    <section style={styles} className={`${classes.banner} ${props.class}`}>
      {props.children}
    </section>
  );
}
