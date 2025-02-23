import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaStarHalfAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { reviews } from "../assets/assets";

const CustomPrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="mr-5 absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-gradient-to-b from-blue-400 to-blue-950 text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition"
    >
        <FaArrowLeft size={20} />
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-gradient-to-b from-blue-400 to-blue-950 text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition"
    >
        <FaArrowRight size={20} />
    </button>
);

const ReviewCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className="bg-[#0c1b2d] py-12 relative">
            <h2 className="text-white text-center text-5xl font-semibold mb-10">Reviews</h2>
            <div className="w-3/4 mx-auto ">
                <Slider {...settings}>
                    {reviews.map((review) => (
                        <div key={review.id} className="px-2">
                            <div className="bg-gradient-to-r from-[#081328] to-[#122944] text-white p-6 rounded-xl flex items-center text-left">
                                {/* Image on Left */}
                                <img
                                    src={review.logo}
                                    alt={review.name}
                                    className="h-24 w-24 bg-[#011A30] rounded-full mr-6"
                                />
                                {/* Review Content on Right */}
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-lg font-semibold">{review.name}</h3>
                                    <div className="flex items-center gap-1 text-yellow-400 text-lg mt-2">
                                        {[...Array(4)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                        <FaStarHalfAlt />
                                    </div>
                                    <p className="text-sm mt-2 text-gray-300">{review.totalReviews}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ReviewCarousel;
