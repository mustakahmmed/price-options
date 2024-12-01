import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const gymPriceOptions = [
        {
          id: 1,
          name: "Basic Membership",
          price: 20,
          currency: "USD",
          duration: "1 Month",
          features: ["Access to gym equipment", "Locker facility"]
        },
        {
          id: 2,
          name: "Standard Membership",
          price: 50,
          currency: "USD",
          duration: "3 Months",
          features: ["Access to gym equipment", "Locker facility", "Free group classes"]
        },
        {
          id: 3,
          name: "Premium Membership",
          price: 180,
          currency: "USD",
          duration: "1 Year",
          features: ["Access to gym equipment", "Locker facility", "Free group classes", "Personal training sessions", "Sauna access"]
        }
      ];
      
    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-10">Best Price Options In Town</h1>
            <div className="grid  md:grid-cols-3 gap-5">
                {
                    gymPriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;