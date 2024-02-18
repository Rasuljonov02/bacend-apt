import jwt from "jsonwebtoken";
import { faker } from "@faker-js/faker";
import { Auth } from "./types";

export const data: any[] = [];

export function deleteResource(id: any) {
  const index = data.findIndex((item) => item.id === id);
  if (index !== -1) {
    data.splice(index, 1);
    return true;
  }
  return false;
}

export function Qosh(data1: Auth.Personam) {
  const newPersonam = data.find((item) => item.email === data1.email);

  if (!newPersonam) {
    const newData1 = { ...data1, id: faker.string.uuid(), soat: new Date().toLocaleString() };
    data.push(newData1);
    return newData1;
  }
  return "bor";
}

const secretKey = "x-auth-token";

export function logIn(data1: Auth.logIn) {
  const tekshir = data.find((item) => {
    return item.email === data1.email && item.password === data1.password;
  });

  if (tekshir) {
    const token = generateToken(tekshir);
    return { user: { ...tekshir, token } };
  }

  return "chiqmadi";
}

function generateToken(user: any) {
  const token = jwt.sign({ Id: user.id, lastname: user.lastname }, secretKey);
  return token;
}
