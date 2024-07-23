import "../../App.css";
import Footer from "../../components/footer";
import Green from "../../components/green";
import Navbar from "../../components/navbar/Navbar";
import UpperNav from "../../components/navbar/UpperNav";
import Social from "../../components/social";

const SocialEvents = () =>{
    return(
        <div>
            <UpperNav />
            <Navbar />
            <div className="about"><h1>Social Events</h1></div>
            <Green />
            <Social />
            <Footer />

        </div>
    )
}
export default SocialEvents;


