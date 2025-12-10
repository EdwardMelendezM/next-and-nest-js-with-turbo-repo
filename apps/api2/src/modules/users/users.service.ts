import { prisma } from "../../core/prisma";

export class UsersService {
  async findAll() {
    return prisma.user.findMany();
  }

  async update(id: number, data: any) {
    return prisma.user.update({
      where: { id },
      data,
    });
  }
}
