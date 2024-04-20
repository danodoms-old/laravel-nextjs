"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState("");

  const schedules = [
    {
      day: "Sunday",
      schedules: [],
    },
    {
      day: "Monday",
      schedules: [
        {
          name: "ITC 130",
          instructor: "Steve Wozniak",
          start: "09:00",
          end: "10:00",
        },
        {
          name: "PHY 101",
          instructor: "Albert Einstein",
          start: "11:30",
          end: "12:30",
        },
      ],
    },
    {
      day: "Tuesday",
      schedules: [
        {
          name: "ITC 130",
          instructor: "Steve Wozniak",
          start: "13:00",
          end: "14:00",
        },
        {
          name: "MTH 245",
          instructor: "Ada Lovelace",
          start: "10:15",
          end: "11:15",
        },
      ],
    },
    {
      day: "Wednesday",
      schedules: [
        {
          name: "ITC 130",
          instructor: "Steve Wozniak",
          start: "09:00",
          end: "10:00",
        },
        {
          name: "PHY 101",
          instructor: "Albert Einstein",
          start: "11:30",
          end: "12:30",
        },
      ],
    },
    {
      day: "Thursday",
      schedules: [
        {
          name: "MTH 245",
          instructor: "Ada Lovelace",
          start: "10:15",
          end: "11:15",
        },
        {
          name: "HIS 207",
          instructor: "Howard Zinn",
          start: "14:00",
          end: "15:30",
        },
      ],
    },
    {
      day: "Friday",
      schedules: [
        {
          name: "ITC 130",
          instructor: "Steve Wozniak",
          start: "09:00",
          end: "10:00",
        },
        {
          name: "PHY 101",
          instructor: "Albert Einstein",
          start: "11:30",
          end: "12:30",
        },
        {
          name: "HIS 207",
          instructor: "Howard Zinn",
          start: "14:00",
          end: "15:30",
        },
      ],
    },
    {
      day: "Saturday",
      schedules: [],
    },
  ];

  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <section className="flex flex-col h-dvh p-4 gap-2">
      <Tabs defaultValue={selectedDate} className="flex flex-initial">
        <TabsList className=" flex flex-auto overflow-x-hidden">
          {weekDays.map((day) => (
            <div key={day}>
              <TabsTrigger
                key={day}
                value={day}
                className={`flex text-xs ${
                  selectedDate === day ? "active" : ""
                }`}
              >
                {day}
              </TabsTrigger>
            </div>
          ))}
        </TabsList>
      </Tabs>

      <Carousel className="flex-auto">
        <CarouselContent>
          {/* Render Each Carousel Item per Day */}
          {schedules.map((day, index) => (
            <CarouselItem
              className="flex flex-col gap-2 overflow-y-hiden"
              key={index}
            >
              <div className="flex-initial py-2 text-2xl font-bold">
                {day.day}
              </div>

              {/* Render Each Event on that Day*/}
              {day.schedules.map((schedule, index) => (
                <div key={index} className="">
                  <Card className="flex flex-wrap flex-initial">
                    <CardHeader className="flex-auto">
                      <CardTitle>{schedule.name}</CardTitle>
                      <CardDescription>{schedule.instructor}</CardDescription>
                    </CardHeader>
                    <div className="flex-auto p-5 gap-2 content-center text-center">
                      <div className="flex-auto bg-secondary text-md rounded p-1">
                        {schedule.start}
                      </div>
                      <div className="flex-auto bg-secondary text-md rounded p-1">
                        {schedule.end}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}

              {/* Render no nchedule if user has no schedule on that day */}
              {day.schedules.length < 1 ? (
                <div className="flex-initial">
                  <div className="flex-auto bg-base-200  opacity-70 text-sm rounded-full font-normal">
                    You have no schedule
                  </div>
                </div>
              ) : null}

              {/* Append add button on all carousel item at the bottom */}
              <div className="flex-initial">
                <a href="/schedule/create">
                  <div className="flex-auto bg-base-200 text-4xl p-2 rounded-full text-center font-normal">
                    +
                  </div>
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
