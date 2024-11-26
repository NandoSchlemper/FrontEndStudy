import { router } from "./trpc"
import { userRouter } from "./routes/user"

export const AppRouter = router({
    user: userRouter
})