import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SongService {
  db: PrismaService;
  constructor(db: PrismaService) {
    this.db = db;
  }

  create(createSongDto: CreateSongDto) {
    return this.db.steaming.create({
      data: createSongDto
    })
  }

 async findAll() {
    return this.db.steaming.findMany();

  }

  findOne(id: number) {
    return this.db.steaming.findUnique({
      where: { id: id }
    })
  }

 async update(id: number, updateSongDto: UpdateSongDto) {
    try {
      return await this.db.steaming.update({
        data: updateSongDto,
        where: { id }
      })
    } catch {
      return undefined;
    }
  }

  async remove(id: number) {
    try {
      await this.db.steaming.delete({
        where: { id }
      })
      return true;
    } catch {
      return false;
    }
  }
   freesong(){
      return this.db.steaming.findMany({

          where: {ar:0}

      })
  }
  }


