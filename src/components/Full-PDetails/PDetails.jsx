import { useContext, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useLoaderData, useParams } from "react-router-dom";
import { IoMdStarOutline, IoMdStar, IoMdStarHalf } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import { userData } from "../contexts/Contexts";

function PDetails() {
  const param = useParams();
  //   const data = useLoaderData();
  const [data, setData] = useState(useLoaderData());
  const pList = data.filter(
    (category) => category.category_name == param.categoryName
  );
  const mainData = pList[0].products.filter(
    (data) => data.product_id === param.id
  );
  const {
    product_title,
    product_image,
    price,
    // category,
    description,
    specification,
    availability,
    rating,
  } = mainData[0];

  // context api
  const userDatas = useContext(userData);
  const { wishlist, updateOrGetCart, updateOrGetWishlist, countPrice } =
    userDatas;

  // cart button on click
  const addToCart = () => {
    updateOrGetCart(mainData[0]);
    countPrice(price);
  };

  // add data to the wishlist
  const addToWishlist = () => {
    updateOrGetWishlist(mainData[0]);
  };

  /**
   * checking the wishlist
   * if the item exist in the list
   * them the wishlist button will be disabled
   * else it will be normal
   * */
  const [found, setFound] = useState(false);
  useEffect(() => {
    if (wishlist.length != 0) {
      wishlist.map((data) => {
        if (data.product_id === mainData[0].product_id) {
          console.log("found");
          setFound(true);
        } else {
          setFound(false);
        }
      });
    }
  }, [wishlist]);

  return (
    <>
      {/* dashboard section header */}
      <div className="relative mb-96">
        <div className="text-center bg-primaryColor text-white pt-8 space-y-4 pb-72">
          <h1 className="text-3xl font-bold">Product Details</h1>
          <p className="w-3/6 mx-auto text-gray-200">
            Introducing <span className="font-bold"> {product_title}</span> , a
            revolutionary gadget crafted to meet your every need. Whether
            it&apos;s productivity, entertainment, or staying connected,{" "}
            <span className="font-bold"> {product_title}</span> adapts
            seamlessly to your lifestyle. With advanced features and sleek
            design, this device is perfect for enhancing your everyday
            experiences. Be it work, play, or beyond—
            <span className="font-bold"> {product_title}</span> ensures
            you&apos;re always at your best.
          </p>
        </div>
        {/* product details */}
        <div className="center w-4/6 bg-white shadow-md rounded-xl -translate-x-1/2 grid grid-cols-12 gap-4 p-8 absolute top-1/2 left-1/2">
          {/* product image */}
          <div className="col-span-6 flex justify-center items-center bg-purple-50 rounded-2xl">
            <img
              className="aspect-video object-cover"
              src={product_image}
              alt={`demo image of ${product_title}`}
            />
          </div>
          <div className="col-span-6 space-y-4">
            <h1 className="text-2xl font-bold">{product_title}</h1>
            <p className="font-medium text-lg">Price: {price}</p>

            {/* stock details */}
            <div>
              <button
                className={`px-6 py-1  border-[1px] text-xs  ${
                  availability
                    ? "bg-stockButtonColor border-green-400"
                    : "bg-red-100 border-red-300"
                } rounded-full`}
              >
                {availability ? "In Stock" : "Out of S tock"}
              </button>
            </div>

            {/* product description */}
            <p className="text-paraColor">{description}</p>

            {/* product specification */}
            <div>
              <h1 className="text-lg font-bold mb-3">Specification:</h1>
              <ol className="list-decimal">
                {specification.map((specification, idx) => (
                  <li className="ml-6 text-paraColor" key={idx}>
                    {specification}
                  </li>
                ))}
              </ol>
            </div>
            {/* product rating */}
            <div>
              <h1>Rating</h1>
              <div className="flex gap-2 items-center">
                <ReactStars
                  count={5}
                  // onChange={ratingChanged}
                  size={24}
                  value={rating}
                  isHalf={true}
                  emptyIcon={<IoMdStarOutline />}
                  halfIcon={<IoMdStarHalf />}
                  fullIcon={<IoMdStar />}
                  activeColor="#ffd700"
                />
                <span className="px-2 py-[3px] bg-gray-200 rounded-full text-xs">
                  {rating}
                </span>
              </div>
            </div>
            {/* buttons */}
            <div className="flex items-center  gap-4">
              <button
                className="flex items-center justify-center gap-3 btn bg-primaryColor rounded-full hover:bg-transparent hover:text-primaryColor hover:border-primaryColor text-white"
                onClick={addToCart}
              >
                Add To Cart <FaOpencart />
              </button>
              <button
                disabled={found ? true : false}
                onClick={addToWishlist}
                className="btn  btn-circle text-2xl bg-transparent border-paraColor hover:bg-pink-500 hover:text-white hover:border-none"
              >
                <CiHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PDetails;
