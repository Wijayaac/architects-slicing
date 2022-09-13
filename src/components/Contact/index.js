import React from "react";

import style from "./style.module.css";

const Contact = () => {
  return (
    <div className="section">
      <h2 className="section-title">Contact</h2>
      <div className={style.contact}></div>
      <p className={style.copy}>
        Lets get in touch and talk about your next project.
      </p>
      <form action="POST" className={style.form}>
        <div className={style.input}>
          <input type="text" placeholder="Name" />
        </div>
        <div className={style.input}>
          <input type="email" placeholder="Email" />
        </div>
        <div className={style.input}>
          <input type="text" placeholder="Subject" />
        </div>
        <div className={style.input}>
          <input type="text" placeholder="Comment" />
        </div>
        <button className={style.submit}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
