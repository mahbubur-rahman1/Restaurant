import Sectiontitle from "../../../Components/Sectiontitle/Sectiontitle";
import feature from '../../../assets/home/featured.jpg'
import './Feature.css'

const Featured = () => {
    return (
        <div className="mt-8 mb-8 feature bg-fixed pt-8">
            <Sectiontitle
            
                heading={"Check it out"}
                subheading={" From our menu"}
            ></Sectiontitle>
            <div className="grid md:grid-cols-2 bg-gray-500 bg-opacity-30 justify-center items-center pb-20 px-36 pt-12 text-white">
                <div className="">
                    <img className="h-100 w-full" src={feature} alt="" />
                </div>
                <div className="ml-6">
                    <h6 className="text-2xl">March 20, 2023</h6>
                    <h6 className="text-2xl">WHERE CAN I GET SOME?</h6>
                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque facilis dolores laborum assumenda cupiditate quos porro libero quisquam! Dignissimos dolorem fugit delectus vitae natus!</p>
                    <button className="btn btn-outline border-0 border-b-2  bg-white text-black border-black bg-opacity-70 mt-2">Order Now</button>

                </div>
            </div>
        </div>
    );
};

export default Featured;