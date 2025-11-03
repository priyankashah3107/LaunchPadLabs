"use client";
import React, { useState } from "react";
import { Calendar } from "@/Components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { Clock, Globe, Rocket } from "lucide-react";
import Image from "next/image";
import SharedButton from "./SharedComponents/SharedButton";

const timeSlots12h = ["01:30", "02:00", "02:30", "03:00", "03:30", "04:00"];

const timeSlots24h = ["09:00", "10:30", "12:00", "14:30", "17:30"];

const timezones = [
  { value: "asia-kolkata", label: "Asia/Kolkata" },
  { value: "asia-delhi", label: "Asia/Delhi" },
  { value: "asia-mumbai", label: "Asia/Mumbai" },
];

export default function ReadyToLaunch() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeFormat, setTimeFormat] = useState("12h");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("02:30");
  const [timezone, setTimezone] = useState("asia-kolkata");

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Ready to launch your next big idea?
          </h2>
          <p className="text-gray-600 text-base lg:text-lg mb-6">
            Book a consultation call and let's turn your vision into reality
          </p>
          <div className="flex justify-center">
            <SharedButton
              label="Book My Free MVP Call"
              size="large"
              className="lg:w-[20%] w-full sm:w-1/2  lg:text-base"
            />
          </div>
        </div>

        {/* Booking Card */}
        <div className="border border-blue-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            {/* Left Panel - Info */}
            <div className="p-8 bg-white">
              <div className="flex flex-col gap-6">
                {/* <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center"> */}
                <Image
                  src={"/logo.png"}
                  alt="logo"
                  width={30}
                  height={30}
                  className="w-11 h-10"
                />
                {/* </div> */}

                <div>
                  <p className="justify-start text-stone-500 text-base font-semibold  leading-8">
                    LaunchPad Labs
                  </p>
                  <h3 className="justify-start text-neutral-700 text-lg font-bold  leading-8">
                    Quick Chat
                  </h3>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5" />
                  <span className="justify-start text-zinc-700 text-sm font-medium ">
                    30 min
                  </span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Image
                    src={"/gmeet.png"}
                    alt="gmeet"
                    width={24}
                    height={24}
                  />
                  <span className="justify-start text-zinc-700 text-sm font-medium ">
                    Google Meet
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-700" />
                  <Select value={timezone} onValueChange={setTimezone}>
                    <SelectTrigger className="w-full border-0 p-0 h-auto font-medium text-gray-700 focus:ring-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {timezones.map((tz) => (
                        <SelectItem key={tz.value} value={tz.value}>
                          {tz.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Middle Panel - Calendar */}
            <div className="p-6 bg-gray-50">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border-0 w-full "
                required
              />
            </div>

            {/* Right Panel - Time Slots */}
            <div className="p-6 bg-white">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold text-gray-400">
                  {selectedDate.toLocaleDateString("en-US", {
                    weekday: "short",
                    day: "numeric",
                  })}
                </h4>

                <Tabs
                  value={timeFormat}
                  onValueChange={setTimeFormat}
                  className="w-auto"
                >
                  <TabsList className="grid grid-cols-2">
                    <TabsTrigger value="12h">12h</TabsTrigger>
                    <TabsTrigger value="24h">24h</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <Tabs
                value={timeFormat}
                onValueChange={setTimeFormat}
                className="w-full"
              >
                <TabsContent value="12h" className="mt-0">
                  <div className="flex flex-col gap-2 max-h-[280px] overflow-y-auto">
                    {timeSlots12h.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTimeSlot(time)}
                        className={`rounded-lg py-3 px-4 font-semibold transition-all text-lg ${
                          selectedTimeSlot === time
                            ? "bg-blue-500 text-white shadow-md"
                            : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="24h" className="mt-0">
                  <div className="flex flex-col gap-2 max-h-[280px] overflow-y-auto">
                    {timeSlots24h.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTimeSlot(time)}
                        className={`rounded-lg py-3 px-4 font-semibold transition-all text-lg ${
                          selectedTimeSlot === time
                            ? "bg-blue-500 text-white shadow-md"
                            : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <p className="text-center mt-4 pb-4   text-zinc-500 text-xl font-medium  leading-8">
            Cal.com
          </p>
        </div>
      </div>
    </section>
  );
}
