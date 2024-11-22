import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';
import { connect } from 'http2';
const prisma = new PrismaClient()
async function main() {
 for(let i=0;i<50; i++){
  await prisma.steaming.create({
    data:{
      cim: faker.music.songName(),
      szero: faker.music.artist(),
      Hossz: faker.number.int({ min: 60, max: 150 }),
      ar: faker.number.int({ min: 60, max: 150 }),
      rate: faker.number.float({ min: 1, max: 5 })

    }
  })
 }
 for(let i=0;i<10;i++){
    await prisma.playlist.create({
      data:{

        name:faker.music.album(),
        songs:{
          connect:{
            id:i+1
          }
        }
      }
      
    })
 }
 
 
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
