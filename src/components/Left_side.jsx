import Jar from "./Jar";
import Jar_info from "./Jar_info";
import Raised_money from "./Raised_money";

const Left_side = () => {

    return (
        <div className="w-1/2 p-[42px] flex flex-col items-center bg-[#f3f4f6]">
            <img src="https://send.monobank.ua/img/logo_short.png" className="mb-[32px]" ></img>
            <Jar/>
            <Jar_info/>
            <Raised_money/>
        </div>
    );
}

export default Left_side;