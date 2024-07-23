import "./Blog.css"
import HomeBlog1 from "../../asssts/pics/home-blog1.png.webp"
import HomeBlog2 from "../../asssts/pics/home-blog2.png.webp"



const Blog = () => {
    return(
        <div className="blog-container">
            <div className="blog-heading">
                <p className="green">our recent blog</p><br/>
                <h3>latest news from our<br/> new blogs</h3>
            </div>
            <div className="blog-pics">
                <div><img src={HomeBlog1} alt="home blog 1"></img><br/>
                <p>creative director</p><br/>
                <h3>footprints in time is perfect<br/> house in kurashiki</h3>
                </div>
                <div><img src={HomeBlog2} alt="home blog 2"></img><br/>
                <p>creative director</p><br/>
                <h3>footprints in time is perfect<br/> house in kurashiki</h3></div>
            </div>
        </div>
    )
}
export default Blog;