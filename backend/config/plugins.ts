export default () => ({
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: false,
      defaultLimit: 18,
      maxLimit: 30,
      apolloServer: {
        tracing: true,
      },
    }
  }
})