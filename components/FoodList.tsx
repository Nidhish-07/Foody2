import React from "react";
import Card from "./ui/Card";

type Props = {};

const FoodList = (props: Props) => {
  return (
    <div className="py-5 px-2 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10">Lorem, ipsum.</h1>
      <p className="text-2xl text-slate-700 w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        eveniet quia harum repellat suscipit ipsa obcaecati aliquid non. Fugit
        minima eaque tenetur quaerat, alias, voluptas est ullam deserunt
        exercitationem consequuntur facilis totam eveniet! Ab ipsa maxime
        voluptates doloremque veniam quasi provident odio quo corrupti? Ut
        quaerat hic eius pariatur sequi?
      </p>
      <div className="flex items-center w-full flex-wrap justify-center">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default FoodList;
