import React from 'react'
import logo from "../Assets/Logo.jpg"
const Header = () => {
  return (
    <div>
        <div>
            <div className=" h-[10rem] px-20 justify-between items-center flex w-screen bg-white">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className=" font-bold w-auto h-auto flex gap-20 flex-row">
                    <h1>Contact Sales</h1>
                    <h1>Beta</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
