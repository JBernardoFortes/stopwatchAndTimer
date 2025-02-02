import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const Header = () => {
  const location = useLocation();
  const [header, setHeader] = useState("");

  useEffect(() => {
    setHeader(location.pathname);
  }, [location.pathname]);
  return (
    <div className="Header">
      <Link className={`link ${header == "/" ? "active" : ""}`} to="/">
        <span>Stopwatch</span>
      </Link>
      <Link
        className={`link ${header == "/Timer" ? "active" : ""}`}
        to="/Timer"
      >
        {" "}
        <span>Timer</span>{" "}
      </Link>
    </div>
  );
};

export default Header;
