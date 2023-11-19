import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import ChefService from "../ChefService/ChefService";
import Featured from "../Featured/Featured";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Catagory/>
            <ChefService/>
            <PopulerMenu/>
            <Featured/>
            <Testimonial/>
        </div>
    );
};

export default Home;