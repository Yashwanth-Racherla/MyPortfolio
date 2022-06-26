import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Counter from "../components/Counter";
// import Freelance from "../components/Freelance";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="section hero-section">
        <div className="container text-center md:text-left flex-box">
          <div className="md:w-1/2">
            <span className="text-[#8490ff] font-bold">THIS IS ME</span>
            <h1 className="mb-6 xl:mb-14">YASHWANTH RACHERLA</h1>
            <p className="mb-6 xl:mb-14 max-w-[700px]">
              I'm Yashwanth Racherla. A Front End Developer and freelancer.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ad
              veritatis consequatur tenetur quod rem omnis, doloribus, cum,
              tempora nihil minima in minus accusamus deleniti vitae aut
              officiis porro dolore!
            </p>
            <button className="button">HIRE ME</button>
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
      {/* <Freelance /> */}

      <Contact />
    </>
  );
};

export default Home;
