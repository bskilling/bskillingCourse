import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const generatedSignature = (razorpayOrderId: string, razorpayPaymentId: string) => {
  const keySecret = 'OHMl0eaUeKWN5YXd0zmWFErp';
  if (!keySecret) {
    throw new Error('Razorpay key secret is not defined in environment variables.');
  }
  const sig = crypto
    .createHmac('sha256', keySecret)
    .update(razorpayOrderId + '|' + razorpayPaymentId)
    .digest('hex');
  return sig;
};

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { orderCreationId, razorpayPaymentId, razorpaySignature } = req.body;
    console.log(req.body);

    // {
    //     orderCreationId: 'order_OyBc2uM2u0cMtE',
    //     razorpayPaymentId: 'pay_OyBcAwIjZIXqOC',
    //     razorpayOrderId: 'order_OyBc2uM2u0cMtE',
    //     razorpaySignature: '850aff44ded6d12f2c944ecd8ecf9224039ce5522ab68b5607e34f8642b9a83b'
    //   }
    const signature = generatedSignature(orderCreationId, razorpayPaymentId);

    console.log(signature);
    if (signature !== razorpaySignature) {
      return res
        .status(400)
        .json({ message: 'payment verification failed', isOk: false }, { status: 400 });
    }
    return res
      .status(200)
      .json({ message: 'payment verified successfully', isOk: true }, { status: 200 });
  } else {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
