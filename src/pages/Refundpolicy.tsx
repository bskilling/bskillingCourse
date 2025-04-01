/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/next-script-for-ga */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>bSkilling Cancellation &amp; Refund Policy</title>
        <meta name="bSkilling" content=" Refund Policy" />

        <meta
          name="p:domain_verify"
          content="7bb84546e514612864b5b9d71d1649e4"
        />
        <link rel="icon" href="/favicon.png" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3PVZC9K8BH"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3PVZC9K8BH');
            `,
          }}
        />
      </Head>
      <section className="bg-gray">
        <section className="md:container pt-10 h-fit  mx-auto">
          <div className="w-full h-72  relative ">
            <img
              className="brightness-50 w-full h-72 object-cover"
              alt="ser"
              src="/carosel/ban5.png"
            />
            <div className="absolute   h-72 inset-0">
              <p className="text-3xl w-full h-full mt-28 font-semibold   text-white    text-center font-SourceSans ">
                Cancellation &amp; Refund Policy
              </p>
            </div>
          </div>
          {/* <div className="w-full h-80 object-cover relative ">
          <Image
            layout="fill"
            className="brightness-50"
            alt="ser"
            src="/carosel/ban5.png"
            objectFit="cover "
            unoptimized={true}
          />
          <div className="w-full    h-full  flex  justify-center">
            <div className="text-white relative    h-full flex flex-col justify-center items-center">
              <p className="text-3xl font-semibold mt-5   text-center font-SourceSans  ">
                Cancellation &amp; Refund Policy
              </p>

             
            </div>
          </div>
        </div> */}

          <div className="mb-5 md:p-0 p-8 mt-8">
            <div>
              <p className="text-xl font-semibold">For Self-Placed Learning:</p>
              <p className="mt-2  md:ml-6">
                You can request a refund for a course within 7 days of purchase.
                If you have accessed more than 25% of the course content or
                downloaded the ebook, you will not be eligible for a refund.
                Refund requests received after 7 days will not be processed.
              </p>
            </div>

            <div className="mt-4">
              <p className="text-xl font-semibold">
                For Instructor-Led Training:
              </p>
              <p className="mt-1  md:ml-6">
                You can request a refund for an e-learning course within 7 days
                of purchase. However, if you have accessed more than 25% of the
                course content, attended online classrooms or received
                recordings for more than 1 day, or downloaded the e-book, you
                will not be eligible for a refund. Refund requests received
                after 7 days will not be processed.
              </p>
            </div>

            <div className="mt-4">
              <p className="text-xl font-semibold">
                University Partnered Programs /Bootcamps:
              </p>
              <p className="mt-1  md:ml-6">
                Raise refund requests within 7 days from the start date of the
                regular class (Live or Recorded as the case may be) whether
                attended or not. The Money- back guarantee is void if the
                participant raises any refund request beyond 7 days from the
                regular class.
              </p>
            </div>

            <div className="mt-4">
              <p className="text-xl font-semibold">
                Cancellation &amp; Refunds: For CSM, CSPO, PSM, and PSPO
                programs
              </p>

              <div className="flex md:ml-6">
                {' '}
                <span className="mr-2 mt-2">‣</span>{' '}
                <p className="mt-2 ">
                  bSkilling may postpone, cancel, or change the location of an
                  event due to insufficient enrolment, instructor illness, or
                  force majeure events (such as floods, earthquakes, political
                  instability, etc.)
                </p>
              </div>

              <div className="flex md:ml-6">
                {' '}
                <span className="mr-2 mt-2">‣</span>{' '}
                <p className="mt-2 ">
                  If bSkilling cancels an event, 100% of the course fees will be
                  refunded to the delegate if the refund request is made within
                  10 days of purchase. However, travel, logistics, or any
                  personal expenses incurred by learners/participants will not
                  be refunded
                </p>
              </div>

              <div className="flex md:ml-6">
                {' '}
                <span className="mr-2 mt-2">‣</span>{' '}
                <p className="mt-2 ">
                  If bSkilling postpones/cancels an event, participants who
                  purchased the course more than 10 days ago will be rescheduled
                  to the next available batch without any additional charges
                </p>
              </div>

              <div className="flex md:ml-6">
                {' '}
                <span className="mr-2 mt-2">‣</span>{' '}
                <p className="mt-2 ">
                  If a delegate cancels their participation in an event 10
                  business days (or more) prior to the event, 10% of the total
                  paid fee will be deducted and the remaining amount will be
                  refunded to the delegate
                </p>
              </div>

              <div className="flex md:ml-6">
                {' '}
                <span className="mr-2 mt-2">‣</span>{' '}
                <p className="mt-2 ">
                  All materials are copyrighted by bSkilling or its partners
                </p>
              </div>

              <div className="flex md:ml-6">
                {' '}
                <span className="mr-2 mt-2">‣</span>{' '}
                <p className="mt-2 ">
                  If a delegate cancels their participation in an event within
                  10 business days (or less) of the event, no refunds will be
                  made
                </p>
              </div>

              <div className="flex md:ml-6">
                {' '}
                <span className="mr-2 mt-2">‣</span>{' '}
                <p className="mt-2 ">
                  No refunds or credits will be given to participants who do not
                  attend both days of the course
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xl font-semibold">
                Refund requests can be made in two ways:
              </p>
              <p className="mt-2 md:ml-6">
                From the &quot;My Orders&quot; section of the website, by
                clicking on &quot;Initiate Refund&quot; next to the specific
                item in the order. This method can only be used for orders with
                one item. If the order has more than one item, please contact
                the support team through the &quot;Help &amp; Support&quot;
                section of the website.
              </p>
            </div>

            <div className="mt-4 pb-8">
              <p className="text-xl font-semibold">
                Refunds: Duplicate payment
              </p>
              <p className="mt-2 md:ml-6">
                Refund of the duplicate payment made by the delegate will be
                processed via the same source (original method of payment) in 10
                working days post intimation by the customer. bSkilling reserves
                the right to revise the terms &amp; conditions of this policy
                without any prior notice.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
