import Image from "next/image";

import photo from "@/public/images/Photo.png";
import FootnavLink from "@/components/Footnav/FootnavLink";
import H2 from "@/components/Headings/H2";
import H5 from "@/components/Headings/H5";
import classes from "./About.module.css";

export default function About() {
  return (
    <main className={classes["main-container"]}>
      <section className="my-5 pt-5">
        <div className="container">
          <div className="d-flex justify-content-around flex-column flex-md-row align-items-center align-items-md-start">
            {/* my photo */}
            <div className={classes["photo-container"] + " mx-5"}>
              <Image src={photo} alt="Yinuo's Photo" />
            </div>
            {/* description */}
            <section className="mx-5">
              <H2 color="#96b7db">{`Hi there! I'm Yinuo.`}</H2>
              <p>
                {`In the spring of 2021, I graduated from City College of New York with a Bachelor's degree in computer science and a minor in studio art. I am passionate about both design and web development. Currently, I am working as a Data Solutions Developer for the University of North Carolina at Chapel Hill, where I designed and developed web applications. `}
              </p>
              {/* contact */}
              <div className="d-flex flex-column my-5">
                <H5 color="#6686a8">{`Let's Connect!`}</H5>
                <div className="footnavItem d-flex flex-column align-items-start my-1">
                  <FootnavLink link="mailto: yinuohuang.design@gmail.com">
                    Email
                  </FootnavLink>
                </div>
                <div className="footnavItem d-flex flex-column align-items-start my-1">
                  <FootnavLink
                    link="https://www.linkedin.com/in/yinuo-huang/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </FootnavLink>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
