import { FaCheckCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const PriceOption = ({option}) => {
    const{name,price,features} = option
    return (
        <div className="bg-blue-300 m-5 p-6 text-center mb-5 rounded-xl flex flex-col">
            <p>
                <span className="text-8xl font-extrabold">{price}</span>
                <span className="text-3xl font-bold">/Month</span>
            </p>
            <h1 className="text-3xl my-8">{name}</h1>
            <div className="text-center mb-7 ml-7 flex-grow ">
                {
                    features.map((fetur,idx) => <ul key={idx} className="flex items-center justify-start"><FaCheckCircle className=" mr-3"></FaCheckCircle>{fetur}</ul>)
                }
            </div>
            <button className="bg-green-600 w-full text-xl text-white font-bold py-4 rounded-xl hover:bg-green-700">Buy Now</button>
        </div>
    );
};
PriceOption.propTypes={
    option:PropTypes.object
}
export default PriceOption;