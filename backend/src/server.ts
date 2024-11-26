import Fastify from 'fastify';
import cors from '@fastify/cors'
import {fastifyTRPCPlugin} from '@trpc/server/adapters/fastify'
import { AppRouter } from './api';

const server = Fastify()

server.register(cors)

server.register(fastifyTRPCPlugin, {
    prefix: '/api',
    trpcOptions: {router: AppRouter}
})

server.listen({ port: 4000 }, () => {
    console.log('🚀 Servidor rodando em http://localhost:4000')
})