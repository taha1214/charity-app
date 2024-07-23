import "../../App.css";
import ExploreThings from "../../components/exploreThings";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar/Navbar";
import UpperNav from "../../components/navbar/UpperNav";

const Latest = () =>{
    return(
        <div>
            <UpperNav />
            <Navbar />
            <div className="about"><h1>Latest Cause</h1></div>
            <ExploreThings />
            <Footer />
        </div>
    )
}
export default Latest;


