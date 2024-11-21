import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaService } from '../prisma.service';
interface rename{
  artist:string
  numberofsongs:number
}
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
  findtop(count:string){
    return this.db.steaming.findMany({
      orderBy :{
        rate :'desc' 
        
      },
      take: parseInt(count)
    
      
      
    })
  }
    async author(){
    const z=await this.db.steaming.groupBy({
      by:['szero'] ,
      _count:{
        szero:true
      },
      orderBy:{
        _count :{
          szero:"desc" 
        }
      }
    })
      const results=z.map(item=>{

        return{ 
          author:item.szero,
          numberofsongs:item._count
        }
      })
      return results
  }
  }


