"use client";
import { useEffect, useState } from "react";
import UrlBuilder from "../../public/utils/api/UrlBuilder";
import ObjectMapper from "../../public/utils/Mapper/ObjectMapper";
import ObjectMapperFactory from "../../public/utils/Mapper/ObjectMapperFactory";
import FetchApiJson from "../../public/utils/api/FetApiContents";
import { NBA_TEAMS } from "../../public/utils/constants";
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
