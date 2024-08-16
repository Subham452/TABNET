import React, { useState } from 'react'
import logo from "../Assets/Vector.jpg"
import { MdArrowForwardIos } from "react-icons/md";

const VideoDetail = () => {

  const [color, setColor] = useState("#A7A6F4");
  const [active, setActive] = useState(false);

  const [activeList, setActiveList] = useState(0);

  const enter = () => {
    // alert('heyy')
    // setColor("#000")
    setActive(true)

  }

  const data = [
    {
      heading: "Third party isk management",
      paragraph: "There are many types of digital risks within the third-party risk category. These could include financial, environmental, reputational, and security risks. These risks exist because vendors can access intellectual property, sensitive data, personally identifiable information (PII), and protected health information (PHI). Because third-party relationships are vital to business operations, Third-Party Risk Management is an essential component of all Cybersecurity programs.",
    },
    {
      heading: "Third party onboarding",
      paragraph: "How do you create an effective third-party onboarding strategy? You need to strike the right balance between internal security and data protection, and the need to empower everyone to get the job done. Add to that the fact we sometimes just need to get the job done and don’t have the time to follow the ideal strategy. So you need to create a plan that’s thorough enough to keep you safe while remaining flexible enough to adjust to circumstances. Here’s some tips from the Certa team to help you find that balance the right way.",
    },
    {
      heading: "Third party compliance management",
      paragraph: "Compliance Solutions are crucial for businesses across various sectors to mitigate risks, avoid penalties, and maintain trust with customers, stakeholders, and regulatory authorities. Find the right compliance solution at Complinity Technologies, that meets your regulatory requirements and helps streamline your compliance processes more  effectively. The ever-changing regulatory environment, strong focus on corporate governance and various business complexities, etc., have increased the need for organizations to have a robust compliance management system and solutions.",
    }
  ]

  const leave = () => {
    // alert('heyy')
    // setColor("#A7A6F4")
    setActive(false)
  }

  return (
    <div>
      <div className=" overflow-hidden flex flex-col justify-between items-center h-auto w-screen">
        <div id="body-head" className=" flex flex-row justify-between items-center px-20">
          <div className=" gap-4 flex flex-col justify-between h-auto w-3/6 items-start">
            <h1 className=" text-6xl font-bold text-[#2524C7]">Third Party</h1>
            <h1 className=" text-6xl font-bold text-black">Management Solutions</h1>
            <p className=" w-[96%] font-sans font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur beatae nam quae temporibus assumenda provident quidem doloribus porro reiciendis repudiandae delectus eaque quo accusantium ut numquam nihil similique odio.</p>
            <button className=" text-md text-white font-bold h-auto w-auto rounded-full bg-[#515ED0] px-5 py-2">Know More</button>
          </div>
          <div className=" -mt-[2rem]">
            <img src={logo} alt="" />
          </div>
        </div>

        {/* List */}
        <div>
          <div className=" h-auto justify-center items-center flex-row flex w-screen">
            <div className=" flex flex-col -mr-[10rem] z-40 px-20 mt-10 justify-between items-center w-screen h-auto">

              {

                data.map((e, idx) => (
                  <div key={idx} onClick={()=>{ setActiveList(idx)}}>
                  <div className={` ${idx===activeList?" bg-[#eef0f9]":""} cursor-pointer h-[5rem] justify-center items-center flex border-2 border-slate-50 hover:bg-[#eef0f9] transition-all duration-300 w-[40rem] bg-white`} onClick={() => { setActive(!active) }}>
                    <div className=" flex-row flex justify-between items-center h-auto w-full mx-5">
                      <div className=" flex flex-row justify-between items-center gap-3">
                        <div className={` h-6 w-6 rounded-full ${idx===activeList ? "bg-[#5E5FED]" : "bg-[#A7A6F4]"} `}></div>
                        {/* <div className={` h-6 w-6 rounded-full bg-[#A7A6F4] `} onMouseEnter={enter}></div> */}
                        <div>
                          <h1>{e.heading}.{activeList}</h1>
                        </div>
                      </div>
                      <MdArrowForwardIos className=" cursor-pointer" size="20" color="#6860CD" />
                    </div>
                    </div>
                    </div>
                  ))

              }
            </div>

            <div>
              <div className=" z-10 h-[30rem] overflow-y-scroll no-scrollbar w-[45rem] justify-center items-start pt-[10rem] flex rounded-t-[1rem] mr-20 bg-[#FAFBFF] bg-slte-200 border-2">
                <div className=" h-auto w-[30rem] bg-transparent">
                  {
                    data.map((e, idx) => (
                      <div key={idx} className={idx===activeList?"":"hidden"}>
                        <div className=" flex flex-col justify-start items-start gap-6">
                          <h1 className=" text-xl font-bold">{data[activeList]?.heading}</h1>
                          <p className=" text-sm">{data[activeList]?.paragraph}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoDetail
