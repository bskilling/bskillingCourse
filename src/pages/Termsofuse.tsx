/* eslint-disable @next/next/next-script-for-ga */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function TermOfUse() {
  return (
    <>
      <Head>
        <title>bSkilling Terms Of Use</title>
        <meta name="bSkilling" content=" Terms Of Use" />
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
                Terms and Conditions
              </p>
            </div>
          </div>
          <div className="mb-5 md:p-0 p-8 mt-8">
            <div>
              <p className="text-xl font-semibold">
                1. Acceptance of this Agreement
              </p>
              <p className="mt-2 md:ml-6">
                {`These terms and conditions ("Terms and Conditions") govern your
                use of this website ("Website").`}
                <br /> Definitions: <br />
                In these Terms and Conditions, “bSkilling” is referred to as the
                “Company,” “us,” or “we.” <br />
                “You” refers to a user or a paying customer. If you are a
                company or another entity that provides access to our products,
                your access is subject to these Terms and Conditions.
                <br /> By using or accessing the Website or any services
                provided by the Company (collectively referred to as “Company
                Products”), you agree to the terms and conditions outlined here.
                If you do not accept these terms, you are not authorized to use
                the Website or its services
              </p>
            </div>

            <div className="mt-4">
              <p className="text-xl font-semibold">Acceptance of Agreement</p>

              <div className="flex md:ml-6">
                <p className="mt-2 ">
                  By accessing this Website and using our Products, you agree
                  that you have read, understood, and are bound by these Terms
                  and Conditions and our Privacy Policy. If you do not accept
                  these Terms, you must refrain from using the Website and
                  Company Products.
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xl font-semibold">Website Usage Guidelines</p>

              <div className="flex md:ml-6">
                <p className="mt-2 ">
                  1. Do not use the Website for unlawful activities.
                  <br />
                  2. Avoid actions that harass, abuse, threaten, or infringe the
                  rights of others.
                  <br />
                  3. Do not post or share defamatory, offensive, or unlawful
                  content.
                  <br />
                  4. Respect intellectual property rights by not copying or
                  redistributing content without permission.
                  <br />
                  5. Do not attempt to hack, reverse-engineer, or manipulate the
                  Website or its infrastructure.
                  <br />
                  6. Refrain from spamming, advertising, or sharing unauthorized
                  links.
                  <br />
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xl font-semibold">
                User Account Responsibilities
              </p>

              <div className="flex md:ml-6">
                {' '}
                <span className="mr-2 mt-2">I.</span>{' '}
                <p className="mt-2 ">
                  1. Your login credentials (“Participant Account”) are for your
                  exclusive use. Sharing is prohibited.
                  <br />
                  2. You are responsible for maintaining the confidentiality of
                  your account and for all activities that occur under it.
                  <br />
                  3. Notify our support team immediately if you suspect
                  unauthorized access.
                  <br />
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xl font-semibold">Content and Courseware</p>
              <p className="mt-2 md:ml-6">
                1. As part of our services, you will have access to course
                materials in various formats (audio, video, text, etc.). <br />
                2. We may update or revise course content, and additional fees
                may apply for access to updated content. <br />
                3. Free courses provide limited access, and their terms are
                subject to change without notice. <br />
                4. Unauthorized distribution, reproduction, or commercial use of
                course materials is prohibited. <br />
              </p>
            </div>

            <div className="mt-4">
              <p className="text-xl font-semibold">Transaction Terms</p>
              <p className="mt-2 md:ml-6">
                1. Payments are required for transactions on the Website. Verify
                your payment details before completing a purchase.
                <br />
                2. Certain courses or products may have additional terms, which
                will be communicated prior to purchase.
                <br />
                3. All sales are final, and pricing is subject to change without
                notice.
                <br />
              </p>
            </div>

            <div className="mt-4">
              <p className="text-xl font-semibold">
                Intellectual Property Rights
              </p>
              <p className="mt-2 md:ml-6">
                1. The Website, its services, and all course content are owned
                by bSkilling and protected under intellectual property laws.
                <br />
                2. You are granted a limited, non-transferable license to use
                the content solely for personal, non-commercial purposes.
                <br />
              </p>
            </div>

            <div className="mt-4">
              <p className="text-xl font-semibold">Limitation of Liability</p>
              <p className="mt-2 md:ml-6">
                1. The Company is not responsible for any errors, interruptions,
                or inaccuracies in the Website’s content or services.
                <br />
                2. We are not liable for damages arising from the use or
                inability to use the Website, services, or content.
                <br />
              </p>
            </div>

            <div className="mt-4">
              <p className="text-xl font-semibold">Indemnification</p>

              <div className="flex md:ml-6">
                {' '}
                <p className="mt-2 ">
                  You agree to indemnify and hold harmless bSkilling, its
                  affiliates, and employees from any claims, damages, or
                  liabilities arising from your use of the Website or violation
                  of these Terms.
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xl font-semibold">
                Amendments and Termination
              </p>
              <p className="mt-2 md:ml-6">
                1. The Company reserves the right to modify these Terms without
                prior notice. Changes will be posted on the Website.
                <br />
                2. Continued use of the Website constitutes acceptance of any
                modified Terms.
                <br />
                3. We may terminate or restrict access to the Website and its
                services for violations of these Terms.
                <br />
              </p>
            </div>

            <div className="mt-4">
              <p className="text-xl font-semibold">
                Governing Law and Jurisdiction
              </p>
              <p className="mt-2 md:ml-6">
                For users residing in India, these Terms shall be governed by
                the laws of India, and disputes shall be subject to the
                jurisdiction of courts in Bangalore, India. For users outside
                India, applicable local laws will govern these Terms.
              </p>
            </div>

            <div className="mt-4">
              <p className="text-xl font-semibold">12. Severability</p>
              <p className="mt-2 md:ml-6">
                The remainder of this Agreement will still be applicable if any
                portion is declared invalid or unenforceable under Indian law.
                The invalid or unenforceable clause will be replaced by a
                legitimate provision that as closely as possible reflects the
                parties&#39; intentions.
              </p>
            </div>

            <div className="mt-4">
              <p className="text-xl font-semibold">Grievance Redressal</p>
              <p className="mt-2 md:ml-6">
                If you have concerns or queries, please contact our Grievance
                Officer. We aim to address all grievances promptly. You can
                reach us via email at{' '}
                <a href="mailto:grievanceofficer@bskilling.com">
                  grievanceofficer@bskilling.com
                </a>
                .
              </p>
            </div>

            <div className="mt-4 mb-12 pb-8">
              {/* <p className="text-xl font-semibold">15. Query Redressal</p> */}
              <p className="mt-2 md:ml-6">
                Thank you for choosing bSkilling. We strive to provide you with
                the best learning experience.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
