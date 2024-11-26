interface ApiProp {
  api: string;
}

const FetchApiJson = async ({ api }: ApiProp): Promise<Response> => {
  const res: Response = await fetch(`${api}`, {
    method: "GET",
    headers: {
      method: "GET",
      "x-rapidapi-key": GetAPIKey(),
      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com", // Using environment variable for API key
    } as Record<string, string>,
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const GetAPIKey = () => {
  "use client;";
  return process.env.NEXT_PUBLIC_NBA_PUBLIC_API_KEY;
};

export default FetchApiJson;
