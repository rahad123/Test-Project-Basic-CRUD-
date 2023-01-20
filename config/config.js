module.exports = {
    app: {
        platform: 'Test-1',
        name: process.env.APP_NAME ?? 'Test-1',
        port: process.env.PORT ?? 3001,
        environment: process.env.NODE_ENV ?? 'dev'
    },
    db: {
        uri: process.env.MONGO_URI ?? 'mongodb://localhost:27017/Test-1' 
    },
}