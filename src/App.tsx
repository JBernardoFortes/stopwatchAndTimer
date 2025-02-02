import Stopwatch from "./Components/Stopwatch.tsx";
import Timer from "./Components/Timer.tsx";
import Header from "./Components/Header.tsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./styles/styles.css";
import { motion, AnimatePresence } from "framer-motion";

const stopwatchAnimation = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
};
// Deslizar da esquerda indo pra direita

const timerAnimation = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
};
//Deslizar da direita indo pra esquerda

function AnimatedPage() {
  const location = useLocation();

  const animation =
    location.pathname == "/" ? stopwatchAnimation : timerAnimation;
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={animation.initial}
          animate={animation.animate}
          key={location.pathname}
        >
          <div className="StopwatchAndTimer">
            <Routes>
              <Route path="/" Component={Stopwatch}></Route>
              <Route path="/Timer" Component={Timer}></Route>
            </Routes>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
function App() {
  return (
    <>
      <main className="mainContainer">
        <Router>
          <Header />
          {/* <div className="StopwatchAndTimer">
            <Routes>
              <Route path="/" Component={Stopwatch}></Route>
              <Route path="/Timer" Component={Timer}></Route>
            </Routes>
          </div> */}
          <AnimatedPage></AnimatedPage>
        </Router>
      </main>
    </>
  );
}

export default App;
