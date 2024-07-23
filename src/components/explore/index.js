
import "./Explore.css";
import case1 from "../../asssts/pics/case1.png.webp";
import case2 from "../../asssts/pics/case2.png.webp";
import case3 from "../../asssts/pics/case3.png.webp";
import { Progress } from 'antd';


const Explore = () => {
    return(
        <div  className="e-container">
            <div className="e-para">
                <p className="green">our cases you can see</p>
                <h3>Explore Our Latest Causes<br/> That We Works</h3>
            </div>
            <div className="case-boxes">
                <div className="e-box"><img src={case1}alt="cas1"></img>
                <p>ensure education for every<br/> poor child</p>
                <Progress percent={70} size="small" />
                <span>raised: $20,000</span><span style={{ marginLeft: '70px' }}>goal: $35,000</span>
                </div>
                <div className="e-box"><img src={case2}alt="cas2"></img>
                <p>providing healthy food for every <br/> children</p>
                <Progress percent={25} size="small" />
                <span>raised: $20,000</span><span style={{ marginLeft: '70px' }}>goal: $35,000</span>
                </div>
                <div className="e-box"><img src={case3}alt="cas3"></img>
                <p>supply drinking water for the <br/> people</p>
                <Progress percent={50} size="small" />
                <span>raised: $20,000</span><span style={{ marginLeft: '70px' }}>goal: $35,000</span>
                 </div>

            </div>
        </div>


    )
}
export default Explore;