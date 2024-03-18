const {appendFileSync, existsSync, writeFileSync} = require("fs")

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

function addAccount(email, password, userSub) {
    if (!existsSync("accounts/accounts.txt")) {
        writeFileSync("accounts/accounts.txt", "")
    }
    appendFileSync("accounts/accounts.txt", `\n${email}:${password}:${userSub}`)
}

module.exports.sleep = sleep;
module.exports.addAccount = addAccount;