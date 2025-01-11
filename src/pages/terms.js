import Layout from "../components/layout";
import React from "react";

const TermsAndConditions = () => {
  return (
    <Layout>
    <div className="text-gray-100 bg-gray-800 min-h-screen px-4 sm:px-8 lg:px-16 py-8">
      <div className="max-w-4xl mx-auto bg-gray-900  shadow-md rounded-md p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-gray-400 mb-6">
          Thank you for using <strong>https://votefave.com</strong>. The Site and Services accessed through
          the Site are possessed and operated by Apps and Mobile.
        </p>
        <p className="text-gray-400 mb-6">
          Please read these Terms of Use carefully as these Terms govern your utilization of the Site and our Services. By accessing our Services or any information, content, or materials accessible through the Site, you agree to be subject to these Terms. If you do not agree to any of these Terms, you may not utilize our Services, and you must suspend your use of our Site.
        </p>
        <p className="text-gray-400 mb-8">To contact us, please visit our Contact page.</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">About Us</h2>
          <p className="text-gray-400">
            We provide an online platform as a service that enables individuals and organizations to run
            voting and filing of nomination events. We ensure confidentiality in online voting and nomination filing processes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>
          <p className="text-gray-400">
            When you agree to these Terms, you are also agreeing to our Privacy Policy, which can be found{" "}
            <a href="#" className="text-blue-500 underline">here</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">How It Works</h2>
          <ul className="list-disc list-inside text-gray-400 mb-4">
            <li><strong>Owners:</strong> Individuals or Vote Fave company creating the voting setup.</li>
            <li><strong>Event Organizers:</strong> Individuals or organizations patronizing our services.</li>
            <li><strong>Participants:</strong> Individuals or organizations casting ballots via Mobile Money, Visa/MasterCard, or PayPal.</li>
          </ul>
          <p className="text-gray-400">
            Owners and Event Organizers must sign a Service Agreement for an account/setup.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">License</h2>
          <p className="text-gray-400">
            Subject to these Terms, you are granted a non-exclusive, non-transferable, limited license to access and use our online platform as a service, as agreed and signed by both parties in a separate Services Agreement.
          </p>
        </section>
        {/* Payment Terms Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Payments Terms, Cancellation, and Refund Policy</h2>
          <p className="text-gray-400 mb-4">
            Payment processing services are provided by <a href="https://paystack.com/gh" className="text-blue-500 underline">Paystack</a>. The terms and conditions of those services apply to payments made using them.
          </p>
          <p className="text-gray-400 mb-2"><strong>Cancellation:</strong> Fraudulent transactions are canceled immediately upon detection. Receipt of payment does not guarantee that transactions cannot be reversed.</p>
          <p className="text-gray-400 mb-2"><strong>Refunds:</strong> Refunds are only issued if services were not delivered. Requests must be sent via email to votefave@gmail.com.</p>
        </section>

        {/* Prohibited Acts Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Prohibited Acts</h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>Modifying or reverse-engineering our Services.</li>
            <li>Disrupting our Services or networks.</li>
            <li>Transmitting unsolicited bulk emails (“Spam”).</li>
            <li>Uploading viruses or malicious code.</li>
          </ul>
        </section>

        {/* Dispute Resolution Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Dispute Resolution</h2>
          <p className="text-gray-400">
            Partners must attempt mediation before filing a lawsuit. Any legal disputes will fall under the jurisdiction of Ghana.
          </p>
        </section>

        {/* Repeat similar sections for each heading */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-400">
            For further inquiries, please contact us via email at{" "}
            <a href="mailto:votefave@gmail.com" className="text-blue-500 underline">
              votefave@gmail.com
            </a>{" "}
            or visit our Contact page.
          </p>
        </section>
      </div>
    </div>
    </Layout>
  );
};

export default TermsAndConditions;
