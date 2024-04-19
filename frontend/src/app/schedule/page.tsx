"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [daySchedule, setDaySchedule] = useState([]);

  const schedule = {
    subjects: [
      {
        name: "ITC 130",
        instructor: "Steve Wozniak",
        days: [
          { day: "MON", start: "09:00", end: "10:00" },
          { day: "TUE", start: "13:00", end: "14:00" },
          { day: "WED", start: "09:00", end: "10:00" },
          { day: "FRI", start: "09:00", end: "10:00" },
        ],
      },
      {
        name: "MTH 245",
        instructor: "Ada Lovelace",
        days: [
          { day: "TUE", start: "10:15", end: "11:15" },
          { day: "THU", start: "10:15", end: "11:15" },
        ],
      },
      {
        name: "PHY 101",
        instructor: "Albert Einstein",
        days: [
          { day: "MON", start: "11:30", end: "12:30" },
          { day: "WED", start: "11:30", end: "12:30" },
          { day: "FRI", start: "11:30", end: "12:30" },
        ],
      },
      {
        name: "HIS 207",
        instructor: "Howard Zinn",
        days: [
          { day: "THU", start: "14:00", end: "15:30" },
          { day: "FRI", start: "14:00", end: "15:30" },
        ],
      },
    ],
  };

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
    setDaySchedule(filteredSchedule);
  }

  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <section className="flex flex-col h-dvh p-4 gap-2">
      <Tabs defaultValue="MON" className="flex flex-auto">
        <TabsList className="flex flex-auto">
          {weekDays.map((day) => (
            <TabsTrigger key={day} value={day} className="flex text-xs">
              {day}
            </TabsTrigger>
          ))}
        </TabsList>
        {/* <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent> */}
      </Tabs>
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
