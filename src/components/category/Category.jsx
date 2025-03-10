import { useNavigate } from "react-router";
import { Link } from 'react-router-dom'
// category
const category = [
  {
    image: "https://cdn-icons-png.flaticon.com/128/2935/2935307.png",
    name: "Latte",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/7120/7120479.png",
    name: "Americano",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/1102/1102965.png",
    name: "Cappuccino",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/17453/17453923.png",
    name: "Affogato",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/2391/2391701.png",
    name: "espresso",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/15614/15614738.png",
    name: "Flat white",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/1223/1223036.png",
    name: "mocha",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/1956/1956533.png",
    name: "cortado",
  },
];

const Category = () => {
  // naviaget
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative w-full h-full">
        <div className="absolute flex flex-col items-center text-white p-4">
          <h1 className="text-4xl lg:text-7xl font-bold lg:ml-3 pl-15 pb-4 lg:pb-8 mt-25 lg:mt-40 font-[Dancing_Script]">
            Coffee is a hug in a mug
          </h1>
          <h1 className=" text-2xl lg:text-4xl font-bold mb-4 font-[Dancing_Script]">
            Start Ordering....
          </h1>
          <Link className=' px-6 py-2 font-[Dancing_Script] bg-orange-700 hover:bg-gray-500 text-white rounded-lg text-2xl' to={'/login'}>Login</Link>
          
        </div>
        <img
          className="h-full w-full lg:h-full"
          src="https://static.india.com/wp-content/uploads/2014/10/coffee.jpg"
          alt="Coffee"
        />
      </div>

      <div className="flex flex-col mt-5">
        {/* main 1 */}
        <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
          {/* main 2  */}
          <div className="flex ">
            {/* category  */}
            {category.map((item, index) => {
              return (
                <div key={index} className="px-3 lg:px-10">
                  {/* Image  */}
                  <div
                    onClick={() => navigate(`/category/${item.name}`)}
                    className=" w-20 h-20 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-red-200 transition-all hover:bg-pink-400 cursor-pointer mb-1 "
                  >
                    <div className="flex justify-center mb-12">
                      {/* Image tag  */}
                      <img src={item.image} alt="img" />
                    </div>
                  </div>

                  {/* Name Text  */}
                  <h1 className=" text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase ">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* style  */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n",
        }}
      />
    </div>
  );
};

export default Category;
