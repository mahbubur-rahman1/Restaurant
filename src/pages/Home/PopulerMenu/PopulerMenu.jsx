import { useEffect, useState } from "react";
import Sectiontitle from "../../../Components/Sectiontitle/Sectiontitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopulerMenu = () => {
     const [menu , setMenu] = useState([])
     useEffect( () => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const populerItems = data.filter(item => item.category === 'popular');
            setMenu(populerItems)} )
     }, [])

    return (
        <div>
            <section className="mb-10">
                <Sectiontitle
                heading={"Check Out"}
                subheading={"Populer Item"}
                ></Sectiontitle>

                <div className="mt-8 grid md:grid-cols-2 gap-5">
                    {
                        menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                        ></MenuItem>)
                    }
                </div>
            </section>
        </div>
    );
};

export default PopulerMenu;