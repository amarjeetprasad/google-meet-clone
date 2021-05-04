import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import {formatDate} from "../../../utils/helpers"
import './Header.scss';
import {useState,useEffect} from "react"

const Header = () => {
  let interval = null;
  const [currentTime, setCurrentTime] = useState(() => {
    return formatDate();
  });

  useEffect(() => {
    interval = setInterval(() => setCurrentTime(formatDate()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let date=days[new Date().getDay()]+","+months[new Date().getMonth()]+" "+String(new Date().getDate());

  return (
    <div className="header">
      <div className="logo">
        <img src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_2x_icon_124_40_292e71bcb52a56e2a9005164118f183b.png" alt="" />
        <span className="help-text">Meet</span>
      </div>
      <div className="action-btn">
        <p className="icon-block" >{currentTime} {date}</p>
        <a href="https://support.google.com/meet/?hl=en#topic=7306097" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} />
        </a>
        <FontAwesomeIcon className="icon-block" icon={faExclamationCircle} />
        <FontAwesomeIcon className="icon-block" icon={faCog} />
        <div className="header-items icon-block">
        <FontAwesomeIcon className="icon profile" icon={faUserCircle} />
      </div>
      </div>
    </div>
  );
};
export default Header;
