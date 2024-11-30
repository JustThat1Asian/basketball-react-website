"use client";
import { useEffect, useState } from "react";
import UrlBuilder from "./Utils/UrlBuilder";
import ObjectMapper from "./Utils/Mapper/ObjectMapper";
import ObjectMapperFactory from "./Utils/Mapper/ObjectMapperFactory";
import FetchApiJson from "./Utils/FetApiContents";
import { NBA_TEAMS } from "../../public/utils/constants";
import Model from "./models/Model";
import TeamsAPIResponseModel from "./models/TeamsAPIResposneModel";

export function getObjectMapper(modelClassName: string): ObjectMapper {
  try {
    return ObjectMapperFactory.buildFactory(modelClassName);
  } catch (e) {
    throw e;
  }
}

export default function Home() {
  const [triggerUseEffect, activateTrigger] = useState(false);

  useEffect(() => {
    console.log("running");
    const urlBuilder = new UrlBuilder(NBA_TEAMS);
    
    try {
      const objectMapper:ObjectMapper = getObjectMapper(TeamsAPIResponseModel.name);
      FetchApiJson({ api: urlBuilder.build() }).then((result: Response) => {
        console.log(result)
        objectMapper.map(result);
      });
    } catch (e) {
      console.error("An Error has occurred: ", e);
    }
  }, []);

  return (
    <>
      <h1>Hello World</h1>
      <div>
        <button
          onClick={() => {
            activateTrigger(!triggerUseEffect);
            console.log(triggerUseEffect);
          }}
        >
          Click Me
        </button>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 mx-auto">
        <div className="font-bold text-xl mb-2">Basic Card</div>
        Hello World
      </div>
    </>
  );
}
