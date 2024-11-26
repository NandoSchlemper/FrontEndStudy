import { router } from "../../trpc";
import { getUser } from "./services/getUser";

export const userRouter = router({
    getUser: getUser
})