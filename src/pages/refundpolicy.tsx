/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/next-script-for-ga */
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>bSkilling Cancellation & Refund Policy</title>
        <meta name="bSkilling" content=" Refund Policy" />
        <meta name="p:domain_verify" content="7bb84546e514612864b5b9d71d1649e4" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3PVZC9K8BH"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3PVZC9K8BH');
          `,
        }}
      />

      <section className="bg-gray-100 text-gray-800 min-h-screen">
        {/* Banner */}
        <div className="relative w-full h-64 md:h-72 overflow-hidden">
          <img
            src="/carosel/ban5.png"
            alt="Refund Policy"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-4xl font-bold drop-shadow-lg text-center">
              Cancellation & Refund Policy
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-6 py-12 space-y-8 prose prose-slate">
          <section>
            <h2>For Self-Placed Learning</h2>
            <p>
              You can request a refund for a course within <strong>7 days of purchase</strong>. If
              you have accessed more than <strong>25%</strong> of the course content or downloaded
              the ebook, you will not be eligible for a refund.
            </p>
          </section>

          <section>
            <h2>For Instructor-Led Training</h2>
            <p>
              You may request a refund within 7 days. If more than 25% of content is accessed,
              classes attended, or ebook downloaded, refund will be declined.
            </p>
          </section>

          <section>
            <h2>University Partnered Programs / Bootcamps</h2>
            <p>
              Raise refund requests within 7 days from the class start date. Money-back guarantee is
              void after 7 days, even if class is unattended.
            </p>
          </section>

          <section>
            <h2>CSM, CSPO, PSM & PSPO Programs</h2>
            <ul className="list-disc pl-6 text-sm md:text-base">
              <li>bSkilling may postpone/cancel events due to low enrolment or force majeure.</li>
              <li>Full refund if cancelled by bSkilling and requested within 10 days.</li>
              <li>Rescheduling without extra cost after 10 days if bSkilling cancels.</li>
              <li>10% fee deducted if you cancel ≥10 business days in advance.</li>
              <li>No refund if cancellation {'<'}10 business days or no-show.</li>
            </ul>
          </section>

          <section>
            <h2>Refund requests can be made in two ways</h2>
            <p>
              <strong>Option 1:</strong> From <em>My Orders</em> → click “Initiate Refund” next to
              item. Only valid for single-item orders.
            </p>
            <p>
              <strong>Option 2:</strong> For multi-item orders, contact support via “Help &
              Support”.
            </p>
          </section>

          <section>
            <h2>Refund Processing Time</h2>
            <p>
              Approved refunds are credited to the original payment method within{' '}
              <strong>7–10 working days</strong>. Processing may vary by your bank/payment gateway.
            </p>
          </section>

          <section>
            <h2>Duplicate Payment Refunds</h2>
            <p>
              Duplicate payments will be refunded to the original source within 10 working days
              after customer informs support.
            </p>
          </section>

          <div className="text-xs text-gray-500 mt-4">
            bSkilling reserves the right to update this policy at any time without prior notice.
          </div>
        </div>
      </section>
    </>
  );
}
