import CCAvenue from '../../util/ccavenue';
import { useRouter } from 'next/router';

export default function Payment() {
  const host = 'https://www.bskilling.com/';
  const router = useRouter();

  const paymentCCAvenue = () => {
    let paymentData = {
      merchant_id: '2492757', // Merchant ID (Required)
      order_id: 'ORD1236', // Order ID - It can be generated from our project
      amount: '50', // Payment Amount (Required)
      currency: 'INR', // Payment Currency Type (Required)
      billing_email: 'test@gmail.com', // Billing Email (Optional)
      billing_name: 'test', // Billing Name (Optional)
      billing_address: '', // Billing Address (Optional)
      billing_city: '', // Billing City (Optional)
      billing_state: '', // Billing State (Optional)
      billing_zip: '', // Billing Zip (Optional)
      billing_country: 'India', // Billing COuntry (Optional)
      redirect_url: `https://vhvaj3urva7qpfnbbmqbswzbea0zqhrz.lambda-url.ap-south-1.on.aws/`, // Success URL (Required)
      cancel_url: `https://vhvaj3urva7qpfnbbmqbswzbea0zqhrz.lambda-url.ap-south-1.on.aws/`, // Failed/Cancel Payment URL (Required)
      merchant_param1: 'Extra Information', // Extra Information (Optional)
      merchant_param2: 'Extra Information', // Extra Information (Optional)
      merchant_param3: 'Extra Information', // Extra Information (Optional)
      merchant_param4: 'Extra Information', // Extra Information (Optional)
      language: 'EN', // Language (Optional)
      billing_tel: '', // Billing Mobile Number (Optional)
    };

    let encReq = CCAvenue.getEncryptedOrder(paymentData);
    let accessCode = 'AVHG70KE18CC51GHCC';
    let URL = `https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=${paymentData.merchant_id}&encRequest=${encReq}&access_code=${accessCode}`;
    router.push(URL);

    var form = document.createElement('form');
    // var element1 = document.createElement("input");
    // var element2 = document.createElement("input");

    form.method = 'GET';
    // form.action = `https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=${paymentData.merchant_id}&encRequest=${encReq}&access_code=${accessCode}`;

    // const accessKey = document.createElement("input");
    // accessKey.type = "hidden";
    // accessKey.name = "access_code";
    // accessKey.id = "access_code";
    // accessKey.value = "AVHG70KE18CC51GHCC";

    // form.appendChild(encRequst);
    // form.appendChild(accessKey);
    // document.body.appendChild(form);
    // form.submit();

    // window.location = URL;
    // window.location.replace(URL);
    // // window.location.reload();

    // window.location.assign(window.location.href);
    // setTimeout(() => {
    //   router.reload();
    // }, 2000);
  };

  return (
    <>
      <button onClick={paymentCCAvenue}>Pay Now</button>
    </>
  );
}
