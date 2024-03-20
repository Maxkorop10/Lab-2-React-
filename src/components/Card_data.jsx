import React, { useState } from 'react';

const Card_data = () => {

    return (
        <div id="hidden-menu" className="hidden">
            <div className="flex justify-center items-center mb-[24px] pt-[20px]">
                <hr className="w-[75px] h-[0.1px] border-[#A0A0A0]"/>
                <p className="text-[14px] font-medium leading-[24px] px-[10px] py-[0]">або уведіть дані картки</p>
                <hr className="w-[75px] h-[0.1px] border-[#A0A0A0]"/>
            </div>

            <div className="h-[72px]">
                <input id="card-number-line" className="text-left text-[16px] pl-[16px] pr-[10px] rounded-[16px] text-[#000000] bg-none h-[56px] max-w-[340px] w-full ml-[32px] mr-auto border-[1px] border-[solid] border-[#ccc] leading-[24px] px-[10px] py-[0]" data-role="number" autoComplete="cc-name"/>
                <label className="cursor-default text-left text-[#757575] text-[16px] leading-[24px] relative -top-[41px] pl-[49px] pr-[42px] py-[0] duration-100">Номер картки</label>
            </div>

            <div className="text-left text-black rounded-[16px] bg-transparent h-14 max-w-[340px] w-full ml-[32px] mr-auto border border-solid border-gray-300 leading-6 px-2 py-0 flex items-center">
                <input className="border-transparent bg-transparent focus:outline-none w-24 h-full text-left text-black text-base leading-6" placeholder="Місяць"/>
                <hr className="h-9 mr-5 border-r border-gray-400"/>
                <input className="border-transparent bg-transparent focus:outline-none w-24 h-full text-left text-black text-base leading-6" placeholder="Рік"/>
                <hr className="h-9 mr-5 border-r border-gray-400"/>
                <input className="border-transparent bg-transparent focus:outline-none w-24 h-full text-left text-black text-base leading-6" placeholder="CVC2"/>
            </div>

            <div className="justify-center mt-[16px]">
                <button className="text-[16px] h-[56px] text-[#fff] bg-[#fdb9bb] border-[1px] border-[solid] border-[#ccc] rounded-[16px] font-semibold justify-center flex items-center w-full max-w-[346px] ml-auto mr-auto mb-[0px]">Поповнити банку</button>
            </div>
        </div>
    );
}

export default Card_data;