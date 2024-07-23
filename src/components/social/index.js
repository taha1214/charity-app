import socialEvents1 from "../../asssts/pics/socialEvents1.png.webp"
import socialEvents2 from "../../asssts/pics/socialEvents2.png.webp"
import socialEvents3 from "../../asssts/pics/socialEvents3.png.webp"

import "../arrange/Arrange.css"

const Social = () => {
    return(
        <div>
            <div className="boing">
                <p className="green">what we are boing</p>
                <h3>We Arrange Many Social Events <br/> For Charity Donations</h3>
            </div>
            <div className="Arr-boxes">
                <div className="arr-box"><img src={socialEvents1} alt="socialEvents1"></img>
                <div className="hope">
                   <h3>donation is hope</h3>
                   <p>8:30 - 9:30am &nbsp; &nbsp; &nbsp; 18.01.2021 &nbsp; &nbsp; &nbsp; Athens, Greece </p>
                </div></div>
                <div className="arr-box"><img src={socialEvents2}alt="socialEvents2"></img>
                <div className="hope">
                   <h3>a hand for children</h3>
                   <p>8:30 - 9:30am &nbsp; &nbsp; &nbsp; 18.01.2021 &nbsp; &nbsp; &nbsp; Athens, Greece </p>
                </div></div>
                <div className="arr-box"><img src={socialEvents3}alt="socialEvents3"></img>
                <div className="hope">
                   <h3>help for children</h3>
                   <p>8:30 - 9:30am &nbsp; &nbsp; &nbsp; 18.01.2021 &nbsp; &nbsp; &nbsp; Athens, Greece </p>
                </div></div>
                </div>
                <div className="Arr-boxes">
                <div className="arr-box"><img src={socialEvents1} alt="socialEvents1"></img>
                <div className="hope">
                   <h3>donation is hope</h3>
                   <p>8:30 - 9:30am &nbsp; &nbsp; &nbsp; 18.01.2021 &nbsp; &nbsp; &nbsp; Athens, Greece </p>
                </div></div>
                <div className="arr-box"><img src={socialEvents2}alt="socialEvents2"></img>
                <div className="hope">
                   <h3>a hand for children</h3>
                   <p>8:30 - 9:30am &nbsp; &nbsp; &nbsp; 18.01.2021 &nbsp; &nbsp; &nbsp; Athens, Greece </p>
                </div></div>
                <div className="arr-box"><img src={socialEvents3}alt="socialEvents3"></img>
                <div className="hope">
                   <h3>help for children</h3>
                   <p>8:30 - 9:30am &nbsp; &nbsp; &nbsp; 18.01.2021 &nbsp; &nbsp; &nbsp; Athens, Greece </p>
                </div></div>

            </div>
            </div>
    )
}
export default Social;