import Joi from 'joi';

const id = Joi.string().uuid();
const nombres = Joi.string().min(4).max(30);
const email = Joi.string().email();
const password = Joi.string();

export const createUsuarioSchema = Joi.object({
    id: id,
    nombres: nombres.required(),
    email: email.required(),
    password: password.required()
});

export const updateUsuarioSchema = Joi.object({
    nombres: nombres,
    email: email,
    password: password
});

export const getUsuarioSchema = Joi.object({
    id: id.required()
})