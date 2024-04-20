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
  const [daySchedule, setDaySchedule] = useState([]);

  // const schedule = {
  //   subjects: [
  //     {
  //       name: "ITC 130",
  //       instructor: "Steve Wozniak",
  //       days: [
  //         { day: "MON", start: "09:00", end: "10:00" },
  //         { day: "TUE", start: "13:00", end: "14:00" },
  //         { day: "WED", start: "09:00", end: "10:00" },
  //         { day: "FRI", start: "09:00", end: "10:00" },
  //       ],
  //     },
  //     {
  //       name: "MTH 245",
  //       instructor: "Ada Lovelace",
  //       days: [
  //         { day: "TUE", start: "10:15", end: "11:15" },
  //         { day: "THU", start: "10:15", end: "11:15" },
  //       ],
  //     },
  //     {
  //       name: "PHY 101",
  //       instructor: "Albert Einstein",
  //       days: [
  //         { day: "MON", start: "11:30", end: "12:30" },
  //         { day: "WED", start: "11:30", end: "12:30" },
  //         { day: "FRI", start: "11:30", end: "12:30" },
  //       ],
  //     },
  //     {
  //       name: "HIS 207",
  //       instructor: "Howard Zinn",
  //       days: [
  //         { day: "THU", start: "14:00", end: "15:30" },
  //         { day: "FRI", start: "14:00", end: "15:30" },
  //       ],
  //     },
  //   ],
  // };

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

  function DayName(day: string) {
    return (
      <div
        className="flex flex-auto bg-base-300 size-10 rounded-full"
        onClick={() => handleDayClick(day)}
      >
        <p className="flex-auto my-auto text-center font-semibold text-xs lg:text-sm">
          {day}
        </p>
      </div>
    );
  }

  function handleDayClick(day: string) {
    setSelectedDate(day);
    const filteredSchedule = schedule.subjects
      .map((subject) => ({
        ...subject,
        days: subject.days.filter((d) => d.day === day),
      }))
      .filter((subject) => subject.days.length > 0);
    console.log(day);
    console.log("filteredSchedule ", filteredSchedule);
    setDaySchedule(filteredSchedule);
  }

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
          {schedules.map((day, index) => (
            <CarouselItem
              className="flex flex-col gap-2 overflow-y-hiden"
              key={index}
            >
              <div className="flex-initial py-2 text-2xl font-bold">
                {day.day}
              </div>

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

              {day.schedules.length < 1 ? (
                <div className="flex-initial">
                  <div className="flex-auto bg-base-200  opacity-70 text-sm rounded-full font-normal">
                    You have no schedule
                  </div>
                </div>
              ) : null}

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

  // return (
  //   <section className="flex flex-col h-dvh bg-base-100 p-4 gap-2">
  //     <div className="flex flex-initial justify-center gap-2">
  //       {DayName("SUN")}
  //       {DayName("MON")}
  //       {DayName("TUE")}
  //       {DayName("WED")}
  //       {DayName("THU")}
  //       {DayName("FRI")}
  //       {DayName("SAT")}
  //     </div>
  //     <div className="flex flex-auto flex-col bg-base-300 rounded-xl gap-2 p-2">
  //       {daySchedule.map((subject) => (
  //         <div
  //           key={subject.name}
  //           className="flex flex-initial bg-neutral rounded-md p-2"
  //         >
  //           <h3 className="flex-auto font-bold content-center p-2">
  //             {subject.name}{" "}
  //             <span className="font-normal ml-4">{subject.instructor}</span>
  //           </h3>
  //           {subject.days.map((session) => (
  //             <div
  //               key={session.start}
  //               className="flex bg-base-200 gap-4 p-4 rounded-lg"
  //             >
  //               <p className="flex-auto">{session.start}</p>
  //               <p className="flex-auto">{session.end}</p>
  //             </div>
  //           ))}
  //         </div>
  //       ))}

  //       <div className="flex-initial">
  //         <a href="/schedule/create">
  //           <div className="flex-auto bg-base-200 text-4xl p-2 rounded-full text-center font-normal">
  //             +
  //           </div>
  //         </a>
  //       </div>
  //     </div>
  //   </section>
  // );
}
