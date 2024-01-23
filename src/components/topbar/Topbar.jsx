import "./Topbar.css";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from '@mui/icons-material/Menu';

export default function Topbar() {
  return (
    <div id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Hitish{" "}
          </a>

          <div className="items">
            <PersonIcon />
            <a className="icons" href="9019205231">
              9019205231
            </a>
            <EmailIcon />
            <a href="hitishraop@gmail.com" className="icons">
              hitishraop@gmail.com
            </a>
          </div>
        </div>

        <div className="right">
          <div className="hamburger">
                <MenuIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
