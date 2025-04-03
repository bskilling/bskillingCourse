import Razorpay from 'razorpay';
import { NextRequest, NextResponse } from 'next/server';

const razorpay = new Razorpay({
  key_id: 'rzp_live_ut3CymoeapHYqB',
  key_secret: 'OHMl0eaUeKWN5YXd0zmWFErp',
});

export default async function handler(req: any, res: any) {
  console.log(req);
  if (req.method === 'POST') {
    //   const { amount, currency } = (await request.json()) as {
    //     amount: string;
    //     currency: string;
    //   };

    var options = {
      amount: req?.body?.amount,
      currency: 'INR',
      receipt: 'rcp1',
    };
    const order = await razorpay.orders.create(options);
    console.log(order);
    return res.status(200).json({ orderId: order.id }, { status: 200 });
  } else {
    res.status(500).json({ message: 'Internal Server Error' });
  }
  //   return NextResponse.json({ orderId: order.id }, { status: 200 });
}
