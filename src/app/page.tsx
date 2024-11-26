"use client";
import { useEffect } from "react";
import UrlBuilder from "./Utils/UrlBuilder";
import { NBA_TEAMS } from "../../public/utils/constants";
import TeamsAPIResposneModel from "./models/TeamsAPIResposneModel";
import ObjectMapper from "./Utils/Mapper/ObjectMapper";
import ObjectMapperFactory from "./Utils/Mapper/ObjectMapperFactory";
import FetchApiJson from "./Utils/FetApiContents";

export function getBasketBallTeams() {
  console.log("check1");
  const urlBuilder = new UrlBuilder(NBA_TEAMS);
  let objectMapper: ObjectMapper;
  try {
    objectMapper = ObjectMapperFactory.buildFactory(
      new TeamsAPIResposneModel()
    );
  } catch (e) {
    console.error("An erorr occurred: ", e);
  }

  useEffect(() => {
    try {
      async () => {
        const result = await FetchApiJson({ api: urlBuilder.build() });
        objectMapper.map(result);
      };
    } catch (e) {
      console.error("An Error has occurred: ", e);
    }
  }, []);
}

export default function Home() {
  getBasketBallTeams();
  return (
    <>
      <h1>Hello World</h1>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 mx-auto">
        <div className="font-bold text-xl mb-2">Basic Card</div>
        Hello World
      </div>
    </>
  );
}
