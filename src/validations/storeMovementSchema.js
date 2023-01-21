import Joi from "joi";
import { validator } from "./validator.js";

const storeMovementSchema = Joi.object({
	description: Joi.string().required(),
	value: Joi.number().required(),
});

export const validateStoreMovementSchema = validator(storeMovementSchema);