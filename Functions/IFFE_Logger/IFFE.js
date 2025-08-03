import chalk from 'chalk';

function getTime() {
    return new Date().toLocaleString()
}

const logger = () => {
    let logRecords = []

    const info = (msg) => {
        console.log(chalk.blue(msg))
        logRecords.push({ message: msg, type: "info", time: getTime() })
    }
    const warning = (msg) => {
        console.log(chalk.yellow(msg))
        logRecords.push({ message: msg, type: "warning", time: getTime() })
    }
    const update = (msg) => {
        console.log(chalk.green(msg))
        logRecords.push({ message: msg, type: "update", time: getTime() })
    }
    const error = (msg) => {
        console.log(chalk.red(msg))
        logRecords.push({ message: msg, type: "error", time: getTime() })
    }
    const getlogs = () => {
        let size = logRecords.length
        console.log(chalk.cyan(`Current Logs (${size})`))
        if (size < 1) {
            console.log("Empty logs")
        }
        logRecords.forEach((log, i) => {

            console.log(`${i + 1}) ${log.message} (${log.time}) | ${log.type}  `)
        })
    }
    const clearLogs = () => {
        logRecords.length = 0
    }

    return {
        info,
        error,
        warning,
        update,
        getlogs,
        clearLogs
    }
}
let newLogger = logger()
newLogger.error("Something Went Wrong")
newLogger.info("Informative Message")
newLogger.update("New Update")
newLogger.warning("Warning Message")
newLogger.getlogs()
newLogger.clearLogs()
newLogger.getlogs()