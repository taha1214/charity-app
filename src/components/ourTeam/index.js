import "./Team.css";
import Team1 from "../../asssts/pics/team1.png.webp"
import Team2 from "../../asssts/pics/team2.png.webp"
import Team3 from "../../asssts/pics/team3.png.webp"
import Team4 from "../../asssts/pics/team4.png.webp"



const  OurTeam = () => {
    return(
        <div className="t-container">
            <div className="t-main">
                <p className="green">what we are doing</p>
                <h3>Our Expert Volunteer<br/> Always Ready</h3>
                </div>
        <div className="t-boxes">
            <div className="t-box"><img src={Team1}alt="team member 1" ></img>
            <h3>bruce roberts</h3><p>volunteer leader</p>
            </div>
            <div className="t-box"><img src={Team2}alt="team member 2" ></img>
            <h3>robart rechard</h3><p>volunteer leader</p>
            </div>
            <div className="t-box"><img src={Team3}alt="team member 3" ></img>
            <h3>brendon tailor</h3><p>volunteer leader</p>
            </div>
            <div className="t-box"><img src={Team4}alt="team member 4" ></img>
            <h3>walshr hasgt</h3><p>volunteer leader</p>
            </div>
        </div>
        </div>
    )
}
export default OurTeam;