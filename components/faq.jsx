"use client";

import { useState } from "react";
import Question from "@/components/Question";
import data from "../data/data.json";
import UserButton from "./UserButton";

export default function Faq({data}) {
  const [active, setActive] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <div className="flex flex-col gap-10 h-full w-[90%] mx-auto">
      <div className="flex gap-52 justify-center h-[10%]">
        <UserButton text="client" id={0} setUser={setUser} />
        <UserButton text="carer" id={1} setUser={setUser} />
      </div>
      <ul>
        {data["data"]
          .filter((item) => {
            if (user === null) return false;
            if (user === 0) return item.attributes.audience === "client";
            if (user === 1) return item.attributes.audience === "carer";
          })
          .map((item) => (
            <Question
              key={item.id}
              id={item.id}
              question={item.attributes.question}
              answer={item.attributes.answer}
              setActive={setActive}
              active={active}
            />
          ))}
      </ul>
    </div>
  );
}
