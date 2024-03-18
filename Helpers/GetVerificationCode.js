const Mailjs = require("@cemalgnlts/mailjs");
const {sleep} = require("./GeneralHelpers");
const mailjs = new Mailjs();

async function GetVerificationCode(email, password) {

    try {


        let don = true;
        let verificationCode = ""
        await (async () => {
            while (don) {
                await sleep(1000)

                const loginEmailAccount = await mailjs.login(email, password)
                await mailjs.loginWithToken(loginEmailAccount?.data?.token)

                const mailList = await mailjs.getMessages()

                if (mailList.message.length > 0) {
                    const firstMail = mailList.data[0]
                    if (firstMail?.subject?.includes("verification code")) {
                        const messageData = await mailjs.getMessage(firstMail.id)
                        const matchCode = messageData?.data?.html[0].match(/Your confirmation code is (\d+)/)
                        verificationCode = matchCode[1]
                        don = false
                    }
                }

            }
        })();

        return {
            status: true,
            code: verificationCode
        }

    } catch (e) {
        console.log(e)
        return {
            status: false
        }
    }

}

module.exports.GetVerificationCode = GetVerificationCode;