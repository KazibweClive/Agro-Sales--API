
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

 async function getUsers(req, res){
       const users = await prisma.user.findMany()
       res.send(users  )
    // res.send("Here are the users")
}

module.exports = getUsers;