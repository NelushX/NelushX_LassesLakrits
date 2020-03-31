require("dotenv").config();

// process.env.varnamnet

const config = {
    // databaseUrl: "mongodb+srv://HannaGoldhammer:Hanna123@cluster0-kimns.mongodb.net/lasseslakrits?retryWrites=true&w=majority"
    databaseUrl: process.env.DATABASE,
    mail: process.env.MAIL
}

module.exports = config;