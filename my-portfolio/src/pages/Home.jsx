import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Counter from "../components/Counter";
import Freelance from "../components/Freelance";
import Contact from "./Contact";

const Home = () => {
  const scrollToContact = () => {
    document.querySelector(".contact-section").scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="section hero-section">
        <div className="container text-center md:text-left flex-box">
          <div className="md:w-1/2">
            <span className="text-[#8490ff] font-bold">THIS IS ME</span>
            <h1 className="mb-6 xl:mb-14">YASHWANTH RACHERLA</h1>
            <p className="mb-6 xl:mb-14 max-w-[700px]">
              I'm Yashwanth Racherla, A Front End Developer and Freelancer
              having 5 years of Experience as Web Developer using front end
              technologies HTML, CSS and JavaScript.
            </p>
            <button className="button" onClick={() => scrollToContact()}>
              HIRE ME
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              className="hero-image"
              src="./hero-section-image.jpg"
              alt="hero-img"
            />
          </div>
        </div>
      </div>
      <About />
      <Portfolio />
      <Counter />
      <Services />
      <Freelance scroll={scrollToContact} />
      <Contact />
    </>
  );
};

export default Home;
