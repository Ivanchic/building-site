import Image from "next/image";
import expertise1 from "@/public/Images/expertise-1.jpg";
import expertise2 from "@/public/Images/expertise-2.jpg";
import expertise3 from "@/public/Images/expertise-3.jpg";

const expertiseData = [
  {
    id: 1,
    title:'Modern facade',
    desc: 'Sleek lines meet reflective',
    img: expertise1,
  },
   {
    id: 2,
    title:'Structural craft',
    desc: 'Sleek lines meet reflective',
    img: expertise2,
  },
   {
    id: 3,
    title:'Project lead',
    desc: 'Sleek lines meet reflective',
    img: expertise3,
  }
];
export default function Expertise  ()  {
  return (
    <>
    <div className="px-[8%] lg:px-[1] py-20 pt-30" id="expertise">
      <div className="text-center">
        <span className="text-(--text-light) text-lg uppercase Rethink">Our distinctive expertise</span>
        <h2 className="text-4xl lg:text-7xl text-white Rethink font-bold mt-5">
          Designing and shaping unique spaces
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-1.5 gap-8 pt-10">
        {expertiseData.map((item) => (
          <div key={item.id} className="border border-gray-200/20 rounded-md text-center group p-6 overflow-hidden cursor-pointer">
            <h3 className="text-2xl Rethink font-semibold">{item.title}</h3>

            <p className="text-gray-50 DmSans mb-5">{item.desc}</p>

            <div className="overflow-hidden rounded mb-5">
              <Image 
              src={item.img} 
              alt='expertise img'
              className="mx-auto rounded transition-ttransform duration-500 ease-out group-hover:scale-110"
              />
            </div>

            <button className="Rethink font-medium text-lg cursor-pointer flex justify-center items-center w-full gap-2 border py-3 border-gray-200/20 hover:bg-gray-200/20 transition-all duration-300">
            Learn more <i className="bi bi-arrow-right"></i></button>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
