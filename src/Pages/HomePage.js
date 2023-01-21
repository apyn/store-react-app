import Categpry from "../Components/Categpry/Category";
import Slider from "../Components/Slider/Slider";
import OffSlider from "../Components/Slider/OffSlider";
import BlogSlider from "../Components/Slider/BlogSlider";


const HomePage = () => {
    return (  
        <div>
            <Slider/>
            <Categpry/>
            <OffSlider/>
            <BlogSlider/>
        </div>
    );
}
 
export default HomePage;
