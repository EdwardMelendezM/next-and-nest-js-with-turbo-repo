import { prisma } from "../../core/prisma";
import bcrypt from "bcryptjs";

export class AuthService {
  async register(data: { email: string; password: string }) {
    const exists = await prisma.user.findUnique({
      where: { email: data.email }
    });

    if (exists) {
      throw new Error("Email already exists");
    }

    const hashed = await bcrypt.hash(data.password, 10);

    await prisma.user.create({
      data: {
        email: data.email,
        password: hashed,
      }
    });

    return { success: true };
  }

  async login(data: { email: string; password: string }) {
    const user = await prisma.user.findUnique({
      where: { email: data.email }
    });

    if (!user) throw new Error("Invalid email or password");

    const match = await bcrypt.compare(data.password, user.password);
    if (!match) throw new Error("Invalid email or password");

    return user;
  }
}
