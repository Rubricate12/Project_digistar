import aboutImage from "../assets/heroimg2.jpg";

const About = () => {
  return (
    <section className="about-section pt-5 pb-5" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="mb-5 mt-5">
            <h2 className="section-title text-center">ABOUT</h2>
          </div>
          <div className="col-lg-6 mb-3 mb-lg-0">
            <img
              src={aboutImage}
              alt="Descriptive Alt Text"
              className="img-fluid"
            />
          </div>

          <div className="col-lg-6">
            <p className="section-subtitle">WHO WE ARE ?</p>
            <div className="about-content">
              <p>
                We are at the forefront of offering sophisticated real-life tracking with our location tracker. Focusing on quality and innovation, we provide technologies that provide real-time,
                useful information for both individuals and enterprises.
              </p>
              <p>
                Our comprehensive tracking services are designed to enhance
                operational efficiency, ensure security, and improve overall
                asset management. Trust in our technology to provide the
                insights and oversight necessary for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
