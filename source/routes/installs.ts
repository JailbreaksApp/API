// imports
import { handleVersion, handleNoVersion } from '../utils/installs.js'
import { FastifyRequest, FastifyReply } from 'fastify'

// declare install route
export const installRoute = (fastify, opts, next) => {
    // endpoint to install app without version
    fastify.get('/install/:appName', (request: FastifyRequest, reply: FastifyReply) => {
            // get name from parameters
            let name = request.params['appName']
            // send to handler
            handleNoVersion(name, request, reply)
        }
    )

    // endpoint to install app with version
    fastify.get('/install/:appName/:appVersion', (request: FastifyRequest, reply: FastifyReply) => {
            // get name and version from parameters
            let name = request.params['appName'],
                version = request.params['appVersion']
            // send to handler
            handleVersion(name, version, request, reply)
        }
    )

    // move to next route
    next()
}
