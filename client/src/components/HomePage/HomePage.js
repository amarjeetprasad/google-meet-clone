import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import shortid from "shortid";
import "./HomePage.scss";
import Header from "../UI/Header/Header";
import { useState } from "react";

const HomePage = () => {
  const history = useHistory();

  const startCall = () => {
    const uid = shortid.generate();
    history.push(`/${uid}#init`);
  };

  const [code,setCode]=useState("http://localhost:3000/");

  function meetingCodeHandle(e)
  {
    setCode(e.target.value);
  }

  return (
    <div className="home-page">
      <Header />
      <div className="body">
        <div className="left-side">
          <div className="content">
            <h2>Premium video meetings. Now free for everyone.</h2>
            <p>
              We re-engineered the service we built for secure business
              meetings, Google Meet, to make it free and available for all.
            </p>
            <div className="action-btn">
              <button className="btn green" onClick={startCall}>
                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                New Meeting
              </button>
              <div className="input-block">
                <div className="input-section">
                  <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                  <input placeholder="Enter a code or link" onChange={meetingCodeHandle}/>
                </div>
                <a href={code} className="btn no-bg">Join</a>
              </div>
            </div>
          </div>
          <div className="help-text">
            <a href="https://support.google.com/meet/?hl=en" target="_blank" rel="noreferrer">Learn more</a> about Google Meet
          </div>
        </div>
        <div className="right-side">
          <div className="content">
            <img src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg" alt="meet-pic" />
            <h3>Get a link you can share</h3>
            <p>Click <strong>New meeting</strong> to get a link you can send to people you want in meet with.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
