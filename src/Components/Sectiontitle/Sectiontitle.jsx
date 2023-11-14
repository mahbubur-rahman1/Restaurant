
const Sectiontitle = ({ heading, subheading, }) => {
    return (
        <div className="md:w-4/12 mx-auto">
            <div className="text-center">
                <p className="text-yellow-600 mb-2 ">---{heading}---</p>
                <p className="border-y-4 text-4xl py-1">{subheading}</p>
            </div>
        </div>
    );
};

export default Sectiontitle;