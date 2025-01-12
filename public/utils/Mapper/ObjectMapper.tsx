import Model from "@/app/models/Model";

export default interface ObjectMapper {
  map(data: Response): Model;
}
