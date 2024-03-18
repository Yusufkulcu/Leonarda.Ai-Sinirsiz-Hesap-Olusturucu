const axios = require("axios")

async function CreateAccount(email, password) {
    try {
        const request = await axios.post('https://app.leonardo.ai/api/auth/signup', {
            'email': email, 'password': password
        }, {
            headers: {
                'host': 'app.leonardo.ai',
                'connection': 'keep-alive',
                'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
                'content-type': 'application/json',
                'baggage': 'sentry-environment=production,sentry-release=22f194f5ae1a7a0ab618623e666934e2fcb08f47,sentry-public_key=a851bd902378477eae99cf74c62e142a,sentry-trace_id=651bff0af230419c9324c7e59418ac14',
                'sec-ch-ua-mobile': '?0',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
                'sentry-trace': '651bff0af230419c9324c7e59418ac14-aee0990887aeb796-0',
                'sec-ch-ua-platform': '"Windows"',
                'accept': '*/*',
                'origin': 'https://app.leonardo.ai',
                'sec-fetch-site': 'same-origin',
                'sec-fetch-mode': 'cors',
                'sec-fetch-dest': 'empty',
                'referer': 'https://app.leonardo.ai/auth/login',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
                'cookie': '_ga=GA1.1.913304704.1710773178; _gcl_au=1.1.826997831.1710773178; __Host-next-auth.csrf-token=b7b1a87e3ec74e10a5d46c584850325393d29379171539616f609cf9e8a69579%7Ca56780839be826f51ac7fa39956d4ab373c922633b38e54247b0670ca4b9f748; _hp2_id.2928600800=%7B%22userId%22%3A%225531889522668963%22%2C%22pageviewId%22%3A%224619432195660243%22%2C%22sessionId%22%3A%228438482091448902%22%2C%22identity%22%3Anull%2C%22trackerVersion%22%3A%224.0%22%7D; _fbp=fb.1.1710773178274.1161173897; _hp2_ses_props.2928600800=%7B%22ts%22%3A1710773178176%2C%22d%22%3A%22app.leonardo.ai%22%2C%22h%22%3A%22%2Fauth%2Flogin%22%7D; intercom-id-xc8vmlt4=1a929530-e0e8-46e1-a784-2869793264f1; intercom-session-xc8vmlt4=; intercom-device-id-xc8vmlt4=6d69831c-60ae-4b34-8776-7c73ce19177c; _ga_4J9ZXN1KG8=GS1.1.1710773177.1.1.1710774393.60.0.0; __Secure-next-auth.callback-url=https%3A%2F%2Fapp.leonardo.ai%2F'
            }
        });

        const response = request.data

        if (!response?.UserSub) {
            return {
                status: false,
                message: "Hesap oluşturulamadı",
                leonardaResponseMessage: response?.message
            }
        }

        return {
            status: true,
            message: "Hesap oluşturuldu",
            email: email,
            password: password,
            userSub: response?.UserSub
        }

    } catch (error) {
        return {
            status: false, message: "Hesap oluşturulamadı", leonardaResponseMessage: error?.response?.data?.message,
        }
    }

}

module.exports.CreateAccount = CreateAccount;