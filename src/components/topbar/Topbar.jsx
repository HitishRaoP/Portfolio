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
            <div  className="icons" id="phone">
            <PersonIcon />
            <a href="9019205231">
              9019205231
            </a>
            </div>

            <div className="icons" id="email">
            <EmailIcon />
            <a href="hitishraop@gmail.com" >
              hitishraop@gmail.com
            </a>
            </div>
            
            
          </div>
        </div>

        <div className="right">
       
          <button className="hamburger">
            <MenuIcon /></button>
        </div>
      </div>
    </div>
  );
}
