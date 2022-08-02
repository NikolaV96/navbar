import {
  FiChevronDown,
  FiBox,
  FiFolder,
  FiFileText,
  FiLogOut,
} from "react-icons/fi";
import { RiDashboardLine, RiBillLine, RiTruckLine } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import Image from "next/image";
import Button from "/components/Button";
import { useState } from "react";

export default function Sidebar() {
  const [openModal, setOpenModal] = useState(true);

  return (
    <div className="w-screen h-auto flex justify-center transition-all ease-out duration-500">
      <div className="relative m-10 p-10 shadow-lg shadow-blue-500/20 rounded-lg bg-gradient-to-b from-cyan-500/25 to-blue-500/25 flex justify-center flex-col">
        <div
          onClick={() => {
            setOpenModal(!openModal);
          }}
          className="z-10 p-3 rounded-lg flex flex-row items-center space-x-5 hover:bg-blue-500/10 cursor-pointer"
        >
          <Image
            className="rounded-full"
            src="/me.jpeg"
            width="50"
            height="50"
          />
          <div>
            <p className="font-semibold text-lg">Coding With Nik</p>
            <p className="text-gray-500">example@gmail.com</p>
          </div>
          <div className="flex justify-center items-center p-4 rounded-full ">
            <FiChevronDown className="w-6 h-6" />
          </div>
        </div>

        <div className={openModal ? "static mt-10 ml-5 opacity-100 transition-all ease-out duration-500" : " mt-0 ml-5 opacity-50 z-0"}>
          <Button openModal={openModal}
            title={"Dashboard"}
            icon={<RiDashboardLine size={"22px"} />}
          />
          <Button openModal={openModal} title={"Quotes"} icon={<RiBillLine size={"22px"} />} />
          <Button openModal={openModal} title={"Bookings"} icon={<RiTruckLine size={"22px"} />} />
          <Button openModal={openModal} title={"Billing"} icon={<RiBillLine size={"22px"} />} />
          <Button openModal={openModal}
            title={"User Details"}
            icon={<HiOutlineUserGroup size={"22px"} />}
          />
          <Button openModal={openModal} title={"Orders"} icon={<FiBox size={"22px"} />} />
          <Button openModal={openModal} title={"Reports"} icon={<FiFileText size={"22px"} />} />
          <Button openModal={openModal} title={"File Managment"} icon={<FiFolder size={"22px"} />} />
          <div className={openModal ? "mt-10" :  "hidden"}>
            <Button openModal={openModal} title={"Logout"} icon={<FiLogOut size={"22px"} />} />
          </div>
        </div>
      </div>
    </div>
  );
}
