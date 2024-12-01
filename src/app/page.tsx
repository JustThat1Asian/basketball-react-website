"use client";
import { useEffect, useState } from "react";
import UrlBuilder from "../../public/utils/api/UrlBuilder";
import ObjectMapper from "../../public/utils/Mapper/ObjectMapper";
import ObjectMapperFactory from "../../public/utils/Mapper/ObjectMapperFactory";
import FetchApiJson from "../../public/utils/api/FetApiContents";
import { NBA_TEAMS } from "../../public/utils/constants";
import TeamsAPIResponseModel from "./models/TeamsAPIResposneModel";
import Model from "./models/Model";
import BasketBallInfo from "./components/BasketballTableOfContents/page";

export function getObjectMapper(modelClassName: string): ObjectMapper {
  try {
    return ObjectMapperFactory.buildFactory(modelClassName);
  } catch (e) {
    throw e;
  }
}

export default function Home() {
  const [triggerUseEffect, activateTrigger] = useState(false);
  const [teamsInfoObj, setTeamsInfoObj] = useState<Model| null>(null);

  useEffect(() => {
    const urlBuilder = new UrlBuilder(NBA_TEAMS);
    
    try {
      const objectMapper:ObjectMapper = getObjectMapper(TeamsAPIResponseModel.name);
      FetchApiJson({ api: urlBuilder.build() }).then((result: Response) => {
       setTeamsInfoObj(objectMapper.map(result));
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
      <div className="mx-auto mt-6">
        <div className="rounded overflow-hidden shadow-lg p-4 bg-black">
          <div className="font-bold text-xl mb-2 text-center">Teams Information Card</div>
          <div
            className="w-full h-auto max-h-[400px] overflow-y-auto border border-gray-300 rounded-lg p-4"
          >
            {teamsInfoObj && teamsInfoObj instanceof TeamsAPIResponseModel ? (
              <BasketBallInfo data={teamsInfoObj} />
            ) : (
              <p className="text-center text-gray-500">Loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
