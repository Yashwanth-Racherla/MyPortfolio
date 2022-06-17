import React from "react";

const Footer = () => {
  return (
    <div className="section footer-section">
      <div className="footer-content container">
        <div className="w-full md:w-1/2 lg:w-1/4 pr-10">
          <h4>About</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum culpa
            iusto, ad tempore earum, fugiat sed dignissimos perferendis
            praesentium reiciendis itaque velit quo, quis consequatur assumenda
            consequuntur doloribus nisi aut.
          </p>
        </div>
        <div className="w-1/2 lg:w-1/4">
          <h4>Links</h4>
          <ul>
            <li>
              <ion-icon name="arrow-forward-outline"></ion-icon>
              <p>Home</p>
            </li>
            <li>
              <ion-icon name="arrow-forward-outline"></ion-icon>
              <p>About</p>
            </li>
            <li>
              <ion-icon name="arrow-forward-outline"></ion-icon>
              <p>Services</p>
            </li>
            <li>
              <ion-icon name="arrow-forward-outline"></ion-icon>
              <p>Portfolio</p>
            </li>
            <li>
              <ion-icon name="arrow-forward-outline"></ion-icon>
              <p>Contact</p>
            </li>
          </ul>
        </div>
        <div className="w-1/2 lg:w-1/4">
          <h4>Services</h4>
          <ul>
            <li>
              <ion-icon name="arrow-forward-outline"></ion-icon>
              <p>Web Development</p>
            </li>
            <li>
              <ion-icon name="arrow-forward-outline"></ion-icon>
              <p>HTML</p>
            </li>
            <li>
              <ion-icon name="arrow-forward-outline"></ion-icon>
              <p>CSS</p>
            </li>
            <li>
              <ion-icon name="arrow-forward-outline"></ion-icon>
              <p>Javascript</p>
            </li>
            <li>
              <ion-icon name="arrow-forward-outline"></ion-icon>
              <p>React</p>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h4>Have a question</h4>
          <ul>
            <li>
              <ion-icon name="location-outline"></ion-icon>
              <p>Warangal, Telangana, India</p>
            </li>
            <li>
              <ion-icon name="call-outline"></ion-icon>
              <p>+91 8686384984</p>
            </li>
            <li>
              <ion-icon name="mail-outline"></ion-icon>
              <p>ignitingyash@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-white flex justify-center items-center gap-4 my-10">
        <ion-icon class="icon footer-icon" name="logo-facebook"></ion-icon>

        <ion-icon class="icon footer-icon" name="logo-instagram"></ion-icon>

        <ion-icon class="icon footer-icon" name="logo-youtube"></ion-icon>
      </div>

      <p className="text-white text-center text-xs md:text-sm  xl:text-base py-2">
        Copyright ©2022 All rights reserved | This template is made with ❤ by
        Yashwanth Racherla
      </p>
    </div>
  );
};

export default Footer;
