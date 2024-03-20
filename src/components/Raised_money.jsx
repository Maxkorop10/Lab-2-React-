const Raised_money = () => {

    return (
        <div className="mt-[16px] flex bg-[#fff] rounded-[16px]">
            <div className="flex gap-[12px] px-[20px] py-[0] mx-[0] my-[12px] border-r border-r-gray-300">
                <img src="https://send.monobank.ua/img/collected.svg" className=""></img>
                <div>
                    <div className="font-normal text-[14px] leading-[17px] text-[#808080]">Накопичено</div>
                    <div id="current-wallet" className="font-medium text-[16px] leading-[24px] text-[#000]">7&nbsp;700&nbsp;₴</div>
                </div>
            </div>

            <div className="flex gap-[12px] px-[20px] py-[0] mx-[0] my-[12px]">
                <img src="https://send.monobank.ua/img/target.svg" className=""></img>
                <div>
                    <div className="font-normal text-[14px] leading-[17px] text-[#808080]">Ціль</div>
                    <div id="current-wallet" className="font-medium text-[16px] leading-[24px] text-[#000]">25&nbsp;000&nbsp;₴</div>
                </div>
            </div>

        </div>
    );
}

export default Raised_money;