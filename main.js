const Mailjs = require("@cemalgnlts/mailjs");
const {CreateAccount} = require("./Helpers/CreateAccount");
const generator = require('generate-password');
const {GetVerificationCode} = require("./Helpers/GetVerificationCode");
const {VerificationEmail} = require("./Helpers/VerificationEmail");
const {addAccount, sleep} = require("./Helpers/GeneralHelpers");
const chalk = require("chalk");
const mailjs = new Mailjs();
const readline = require("readline");
const questionVariable = readline.createInterface({
    input: process.stdin, output: process.stdout,
});


function startApp() {
    console.clear();
    const options = ["Kaç adet hesap açılmasını istiyorsunuz ?", "> ",].join("\n");

    questionVariable.question(options, async function (index) {
        console.clear();
        if (isNaN(index)) {
            return startApp();
        }
        const optionIndex = parseInt(index);
        return startBot(optionIndex)
    });
}

async function startBot(numberOfAccounts) {
    let basarisiz = 0
    let basarili = 0
    await (async () => {
        let i = 0
        while (i < numberOfAccounts) {
            console.log(chalk.cyan("5 saniye bekleniyor"))
            await sleep(5000)
            console.log(chalk.cyan("Süre tamamlandı hesap açılıyor"))
            const createEmailAccount = await mailjs.createOneAccount();
            if (!createEmailAccount?.status) {
                console.log(chalk.red("Mail hesabı oluşturulamadı"))
                basarisiz++
            } else {
                const emailPassoword = createEmailAccount?.data?.password
                const email = createEmailAccount?.data?.username
                console.log(chalk.cyan(`Mail hesabı oluşturuldu : ${email}`))
                const password = generator.generate({
                    length: 20, numbers: true, lowercase: true, uppercase: true,
                })
                const createAccountRequest = await CreateAccount(email, password)
                if (createAccountRequest.status === true) {
                    console.log(chalk.cyan(`Leonarda.ai hesabı oluşturuldu, onay kodu bekleniyor : ${email}`))
                    const verificationCodeRequest = await GetVerificationCode(email, emailPassoword)
                    if (verificationCodeRequest.status === true) {
                        console.log(chalk.cyan(`Onay kodu geldi : ${verificationCodeRequest.code}`))
                        const VerificationEmailRequest = await VerificationEmail(email, password, verificationCodeRequest.code)
                        if (VerificationEmailRequest.status === true) {
                            basarili++
                            console.log(chalk.green(`Hesap oluşturuldu : ${email}`))
                            addAccount(email, password, createAccountRequest.userSub)
                        } else {
                            basarisiz++
                            console.log(chalk.red("Hesap doğrulanamadı"))
                        }
                    } else {
                        basarisiz++
                        console.log(chalk.red("Doğrulama kodu alınamadı"))
                    }
                } else {
                    basarisiz++
                    console.log(chalk.red("Leonarda.ai hesabı oluşturulamadı"))
                }
            }
            i++
        }
    })();
    console.log(chalk.green(`Hesaplar oluşturuldu. ${numberOfAccounts} adet hesap oluşturma işleminden ${basarili} adet hesap başarıyla oluşturuldu. ${basarisiz} adet hesap teknik bir hata nedeniyle oluşturulamadı.`))
    await sleep(5000)
    return startApp()
}

startApp()