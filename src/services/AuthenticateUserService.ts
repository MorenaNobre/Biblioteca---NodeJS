//classe reponsável por autenticar o usuário para

import { getCustomRepository } from "typeorm";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepositories = getCustomRepository(UsersRepositories);

    //verificar se email existe
    const user = await userRepositories.findOne({ email });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    //verificar se senha está correta
    //pega senha que o usuario criou e compara com a senha com hash
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    //gerar token
    const token = sign(
      {
        email: user.email,
      },
      "ed5e93c7a26a1259f64c8086fa06d8e2",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
