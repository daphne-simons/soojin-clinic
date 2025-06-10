import { myDataSource } from "./data-source"
import { User } from "./entity/User"

myDataSource.initialize().then(async () => {

  console.log("Inserting a new user into the database...")
  const user = new User()
  user.firstName = "Timber"
  user.lastName = "Saw"
  user.age = 25
  await myDataSource.manager.save(user)
  console.log("Saved a new user with id: " + user.id)

  console.log("Loading users from the database...")
  const users = await myDataSource.manager.find(User)
  console.log("Loaded users: ", users)

  console.log("Here you can setup and run express / fastify / any other framework.")

  const firstUser = await myDataSource.manager
    .createQueryBuilder(User, "user")
    .where("user.id = :id", { id: 1 })
    .getOne()

  console.log(firstUser)
}).catch(error => console.log(error))


