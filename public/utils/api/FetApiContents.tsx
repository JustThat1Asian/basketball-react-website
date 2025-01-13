interface ApiProp {
  api: string;
}

const FetchApiJson = ({ api }: ApiProp): Promise<Response> => {
  return fetch(`${api}`, {
    method: "GET",
    headers: {
      method: "GET",
      "x-rapidapi-key": GetAPIKey(),
      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com", // Using environment variable for API key
    } as Record<string, string>,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error: ", error);
      throw error;
    });
};

const GetAPIKey = () => {
  "use client;";
  return process.env.NEXT_PUBLIC_NBA_PUBLIC_API_KEY;
};

export default FetchApiJson;
