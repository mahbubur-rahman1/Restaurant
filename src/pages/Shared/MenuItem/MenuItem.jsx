

const MenuItem = ({ item }) => {
    const { image, recipe, name, price, } = item;
    return (
        <div className="">
            <div className="md:grid-cols-2">
                <div className="flex gap-4">
                    <img style={{ borderRadius: '0 200px 200px 200px ' }} className="w-[100px]" src={image} alt="" />
                    <div className="">
                        <h3 className="">{name}------------</h3>
                        <p className="">{recipe}</p>
                    </div>
                    <p className="text-yellow-600">{price}</p>
                </div>
            </div>
            
        </div>
    );
};

export default MenuItem;