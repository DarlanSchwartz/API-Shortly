import joi from 'joi';

export const URLSchema = joi.object({
    url: joi.string().required(),
})
