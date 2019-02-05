const paystack = (request) => {
    const MySecretKey = 'pk_live_cd3e406ff0bd93ffa4eb3048b49e23145b31571c';

    const initializePayment = (form, mycallback) => {
        const options = {

            url: 'https://api.paystack.co/transaction/initialize',
            headers: {

                authorization: MySecretKey,

                'content-type': 'application/json',

                'cache-control': 'no-cache'

            },
            form
        }
        const callback = (error, response, body) => {

            return mycallback(error, body);

        }

        request.post(options, callback);

    }


    const verifyPayment = (ref, mycallback) => {
        const options = {
            url: 'https://api.paystack.co/transaction/verify/' + encodeURIComponent(ref),
            headers: {
                authorization: MySecretKey,
                'content-type': 'application/json',
                'cache-control': 'no-cache'
            }
        }
        const callback = (error, response, body) => {
            return mycallback(error, body);
        }
        request(options, callback);

    }

    return {initializePayment, verifyPayment};
}
module.exports = paystack;
