import { useLocation } from "react-router";
export default function TOC() {
  const { pathname } = useLocation()
    return (
      <ul className = "nav nav-pills">
        <li className="nav-item"><a id="wd-a" className="nav-link" href="#/Labs">Labs</a></li>
        <li className="nav-item"><a id="wd-a1" href="#/Labs/Lab1" className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>Lab 1</a></li>
        <li className="nav-item"><a id="wd-a2" href="#/Labs/Lab2" className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>Lab 2</a></li>
        <li className="nav-item"><a id="wd-a3" href="#/Labs/Lab3" className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>Lab 3</a></li>
        <li className="nav-item"><a id="wd-k"  className="nav-link" href="#/Kanbas">Kanbas</a></li>
        <li className="nav-item"><a id="wd-github" className="nav-link" href="https://github.com/lilyljllin/kanbas-react-web-app.git">Github Link</a></li>
      </ul>
    );
  }
  