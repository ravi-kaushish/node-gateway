const gateway = {
  start: () => {
    let serverConfig = true
    if (!serverConfig) {
      console.log('Gateway Server COnfig Not Available, stopping gateway.')
    }

    // Enabling Logging if user OPTS
    if (process.env.ENABLE_HTTP_LOGGING) {
      app.use(Logger)
    }
    // Enabling Authentication if user OPTS
    if (process.env.AUTHENTICATION === 'enabled') {
      app.use(Auth)
    }

    // Enabling Rate Limiting if user OPTS
    if (process.env.ENABLE_HTTP_LOGGING) {
      app.use(RateLimiter)
    }
  },
  restart: () => {
    //
    console.log('Restarting gateway...')
  },
  loadConfig: () => {}
}

module.exports = gateway
