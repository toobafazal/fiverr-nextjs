import React from 'react'
import imgSlider from "../../../../public/img/slider.png";
import Image from "next/image";

const SliderContent = () => {
    const data = [
        {
            id: 1,
            img: imgSlider,
            title1: "Laminát antracit",
            subtitle: "Dekor dveří",
            title2: "Alumi Vertik",
            subtitle2: "Model dveří",
            para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et amet dolore magna.",
            head: "Hotel Restart, Jičín",
            line: "Petr Novák, jednatel společnosti",
        },
        // {
        //     id: 2,
        //     img: imgSlider,
        //     title1: "Laminát antracit",
        //     subtitle: "Dekor dveří",
        //     title2: "Alumi Vertik",
        //     subtitle2: "Model dveří",
        //     para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et amet dolore magna.",
        //     head: "Hotel Restart, Jičín",
        //     line: "Petr Novák, jednatel společnosti",
        // },
        // {
        //     id: 3,
        //     img: imgSlider,
        //     title1: "Laminát antracit",
        //     subtitle: "Dekor dveří",
        //     title2: "Alumi Vertik",
        //     subtitle2: "Model dveří",
        //     para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et amet dolore magna.",
        //     head: "Hotel Restart, Jičín",
        //     line: "Petr Novák, jednatel společnosti",
        // },
        // {
        //     id: 1,
        //     img: imgSlider,
        //     title1: "Laminát antracit",
        //     subtitle: "Dekor dveří",
        //     title2: "Alumi Vertik",
        //     subtitle2: "Model dveří",
        //     para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et amet dolore magna.",
        //     head: "Hotel Restart, Jičín",
        //     line: "Petr Novák, jednatel společnosti",
        // },
        // {
        //     id: 1,
        //     img: imgSlider,
        //     title1: "Laminát antracit",
        //     subtitle: "Dekor dveří",
        //     title2: "Alumi Vertik",
        //     subtitle2: "Model dveří",
        //     para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et amet dolore magna.",
        //     head: "Hotel Restart, Jičín",
        //     line: "Petr Novák, jednatel společnosti",
        // },
        // {
        //     id: 1,
        //     img: imgSlider,
        //     title1: "Laminát antracit",
        //     subtitle: "Dekor dveří",
        //     title2: "Alumi Vertik",
        //     subtitle2: "Model dveří",
        //     para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et amet dolore magna.",
        //     head: "Hotel Restart, Jičín",
        //     line: "Petr Novák, jednatel společnosti",
        // },
        // {
        //     id: 1,
        //     img: imgSlider,
        //     title1: "Laminát antracit",
        //     subtitle: "Dekor dveří",
        //     title2: "Alumi Vertik",
        //     subtitle2: "Model dveří",
        //     para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et amet dolore magna.",
        //     head: "Hotel Restart, Jičín",
        //     line: "Petr Novák, jednatel společnosti",
        // },
    ];
    return (
        <div>
            {data.map((dt) => (
                <div key={dt.id} className="no-flex lg:flex justify-center items-center overscroll-x-none">
                    <div className="w-full lg:w-2/3 mr-20">
                        <Image src={dt.img} alt="slider img" height={1000} width={1000} />
                    </div>
                    <div className="w-full lg:w-1/3 ">
                        <h3 className="font-extrabold text-md">{dt.title1}</h3>
                        <p  className="uppercase text-sm text-sea-green font-semibold">{dt.subtitle}</p>
                        <h3 className="font-extrabold text-md mt-2">{dt.title2}</h3>
                        <p  className="uppercase text-sm text-sea-green font-semibold">{dt.subtitle2}</p>
                        <div className="border-b-2 border-sea-green my-4"></div>
                        <h3 className="font-extrabold ">{dt.head}</h3>
                        <p className="text-sm font-medium text-gray-700 my-2">
                            {dt.para}
                        </p>
                        <h3 className="font-extrabold text-sm my-2">{dt.line}</h3>
                        <button className=" py-2 text-sea-green font-semibold">
                            Více fotografií
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SliderContent