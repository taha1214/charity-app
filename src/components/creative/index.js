import "./Creative.css";
import Testimonial from "../../asssts/pics/testimonial.png.webp"


const Creative = () => {
    return(
        <div className="c-container">
            <div className="c-main">
                <img src={Testimonial} alt="creative"></img><br/>
                <h3>margaret lawson</h3>
                <p>creative director</p><br/>
                <p className="para">"i am at an age where i just want to be fit and healthy our bodies
                    are our responsibility! so start caring for your body and it will
                    care for you. eat clean it will care for you  and workout hard."
                </p>
            </div>
        </div>
    )
}
export default Creative;