import Model from "@/app/models/Model";

export default abstract class ObjectMapper {
  abstract map(data: Response): Model;
}
