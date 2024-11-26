import { TRPCError } from "@trpc/server";
import { procedure } from "../../../trpc";

export const getUser = procedure
    .query(() => {
        try {
            return {id: 1, name: 'Roberto'}
          } catch (err) {
            throw new TRPCError({code: 'BAD_REQUEST', message: 'Erro ao encaminhar dados do usuario'})
          }
    })

