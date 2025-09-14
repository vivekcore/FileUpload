import { FaHome } from "react-icons/fa";
import Card from "./Card";
import About from "./About";
import { GoProjectSymlink } from "react-icons/go";
import { SiCoursera } from "react-icons/si";
import { useState } from "react";
import { GrContact } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import { Contact } from "./Contact";
const tabs = [
  {
    id: "home",
    icon: <FaHome />,
    label: "Home",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is a cardcomponent using React and Tailwing CSS."
            image="https://placehold.co/600x400"
            link="abc"
          />
        ))}
      </div>
    ),
  },
  {
    id: "courses",
    icon: <SiCoursera />,
    label: "Courses",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Coursses Card"
            description="This is a cardcomponent using React and Tailwing CSS."
            image="https://placehold.co/600x400"
            link="abc"
          />
        ))}
      </div>
    ),
  },
  {
    id: "about",
    icon: <FcAbout className="font-black"/>,
    label: "About",
    content: <About />,
  },
  {
    id: "projects",
    icon: <GoProjectSymlink />,
    label: "Projects",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing card"
            description="This is a cardcomponent using React and Tailwing CSS."
            image="https://placehold.co/600x400"
            link="abc"
          />
        ))}
      </div>
    ),
  },
  {
    id: "contact",
    icon: <GrContact/>,
    label: "contact",
    content: <Contact/>
  }
];
const Tabs = () => {
  const [activeTab, SetActivetab] = useState(tabs[0].id);

  return (
    <div className="p-4 mt-[3rem]">
      <div className="flex border-b border-gray-200"></div>
      <div className="w-ful flex justify-between ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 text-center py-2 px-2 font-medium text-sm  ${
              activeTab === tab.id ? "border-b-2" : "text-gray-600"
            }`}
            onClick={() => SetActivetab(tab.id)}
          >
            <div className="flex space-x-2 justify-center items-center">
              {tab.icon}
              <span>{tab.label}</span>
            </div>
          </button>
        ))}
        
      </div>
      <div className="mt-4 ml-8 pl-6 flex  rounded-lg ">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
