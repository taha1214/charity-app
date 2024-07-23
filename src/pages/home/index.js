import "../../App.css";
import Main from "../../components/main/Main.js";
import Navbar from "../../components/navbar/Navbar.js";
import UpperNav from "../../components/navbar/UpperNav.js";
import Mission from "../../components/mission/mission.js";
import AboutFoundation from "../../components/aboutFoundation/index.js";
import Explore from "../../components/explore/index.js";
import Arrange from "../../components/arrange/index.js";
import OurTeam from "../../components/ourTeam/index.js";
import BecomeVolunteer from "../../components/becomeVolunteer/index.js";
import Creative from "../../components/creative/index.js";
import Blog from "../../components/blog/index.js";
import Green from "../../components/green/index.js";
import Footer from "../../components/footer/index.js";

function App() {
  return (
    <div>
      <UpperNav />
      <Navbar />
      <Main />
      <Mission />
      <AboutFoundation />
      <Explore />
      <Arrange />
      <OurTeam />
      <BecomeVolunteer />
      <Creative />
      <Blog />
      <Green />
      <Footer />
    </div>
  );
}

export default App;
