import * as express from "express"
import { Request, Response, NextFunction } from "express"
import { User } from "./entity/User"
import { myDataSource } from './data-source'

// establish database connection
myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })
// create and setup express app
const app = express()
app.use(express.json())

// register routes
app.get("/users", async function (req: Request, res: Response) {
  const users = await myDataSource.getRepository(User).find()
  res.json(users)
})

app.get("/users/:id", async function (req: Request, res: Response) {
  const results = await myDataSource.getRepository(User).findOneBy({
    id: Number(req.params.id),
  })
  res.send(results)
})

app.post("/users", async function (req: Request, res: Response, next: NextFunction) {
  try {
    const user = await myDataSource.getRepository(User).create(req.body)
    const results = await myDataSource.getRepository(User).save(user)
    res.send(results)
  } catch (error) {
    next(error)
  }
})

app.put("/users/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await myDataSource.getRepository(User).findOneBy({
      id: Number(req.params.id),
    })
    myDataSource.getRepository(User).merge(user, req.body)
    const results = await myDataSource.getRepository(User).save(user)
    res.send(results)
  } catch (error) {
    next(error)
  }
})

app.delete("/users/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const results = await myDataSource.getRepository(User).delete(Number(req.params.id))
    res.send(results)
  } catch (error) {
    next(error)
  }
})

// start express server
app.listen(3000, () => {
  console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")
})