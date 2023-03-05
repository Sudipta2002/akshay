import React, { useState,useEffect,useContext } from "react";
const tabs = [
    {
      name: "Delivery",
      active_img:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      inactive_img:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
    },
    {
      name: "Dining Out",
      active_img:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      inactive_img:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
    },
    {
      name: "Night Life",
      active_img:
        "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      inactive_img:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
    },
  ];
  
  const TabOption = ({ activeTab, setActiveTab }) => {
    return (
      <div className="tab-options shadow-md border-white border-solid">
        <div className="options-wrapper flex justify-center max-w-5xl mx-auto my-0">
          {tabs.map((tab) => {
            return (
              <div
                onClick={() => setActiveTab(tab.name)}
                className={`tab-item flex justify-center items-center mr-6 px-3.5 py-2.5 hover:cursor-pointer ${
                  activeTab == tab.name &&
                  "active-tab border-b-2 border-solid border-red-700"
                }`}
              >
                <div className="container h-16 w-14 rounded-md">
                  {/* <div className="flex justify-center items-center bg-{`${activeTab==tab.name ? tab.backdrop :"></div> */}
                  <img
                    className="tab-image h-8 w-8"
                    alt="{tab.name}"
                    src={
                      activeTab == tab.name ? tab.active_img : tab.inactive_img
                    }
                  />
                </div>
                <div
                  className={`tab-name text-l font-medium ${
                    activeTab == tab.name && "text-red-700"
                  }`}
                >
                  {tab.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  export default TabOption;