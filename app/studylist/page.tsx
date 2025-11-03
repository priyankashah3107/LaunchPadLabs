import ReadyToLaunch from "@/Components/ReadyToLaunch";
import VisionToLaunchPad from "@/Components/StudyList/VisionToLaunchPad";
import React from "react";

const studylistdata = [
  {
    image: "/studylist/study.png",
    title: "FitAI",
    description:
      "FitAI brings personalized, AI-powered home workouts to your fingertips — tailored plans, real-time guidance, and progress tracking to help you stay fit anytime, anywhere.",
    courseTags: [["UI/UX", "Web Development", "Mobile App"]],
  },
  {
    image: "/studylist/study.png",
    title: "FitAI",
    description:
      "FitAI brings personalized, AI-powered home workouts to your fingertips — tailored plans, real-time guidance, and progress tracking to help you stay fit anytime, anywhere.",
    courseTags: [["UI/UX", "Web Development", "Mobile App"]],
  },
  {
    image: "/studylist/study.png",
    title: "FitAI",
    description:
      "FitAI brings personalized, AI-powered home workouts to your fingertips — tailored plans, real-time guidance, and progress tracking to help you stay fit anytime, anywhere.",
    courseTags: [["UI/UX", "Web Development", "Mobile App"]],
  },
];

const page = () => {
  return (
    <>
      <VisionToLaunchPad />
      <ReadyToLaunch />
    </>
  );
};

export default page;
