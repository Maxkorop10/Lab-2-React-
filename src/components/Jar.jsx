const Jar = () => {

    return (
        <div className="relative text-center">
            <img src="https://send.monobank.ua/img/jar_bg.png" className="w-[215px] h-[215px] mb-[20px] ml-[10px]"></img>
            <img src="https://send.monobank.ua/img/jar/uah_50.png" className="h-[203px] w-[155px] left-[35px] top-[10px] absolute"></img>

            <div className="absolute top-[26px] left-[13px] ml-[35px] mt-[10px]">
                <img src="https://send.monobank.ua/img/jar/grid.png" className="w-[42px] h-[168px] bg-cover"></img>
                <div className="font-extrabold text-[10px] text-[#8e5b5b] absolute whitespace-nowrap bottom-[152px] left-[16px]">25&nbsp;000</div>
                <div className="font-extrabold text-[10px] text-[#8e5b5b] absolute whitespace-nowrap bottom-[77px] left-[5px]">12&nbsp;500</div>
                <div className="font-extrabold text-[10px] text-[#8e5b5b] absolute whitespace-nowrap bottom-[2px] left-[7px]">0</div>
            </div>

            <p className="not-italic font-medium text-[14px] leading-[16px] mb-[4px]">Артем К. збирає</p>
            <p className="text-[22px] font-black mb-[12px]">На ремонт медеваку</p>

        </div>
    );
}

export default Jar;