import CCAvenue from '@/lib/CCAvenue';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { toast } from 'sonner';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      try {
        // Decrypt the Response Data from Request Body
        let data = CCAvenue.redirectResponseToJson(req.body.encResp);

        // Extract query parameters from request URL
        const { paymentId, courseId, userId, amount } = req.query;

        // Create redirect URL with query parameters
        const redirectParams = new URLSearchParams({
          paymentId: (paymentId as string) || data.order_id,
          courseId: (courseId as string) || '',
          userId: (userId as string) || '',
          amount: (amount as string) || data.amount,
        }).toString();

        // Handle Redirect as per Payment Status
        if (data.order_status === 'Success') {
          const updatePaymentStatus = async () => {
            try {
              const response = await axios.put(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/purchase-details/${paymentId}`,
                {
                  status: 'SUCCESS',
                }
              );

              // toast.success('Payment confirmed and updated.');
            } catch (error: any) {
              console.error('Error updating purchase:', error);
              // toast.error('Failed to update payment status.');
            }
          };
          await updatePaymentStatus();
          // If payment is successful, update the database here if needed
          // Example: await updatePaymentInDatabase(data.order_id, 'success', data);

          // Redirect to success page with parameters
          res.redirect(302, `/payment/success?${redirectParams}`);
        } else {
          // If payment failed, you might want to log the reason
          console.error('Payment failed:', data.order_status, data.failure_message);

          const updatePaymentStatus = async () => {
            try {
              const response = await axios.put(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/purchase-details/${paymentId}`,
                {
                  status: 'FAILED',
                }
              );

              // toast.success('Payment confirmed and updated.');
            } catch (error: any) {
              console.error('Error updating purchase:', error);
              // toast.error('Failed to update payment status.');
            }
          };
          await updatePaymentStatus();
          // Redirect to failure page with parameters
          res.redirect(
            302,
            `/payment/failed?${redirectParams}&reason=${encodeURIComponent(data.failure_message || 'Unknown error')}`
          );
        }
      } catch (error) {
        // Handling Errors if anything Issue/Problem while Payment
        console.error('Error processing CCAvenue request:', error);
        res.redirect(302, '/payment/failed?reason=processing_error');
      }
      break;

    // Handle GET requests - this is what will be called when redirected from CCAvenue
    case 'GET':
      try {
        // Extract query parameters
        const { paymentId, courseId, userId, amount } = req.query;

        // Forward these parameters to the success page
        const redirectParams = new URLSearchParams({
          paymentId: paymentId as string,
          courseId: courseId as string,
          userId: userId as string,
          amount: amount as string,
        }).toString();

        // Redirect to the success page with all parameters
        res.redirect(302, `/payment/success?${redirectParams}`);
      } catch (error) {
        console.error('Error handling redirect:', error);
        res.redirect(302, '/payment/failed?reason=redirect_error');
      }
      break;

    default:
      res.status(405).end('Method Not Allowed');
      break;
  }
}
// import CCAvenue from '@/lib/CCAvenue';

// export default async function handler(req: any, res: any) {
//   switch (req.method) {
//     case 'POST':
//       try {
//         // Decrypt the Response Data from Request Body
//         let data = CCAvenue.redirectResponseToJson(req.body.encResp);

//         // Handle Redirect as per Payment Status
//         if (data.order_status === 'Success') {
//           res.redirect(302, '/payment/success');
//         } else {
//           res.redirect(302, '/payment/failed');
//         }
//       } catch (error) {
//         // Handling Errors if anything Issue/Problem while Payment
//         console.error('Error processing CCAvenue request:', error);
//         res.redirect(302, '/payment/failed');
//       }
//       break;

//     default:
//       res.status(405).end('Method Not Allowed');
//       break;
//   }
// }
// // pages/api/ccavenue-handle.js
// import CCAvenue from '../../../util/ccavenue';
// export default async function handler(req, res) {
//   switch (req.method) {
//     case 'POST':
//       try {
//         // Decrypt the Response Data from Request Body
//         let data = CCAvenue.redirectResponseToJson(req.body.encResp);

//         // Handle Redirect as per Payment Status
//         if (data.order_status === 'Success') {
//           res.redirect(302, '/onboard/success');
//         } else {
//           res.redirect(302, '/onboard/failed');
//         }
//       } catch (error) {
//         // Handling Errors if anything Issue/Problem while Payment
//         console.error('Error processing CCAvenue request:', error);
//         res.redirect(302, '/onboard/failed');
//       }
//       break;

//     default:
//       res.status(405).end('Method Not Allowed');
//       break;
//   }
// }
// pages/api/ccavenue-handle.js
