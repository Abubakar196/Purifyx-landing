import React from 'react'
import ContentCard from './ContentCard';
import ContentwithHeadings from './ContentWithHeading';
import ContentList from './ContentList';

const PrivacyContent = () => {

  const usagePoints = [
    "Providing, operating, and improving our Services.",
    "Accurately verifying and validating email addresses.",
    "Personalizing your user experience and responding to inquiries.",
    "Processing payments, managing billing, and maintaining subscriptions.",
    "Sending notifications about account activities, security alerts, or service updates.",
    "Ensuring compliance with legal obligations and enforcing our terms of service.",
    "Conducting research, analysis, and troubleshooting technical issues."
  ];
  const rightToChoice = [
    "The right to access, modify, or delete your personal information.",
    "The right to object to processing or request data portability.",
    "The right to withdraw consent if processing is based on consent.",
    "The right to restrict or limit certain types of data processing.",
    "The right to lodge a complaint with a relevant data protection authority.",
  ];
  const Links = [
    "purifyX.ai",
    "purifyX@gmail.com",
    "USA",
  ];

  const informationData = [
    { title: "Personal Information", content: "Your name, email address, phone number, company name, and other contact details that you provide." },
    { title: "Verification Data", content: "Email addresses submitted for verification, their status, timestamps, and other related metadata." },
    { title: "Usage Data", content: "Information about your interactions with our platform, such as IP addresses, browser type, device information, operating system, and session duration." },
    { title: "Payment Information", content: "If you subscribe to a paid plan, we collect payment details securely via third-party payment processors." },
    { title: "Communication Data", content: "Any emails, chat logs, support inquiries, or feedback you provide while interacting with our team." }
  ];

  const sharingData = [
    {
      title: "Service Providers",
      content: "We collaborate with third-party vendors for hosting, payment processing, analytics, and security."
    },
    {
      title: "Legal Compliance",
      content: "If required by law or to protect the rights, property, or safety of our users, employees, or the public."
    },
    {
      title: "Business Transfers",
      content: "In case of a merger, acquisition, or sale of assets, your data may be transferred as part of the transaction."
    },
    {
      title: "User Consent",
      content: "When you explicitly authorize data sharing with third parties."
    }
  ];

  return (
    <div className='px-8 sm:px-32 py-24 lg:px-64 lg:py-28 xl:px-[410px] xl:py-[160px]'>
        <ContentCard heading="Introduction">
            <p className='B2 text-[#646464]'>
            Welcome to Inbox Automation. Your privacy is important to us, and we are committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our email
            verification services. Please read this policy carefully to understand our views and practices regarding your data
            and how we will treat it.
            </p>
        </ContentCard>
        <ContentCard heading="Information We Collect">
            <ContentwithHeadings data={informationData} text1="We may collect and process the following types of information to provide and improve our Services:"/>
        </ContentCard>
        <ContentCard heading="How We Use Your Information">
            <ContentList data={usagePoints} text1="We use your information for various purposes, including but not limited to:"/>
        </ContentCard>
        <ContentCard heading="Data Sharing & Disclosure">
            <ContentwithHeadings data={sharingData} text1="We may collect and process the following types of information to provide and improve our Services:"/>
        </ContentCard>
        <ContentCard heading="Data Security">
            <p className='B3 text-[#646464]'>
            We implement industry-standard security measures, including encryption, access controls, and monitoring, to protect your
            information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is entirely secure,
            and we encourage users to take precautions to safeguard their information.
            </p>
        </ContentCard>
        <ContentCard heading="Your Rights & Choices">
            <ContentList data={rightToChoice} text1="Depending on your location, you may have certain rights regarding your data, including:" text2="To exercise any of these rights, please contact us using the details provided below."/>
        </ContentCard>
        <ContentCard heading="Cookies & Tracking Technologies">
            <p className='B3 text-[#646464]'>
            We use cookies, tracking pixels, and similar technologies to enhance user experience, measure performance, and analyze 
            website traffic. You can modify your cookie preferences through browser settings or opt-out of certain tracking mechanisms.
            </p>
        </ContentCard>
        <ContentCard heading="Third-Party Links">
            <p className='B3 text-[#646464]'>
            Our website may contain links to third-party websites or services. We are not responsible for their privacy practices or policies.
            We encourage you to read their privacy policies before providing any information.
            </p>
        </ContentCard><ContentCard heading="Children's Privacy">
            <p className='B3 text-[#646464]'>
            Our Services are not meant for children under 13 (or a higher age limit in some regions). We do not knowingly collect data
            from minors.If we discover such data, we will delete it immediately.Parents or guardians who find that their child has shared
            personal data with us should contact us so we can take action. We comply with child data protection laws and put safeguard
            safeguards in place to prevent unauthorized collection.
            </p>
        </ContentCard>
        <ContentCard heading="Changes to This Privacy Policy">
            <p className='B3 text-[#646464]'>
            We may update this Privacy Policy periodically to reflect changes in our Services, legal requirements, or industry standards. 
            Any modifications will be posted on this page with an updated effective date. We encourage you to review this policy regularly
            to stay informed.
            </p>
        </ContentCard>
        <ContentCard heading="Contact Us">
            <ContentList data={Links} text1="If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:" text2="By using our Services, you acknowledge and agree to this Privacy Policy and its terms."/>
        </ContentCard>
    </div>
  )
}

export default PrivacyContent