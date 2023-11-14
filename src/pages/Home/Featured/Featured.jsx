import Sectiontitle from "../../../Components/Sectiontitle/Sectiontitle";
import feature from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="mt-8 mb-8">
            <Sectiontitle
                heading={"Check it out"}
                subheading={" From our menu"}
            ></Sectiontitle>
            <div className="">
                <div className="">
                    <img src={feature} alt="" />
                </div>
                <div className="">
                    
                </div>
            </div>
        </div>
    );
};

export default Featured;