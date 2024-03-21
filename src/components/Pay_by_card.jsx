import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const Pay_by_card = () => {

    const [menuVisible, set_menuVisible] = useState(false)
    const [form_hider, setFormActivatorHidden] = useState(false)

    const Menu_visibility = () => {
        set_menuVisible(!menuVisible);
        setFormActivatorHidden(!form_hider)
    };

    return (
        <div>
            <div id="form-activator" className={form_hider ? "hidden" : "block pr-[34px]"}>
                <hr id="hideHr" className="mb-[8px] border-[#A0A0A0] w-[340px] mt-[24px] ml-[32px]"/>

                <div id="show-menu" onClick={Menu_visibility} className="flex justify-center pt-[8px] w-full leading-[24px] rounded-[8px] ml-[32px]">
                    <img src="https://send.monobank.ua/img/card.svg" className="w-[16px] h-[26px] mr-[8px]"/>
                    <label className="text-[14px] text-[#e85e5b] font-semibold leading-[24px] cursor-pointer text-center">Оплатити карткою</label>
                </div>
            </div>


            <div id="hidden-menu" className={menuVisible ? "block pr-[34px]" : "hidden"}>
                <div className="flex justify-center items-center mb-[24px] pt-[20px]">
                    <hr className="w-[75px] h-[0.1px] border-[#A0A0A0]"/>
                    <p className="text-[14px] font-medium leading-[24px] px-[10px] py-[0]">або уведіть дані картки</p>
                    <hr className="w-[75px] h-[0.1px] border-[#A0A0A0]"/>
                </div>

                <div className="h-[72px] ml-[32px]">
                    <TextField
                        id="card-number-line"
                        label="Номер картки"
                        variant="outlined"
                        className="text-left pl-[16px] pr-[10px] rounded-[16px] text-[#000000] bg-none h-[56px] max-w-[340px] w-full ml-[32px] mr-auto border-[1px] border-[solid] border-[#ccc] leading-[24px] px-[10px] py-[0]"
                        autoComplete="cc-name"
                    />
                </div>

                <div className="text-left text-black rounded-[16px] bg-transparent h-14 max-w-[340px] w-full ml-[32px] mr-auto border border-solid border-gray-300 leading-6 px-2 py-0 flex items-center">
                    <input className="border-transparent bg-transparent focus:outline-none w-24 h-full text-left text-black text-base leading-6" placeholder="Місяць"/>
                    <hr className="h-9 mr-5 border-r border-gray-400"/>
                    <input className="border-transparent bg-transparent focus:outline-none w-24 h-full text-left text-black text-base leading-6" placeholder="Рік"/>
                    <hr className="h-9 mr-5 border-r border-gray-400"/>
                    <input className="border-transparent bg-transparent focus:outline-none w-24 h-full text-left text-black text-base leading-6" placeholder="CVC2"/>
                </div>

                <div className="justify-center mt-[16px] ml-[32px]">
                    <button className="text-[16px] h-[56px] text-[#fff] bg-[#fdb9bb] border-[1px] border-[solid] border-[#ccc] rounded-[16px] font-semibold justify-center flex items-center w-full max-w-[346px] ml-auto mr-auto mb-[0px]">Поповнити банку</button>
                </div>
            </div>


        </div>
    );
}

export default Pay_by_card;