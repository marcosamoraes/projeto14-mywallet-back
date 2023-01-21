import dayjs from "dayjs";

export class Movement {
  constructor(user_id, description, value, type) {
    this.user_id = user_id;
    this.description = description;
    this.value = value;
    this.type = type;
    this.date = dayjs().format();
  }
}