import Donation_part from "./Donation_part";
import Pay_by_card from "./Pay_by_card";
import Card_data from "./Card_data";

const Right_side = () => {

    return (
        <div className="w-1/2 p-[42px] flex flex-col items-center">
            <div className="inline justify-center items-center">
                <Donation_part/>
                <Pay_by_card/>
                <Card_data/>
            </div>
        </div>
    );
}

export default Right_side;