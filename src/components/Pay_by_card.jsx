const Pay_by_card = () => {

    return (
        <div className="flex flex-col w-full max-w-[340px]">
            <hr id="hideHr" className="mb-[8px] border-[#A0A0A0] w-[340px] mt-[24px] ml-[32px]"/>

            <div className="flex justify-center pt-[8px] w-full leading-[24px] rounded-[8px] ml-[32px]">
                <img src="https://send.monobank.ua/img/card.svg" className="w-[16px] h-[26px] mr-[8px]"/>
                <label className="text-[14px] text-[#e85e5b] font-semibold leading-[24px] cursor-pointer text-center">Оплатити карткою</label>
            </div>
        </div>
    );
}

export default Pay_by_card;