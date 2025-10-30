import { StandardCheckoutClient, Env, MetaInfo, StandardCheckoutPayRequest } from 'pg-sdk-node';
import { randomUUID } from 'crypto';

const clientId = '';
const clientSecret = '';
const clientVersion = 0.1;
//insert your client version here
const env = Env.SANDBOX; //change to Env.PRODUCTION when you go live

const client = StandardCheckoutClient.getInstance(clientId, clientSecret, clientVersion, env);

const merchantOrderId = randomUUID();
const amount = 100;
const redirectUrl = 'https://www.merchant.com/redirect';
const metaInfo = MetaInfo.builder().udf1('udf1').udf2('udf2').build();

const request = StandardCheckoutPayRequest.builder()
  .merchantOrderId(merchantOrderId)
  .amount(amount)
  .redirectUrl(redirectUrl)
  .metaInfo(metaInfo)
  .build();

client.pay(request).then(response => {
  const checkoutPageUrl = response.redirectUrl;
});
