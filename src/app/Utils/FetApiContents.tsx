interface ApiProp {
  api: string;
}

const FetchApiJson = async ({ api }: ApiProp) => {
  console.log(`${api}`);
  const res: Response = await fetch(`${api}`, {
    method: "GET",
    headers: {
      method: "GET",
      "x-rapidapi-key": GetAPIKey(),
      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com", // Using environment variable for API key
    } as Record<string, string>,
  });
  return res.json();
};

const GetAPIKey = () => {
  "use client;";
  return process.env.NEXT_PUBLIC_NBA_PUBLIC_API_KEY;
};

export default FetchApiJson;
