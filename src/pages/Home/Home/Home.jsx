import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import Featured from "../Featured/Featured";
import PopulerMenu from "../PopulerMenu/PopulerMenu";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Catagory/>
            <PopulerMenu/>
            <Featured/>
        </div>
    );
};

export default Home;