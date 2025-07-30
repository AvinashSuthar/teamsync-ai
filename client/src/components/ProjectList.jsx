import { useAppStore } from "@/store";
import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { HOST } from "@/utils/constants";
import { getColor } from "@/lib/utils";

const ProjectList = ({ projects }) => {
  console.log(projects);
  const {
    selectedChatData,
    setSelectedChatData,
    selectedChatType,
    setSelectedChatType,
    setSelectedChatMessages,
  } = useAppStore();

  const handleClick = (project) => {
    setSelectedChatType("project");
    setSelectedChatData(project);
    if (selectedChatData && selectedChatData._id !== project._id) {
      setSelectedChatMessages([]);
    }
  };

  return (
    <div className="mt-5">
      {projects.map((project) => (
        <div
          key={project._id}
          className={`pl-10 py-2 transition-all duration-300 cursor-pointer ${
            selectedChatData && selectedChatData._id === project._id
              ? "bg-[#8417ff] hover:bg-[#8417ff]"
              : "hover:bg-[#f1f1f111]"
          }`}
          onClick={() => {
            handleClick(project);
          }}
        >
          <div className="flex gap-5 items-center justify-start text-neutral-300">
            <div className="bg-[#ffffff22] h-10 w-10 flex items-center justify-center rounded-full">
              #
            </div>
            <span>{project.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
