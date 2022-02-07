import { ReactComponent as LightLogo } from "./light.svg";
import { ReactComponent as DarkLogo } from "./dark.svg";
import { ReactComponent as HorizontalLogo } from "./horizontal.svg";
import light3 from "./7.png";
// import LogoTemp from "logoTemp.css";
const Logo = ({ size, type }) => {
  const logos = {
    // light: <LightLogo />,
    // dark: <DarkLogo />,
    // horizontal: <HorizontalLogo />,
  };
  // return <img src={light3} alt="light3" />;
  // return <div>{logos[type]}</div>;
  return (
    <div>
      <h3
        style={{
          color: "var(--darkerOrange)",
          marginLeft: "60px",
          marginTop: "25px",
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >
        LOGO
      </h3>
    </div>
  );
};

export default Logo;
