import "../../App.css";
import AboutFoundation from "../../components/aboutFoundation";
import BecomeVolunteer from "../../components/becomeVolunteer";
import Creative from "../../components/creative";
import Footer from "../../components/footer";
import Green from "../../components/green";
import Mission from "../../components/mission/mission";
import Navbar from "../../components/navbar/Navbar";
import UpperNav from "../../components/navbar/UpperNav";

const About = () =>{
    return(
        <div>
            <UpperNav />
            <Navbar />
            <div className="about"><h1>About Us</h1></div>
            <Mission />
            <AboutFoundation />
            <BecomeVolunteer />
            <Creative />
            <Green />
            <Footer />

        </div>
    )
}
export default About;