import React from "react";

const Contact = () => {
  return (
    <div className="section contact-section">
      <div className="container">
        <div className="section-title">Contact Us</div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.8017808974623!2d79.59176981521178!3d17.98795678993959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3345109ffb0615%3A0x302552dd74b8e67b!2sPhatak%20St%2C%20Sherpura%2C%20Warangal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1656259333118!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="warangal"
          className="w-full"
        ></iframe>

        <form
          action="https://formspree.io/f/xeqnwrvq"
          method="POST"
          className="flex flex-col gap-6"
        >
          <div className=" grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="username" />
              <input
                type="text"
                name="username"
                id="text"
                placeholder="Username"
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="email" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="abc@xyz.com"
                required
                autoComplete="off"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor="message" />
            <textarea
              name="message"
              id="message"
              cols="3"
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>

          <div>
            <label htmlFor="submit"></label>
            <input
              className="button"
              type="submit"
              id="submit"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
