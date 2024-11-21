import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
 for(let i=0;i<50; i++){
  await prisma.steaming.create({
    data:{
       cim:"cim"+i,
       szero:"szero"+i,
       Hossz:i,
       ar:i

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
