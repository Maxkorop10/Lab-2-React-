import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import '../styles/Donation_part.css';

const Donation_part = () => {
    const [money, set_money] = useState(0)

    useEffect(() => {
        if (localStorage.getItem("current_money") == null) {
            localStorage.setItem("current_money", "0 ₴");
        }

        const current_wallet = document.getElementById('current-wallet');
        current_wallet.textContent = localStorage.getItem("current_money");
    }, []);

    const handleChange = (e) => {
        set_money(parseInt(e.target.value))
        changeColor()
    }

    const Add_money = (amount) => {
        set_money(num => num + amount)
        setTimeout(() => {
            changeColor(); 
        }, 0);
    }

    const Answer_on_Click = () => {
        const money_input = document.getElementById('money-amount');
        const current_wallet = document.getElementById('current-wallet');
        const user_name = document.getElementById('user-name');
        const comment = document.getElementById('comment');
    
        const number = parseInt(money_input.value);
        const user_name_text = user_name.value.trim() !== '' ? user_name.value.trim() : 'empty line';
        const comment_text = comment.value.trim() !== '' ? comment.value.trim() : 'empty line';
    
        if (number >= 5 && number <= 25000) {
            const current_wallet_amount = parseFloat(current_wallet.textContent.replace(/[^\d.]/g, ''));
            const new_wallet_amount = current_wallet_amount + number;
            current_wallet.textContent = new_wallet_amount.toFixed(2) + ' ₴';

            localStorage.setItem("current_money", current_wallet.textContent);
            set_money(0);
            money_input.value = 0;
            user_name.value = '';
            comment.value = '';

            console.log("Сплачено суму: ", number + "\nІм'я: ", user_name_text + "\nКоментар: ", comment_text);
        }
    }

    return (
        <div>
            <div className="bg-gradient-to-r from-blue-400 to-fuchsia-600 h-[216px] w-[406px] rounded-[24px] flex justify-center items-center top-[48px] right-[50px] mb-[32px]">
                <div className="bg-[#fff] h-[211px] w-[401px] rounded-[22px]">
                    <div className="text-[14px] text-[#121214] font-['Inter',_'LatoWeb',_'Segoe_UI',_Tahoma,_Geneva,_Verdana,_sans-serif] justify-center pt-[24px] flex font-semibold leading-[16px]">
                        <p>Сума поповнення</p>
                        <img src="https://send.monobank.ua/img/money.png" className="flex w-[16px] ml-[0.5em] mb-[20px]" alt="money"/>
                    </div>

                    <div className="items-center justify-center inline pl-[44px] font-bold font-['Inter',_'LatoWeb',_'Segoe_UI',_Tahoma,_Geneva,_Verdana,_sans-serif]">
                        <input type="number" min="5" max="25000" value={money} onChange={handleChange} placeholder="0" сontent="$" id="money-amount" className="text-right text-[#c794d5] border-none outline-none text-[48px] font-bold w-36 mr-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
                    </div>

                    <div id="dollar" className="inline text-[48px] pl-[2px] font-bold font-['Inter',_'LatoWeb',_'Segoe_UI',_'Tahoma',_'Geneva',_'Verdana',_sans-serif] text-[#c794d5] p-0 text-center">
                        ₴
                    </div>

                    
                    {/* <div className="money-input-block">
                        <div className="flex items-center justify-center font-[700] text-[52px] text-center transition-opacity duration-200">
                            <div className='money-input-contenteditable' contentEditable="true" inputMode="decimal">
                            {money}
                            </div>
                            <div className={'flex items-center'}>
                            &nbsp;₴
                            </div>
                        </div>
                    </div> */}



                    <div id="wrong-value" className="hidden text-[#5a5a5a] text-[12px] mt-[-10px] justify-center mb-[-8px] text-center">
                        Сумма повинна бути від 5&nbsp;₴ до 25 000&nbsp;₴
                    </div>
                    
                    <div className="text-center mt-[20px]">
                        <button onClick={() => Add_money(100)} id="add-100" type="button" className="border-[1px] border-[solid] border-[#ccc] bg-[#fff] px-[3px] py-[0] text-center mx-[8px] my-[0] rounded-[16px] min-h-[40px] min-w-[102px] font-medium text-[16px] leading-[24px] font-['Inter',_'LatoWeb',_'Segoe_UI',_Tahoma,_Geneva,_Verdana,_sans-serif] mb-2 hover:border-[1px] hover:border-[solid] hover:border-[#b5b5b5] hover:bg-[#cccccc78] hover:cursor-pointer">
                            +100&nbsp;₴
                        </button>
                        <button onClick={() => Add_money(500)} id="add-500" type="button" className="border-[1px] border-[solid] border-[#ccc] bg-[#fff] px-[3px] py-[0] text-center mx-[8px] my-[0] rounded-[16px] min-h-[40px] min-w-[102px] font-medium text-[16px] leading-[24px] font-['Inter',_'LatoWeb',_'Segoe_UI',_Tahoma,_Geneva,_Verdana,_sans-serif] mb-2 hover:border-[1px] hover:border-[solid] hover:border-[#b5b5b5] hover:bg-[#cccccc78] hover:cursor-pointer">
                            +500&nbsp;₴
                        </button>
                        <button onClick={() => Add_money(1000)} id="add-1000" type="button" className="border-[1px] border-[solid] border-[#ccc] bg-[#fff] px-[3px] py-[0] text-center mx-[8px] my-[0] rounded-[16px] min-h-[40px] min-w-[102px] font-medium text-[16px] leading-[24px] font-['Inter',_'LatoWeb',_'Segoe_UI',_Tahoma,_Geneva,_Verdana,_sans-serif] mb-2 hover:border-[1px] hover:border-[solid] hover:border-[#b5b5b5] hover:bg-[#cccccc78] hover:cursor-pointer">
                            +1000&nbsp;₴
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <div className="mr-auto mb-4 border-none rounded-2xl bg-transparent h-14 relative flex justify-center items-center">
                    <TextField
                        id="user-name"
                        label="Ваше ім'я (необов'язково)"
                        className="text-left pl-4 pr-2 focus:outline-black rounded-2xl text-black bg-none max-w-[340px] w-full border-solid border-[#ccc] leading-6 px-3 py-0"
                        autoComplete="cc-name"
                        sx={{ borderRadius: '16px' }}/>
                </div>

                <div className="mr-auto mb-4 border-none rounded-2xl bg-transparent h-14 relative flex justify-center items-center">
                    <TextField
                        id="comment"
                        label="Коментар (необов'язково)"
                        className="text-left pl-4 pr-2 rounded-2xl text-black bg-none max-w-[340px] w-full border-solid border-[#ccc] leading-6 px-3 py-0"
                        autoComplete="cc-name"
                        sx={{ borderRadius: '16px' }}/>
                </div>
            </div>

            <div>
                <div className="flex h-[48px] ml-[32px] mb-[16px] w-[340px] rounded-[8px] bg-[#000] overflow-hidden justify-center items-center cursor-pointer hover:bg-[rgb(44,44,44)] hover:border-[rgb(32,32,32)]" onClick={Answer_on_Click}>
                    <img src="https://send.monobank.ua/img/mono_pay.svg" className="h-[26px] w-[103px]"/>
                </div>

                <div className="flex h-[48px] ml-[32px] w-[340px] rounded-[8px] bg-[#000] overflow-hidden justify-center items-center cursor-pointer hover:bg-[rgb(44,44,44)] hover:border-[rgb(32,32,32)]" onClick={Answer_on_Click}>
                    <img src="https://www.gstatic.com/instantbuy/svg/dark_gpay.svg" className="h-[26px] w-[66px]"/>
                </div>
            </div>

        </div>
    );
}

const changeColor = () => {
    const money_input = document.getElementById('money-amount');
    const dollarLogo = document.getElementById('dollar');
    const errorValue = document.getElementById('wrong-value');
    const value = parseInt(money_input.value);

    if (value < 5 || value > 25000) {
        money_input.classList.add('text-[#c794d5]');
        dollarLogo.classList.add('text-[#c794d5]');
        errorValue.style.display = 'flex';
    } else {
        money_input.classList.remove('text-[#c794d5]');
        dollarLogo.classList.remove('text-[#c794d5]');
        errorValue.style.display = 'none';
    }
}

export default Donation_part;