import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
// import Contact from "./Contact";

const Home = () => {
  const counterNum = document.querySelectorAll(".counter-number");

  counterNum.forEach((currElem) => {
    const updateCounter = () => {
      const targetNum = parseInt(currElem.dataset.number);
      const initialNum = parseInt(currElem.innerText);
      const speed = 200;
      const incrementNum = targetNum / speed;

      if (initialNum < targetNum) {
        currElem.innerText = initialNum + incrementNum;
        setTimeout(updateCounter, 10);
      }
    };
    updateCounter();
  });

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
      <Services />
      <Portfolio />

      <div className="section counter-section">
        <div className="container text-white grid grid-cols-2 lg:grid-cols-4 gap-10 lg:py-10">
          <div className="text-center">
            <span className="counter-number" data-number="2000">
              0
            </span>
            <p className="mt-4">Projects Completed</p>
          </div>
          <div className="text-center">
            <span className="counter-number" data-number="6000">
              0
            </span>
            <p className="mt-4">Happy Clients</p>
          </div>
          <div className="text-center">
            <span className="counter-number" data-number="5000">
              0
            </span>
            <p className="mt-4">Cups of Coffee</p>
          </div>
          <div className="text-center">
            <span className="counter-number" data-number="3000">
              0
            </span>
            <p className="mt-4">Real Professionals</p>
          </div>
        </div>
      </div>

      {/* <Contact /> */}
    </>
  );
};

export default Home;
