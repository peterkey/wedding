import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdHome } from "react-icons/md";

const PrivacyPolicy = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-3xl font-semibold mb-4'>Privacy Policy</h2>
      <p className='mb-4'>
        <h2 className='text-lg font-semibold mb-4'>Contact Information</h2>
        <ul className='space-y-2'>
          <li className='flex items-center'>
            <MdPhone className='mr-2' />
            <span>Peter: +447711233307 // Jessica: +447511860750</span>
          </li>
          <li className='flex items-center'>
            <MdEmail className='mr-2' />
            <span>williamskeywedding@gmail.com</span>
          </li>
          <li className='flex items-center'>
            <MdHome className='mr-2' />
            <span>25 Heol Y Gylfinir, Llanilid, Pontyclun, CF72 4AX</span>
          </li>
        </ul>
      </p>

      <h3 className='text-2xl font-semibold mb-2'>Sharing of Personal Data</h3>
      <p className='mb-4'>
        We may share your personal data with third-party service providers to facilitate various aspects of our
        services. Specifically, your full names, age ranges, and dietary requirements may be shared with Hensol Castle
        for the purpose of event planning and catering arrangements. Please note that we only share the necessary
        information required to fulfil these services, and we ensure that these third parties are compliant with data
        protection regulations.
      </p>

      <h3 className='text-2xl font-semibold mb-2'>Security Measures</h3>
      <p className='mb-4'>
        We take the security of your personal data seriously and have implemented appropriate technical and
        organizational measures to protect it against unauthorized access, alteration, disclosure, or destruction. This
        includes but is not limited to encryption, access controls, and regular security assessments.
      </p>

      <h3 className='text-2xl font-semibold mb-2'>Retention Period</h3>
      <p className='mb-4'>
        We will retain your personal data only for as long as necessary to fulfil the purposes outlined in this privacy
        policy or as required by law. Once the data is no longer needed, it will be securely deleted or anonymized to
        prevent identification.
      </p>

      <h3 className='text-2xl font-semibold mb-2'>Your Rights</h3>
      <p className='mb-4'>
        You have certain rights regarding your personal data, including the right to access, correct, or delete it. If
        you wish to exercise any of these rights or have any questions about how we handle your personal data, please
        contact us using the details provided at the top of this privacy policy.
      </p>

      <h3 className='text-2xl font-semibold mb-2'>Consent</h3>
      <p className='mb-4'>
        By using our website and providing your personal data, you consent to the collection, processing, and sharing of
        your information as described in this privacy policy. You have the right to withdraw your consent at any time by
        contacting us using the details provided above. However, please note that withdrawing consent may affect the
        availability or functionality of certain features of our website.
      </p>

      <h3 className='text-2xl font-semibold mb-2'>Cookies</h3>
      <p className='mb-4'>
        We use cookies and similar tracking technologies to enhance your browsing experience and analyze website
        traffic. These cookies may collect information such as your IP address, browser type, and pages visited. You can
        manage your cookie preferences through your browser settings or by using the cookie consent banner on our
        website.
      </p>

      <h3 className='text-2xl font-semibold mb-2'>Data Transfers</h3>
      <p className='mb-4'>
        Please be aware that your personal data may be transferred to and processed in countries outside the European
        Economic Area (EEA) or the United Kingdom, where data protection laws may not provide the same level of
        protection as in your home country. However, we will take all necessary measures to ensure that any such
        transfers comply with applicable data protection laws and that adequate safeguards are in place to protect your
        personal data.
      </p>

      <h3 className='text-2xl font-semibold mb-2'>Changes to this Privacy Policy</h3>
      <p className='mb-4'>
        We reserve the right to update or modify this privacy policy at any time, so please review it periodically. Any
        changes will be effective immediately upon posting the updated privacy policy on our website. Your continued use
        of our website after any such changes constitutes your acceptance of the revised privacy policy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
