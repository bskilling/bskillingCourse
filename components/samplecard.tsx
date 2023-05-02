import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
interface Todo {
  title: string;
  description: string;
  created_date: string;
}

export default function cards({ items }: { items: Todo }) {
  const { created_date, description, title } = items;

  return (
    <div className="flex flex-col rounded-lg p-7 w-[40%]  bg-gray">
      <div className="flex py-5 justify-between">
        <div className="font-RobotoMono font-extrabold">{title}</div>
        <div className="flex gap-5">
          <AiOutlineEdit />
          <AiOutlineDelete />
        </div>
      </div>

      <div className="mt-8 font-Mynerve font-normal">{description}</div>
      <div>
        <p className="text-xs">{created_date}</p>
      </div>
    </div>
  );
}
