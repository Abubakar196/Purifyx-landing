import React from 'react'
import ContentCard from './ContentCard';
import ContentwithHeadings from './ContentWithHeading';
import ContentList from './ContentList';
import Link from 'next/link';

const TermsContent = () => {

    const UserPoints = [
        "Create an account with accurate and complete information.",
        "Secure your account credentials (e.g., username and password).",
    ];
    const prohibiteduses = [
        "Illegal activities, including violating anti-spam laws (e.g., CAN-SPAM Act).",
        "Sending unsolicited emails (spam) or submitting email addresses without authorization.",
        "Harassing, harming, or infringing on others' rights.",
        "Attempting to reverse-engineer, hack, or disrupt the Service.",
    ];
    const LimitationtoLiability = [
        "The Service is provided 'as is' without warranties of any kind, including accuracy or uninterrupted use.",
        "Our liability for any claim related to the Service is limited to the amount you paid us in the last 12 months, or US$100, whichever is less.",
        "We are not liable for indirect, incidental, or consequential damages (e.g., lost profits).",
    ];
    const Links = [
        "purifyX.ai",
        "purifyX@gmail.com",
        "USA",
    ];

    const serviceDescription = [
        { title: "Free Plan", content: "Limited features and verification credits." },
        { title: "Paid Plans", content: "Additional features and higher verification limits, as detailed on our website (validleads.co)." },
    ];
    const paymentsTerms = [
        { title: "Fees", content: "Paid plans are priced in U.S. dollars (USD) and payable via methods listed on our website. All fees are non-refundable unless we determine otherwise (e.g., for accidental purchases), at our sole discretion." },
        { title: "Billing", content: "Payments are processed at the time of purchase. You authorize us to charge your selected payment method." },
        { title: "Taxes", content: "You are responsible for any applicable taxes on your payments." },
    ];
    const intellactualProperty = [
        { title: "Our Rights", content: "All content, software, and materials in the Service are owned by Valid Leads or our licensors and protected by intellectual property laws." },
        { title: "Your Rights", content: "You retain ownership of the email addresses you submit. By submitting them, you grant us a non-exclusive, worldwide license to use this data solely to provide the Service." },
    ];
    const termination = [
        { title: "By You", content: "You may stop using the Service and delete your account at any time." },
        { title: "By Us", content: "We may suspend or terminate your access for violating these Terms, with or without notice. Upon termination, your data will be deleted as per our Privacy Policy." },
    ];
    const dataHandling = [
        "Personal information (e.g., name, email) for account management.",
        "Verification data (e.g., submitted email addresses) to provide the Service.",
        "Payment information for paid plans.",
    ];

    return (
        <div className='px-8 sm:px-32 py-24 lg:px-64 lg:py-28 xl:px-[410px] xl:py-[160px]'>
            <ContentCard heading="Introduction">
                <p className='B2 text-[#646464]'>
                    Welcome to Inbox Automation! These Terms and Conditions ("Terms") govern your use of our Inbox Automation service
                    (the "Service"), provided by Inbox Automation ("we," "us," or "our"), a company based in the United States. By accessing or
                    using the Service, you agree to be bound by these Terms. If you do not agree, please do not use the Service.
                </p>
            </ContentCard>
            <ContentCard heading="1. Service Description">
                <ContentwithHeadings data={serviceDescription} text1="The Service allows you to submit email addresses to verify their validity. We offer both free and paid plans:" text2="We strive to provide accurate verification results but cannot guarantee 100% accuracy due to the nature of email systems." />
            </ContentCard>
            <ContentCard heading="2. User Accounts and Responsibilities">
                <ContentList data={UserPoints} text1="To use the Service, you must:" />
                <p className='B3 text-[#646464]'>You are responsible for all activities under your account. Notify us immediately at
                    <a href="mailto:validleads@gmail.com" className="text-primary-300 underline"> InboxAutomation@gmail.com </a>
                    if you suspect unauthorized access.
                </p>
            </ContentCard>
            <ContentCard heading="3. Prohibited Uses">
                <ContentList data={prohibiteduses} text1="You may not use the Service for:" />
                <p className='B3 text-[#646464]'>We reserve the right to <span className='text-yellow-400'>suspend</span> or <span className='text-red-400'>terminate</span> your account for violations, without notice.</p>
            </ContentCard>
            <ContentCard heading="4. Payment Terms">
                <ContentwithHeadings data={paymentsTerms} text1="We may collect and process the following types of information to provide and improve our Services:" />
            </ContentCard>
            <ContentCard heading="5. Data Handling and Privacy">
                <p className='B3 text-[#646464]'>Your use of the Service is also governed by our <Link href="/privacy-policy" className='text-primary-300 underline'>Privacy Policy</Link> (available at InboxAutomation.co/privacy). We collect and process:</p>
                <ContentList data={dataHandling} />
                <p className='B3 text-[#646464]'>You may access, modify, or delete your data by contacting us at <a href="mailto:validleads@gmail.com" className="text-primary-300 underline"> InboxAutomation@gmail.com</a>. We retain data as outlined in the Privacy Policy</p>
            </ContentCard>
            <ContentCard heading="6. Intellectual Property">
                <ContentwithHeadings data={intellactualProperty} />
            </ContentCard>
            <ContentCard heading="7. Limitation of Liability">
                <ContentList data={LimitationtoLiability} text1="To the fullest extent permitted by law:" />
            </ContentCard>
            <ContentCard heading="8. Indemnification">
                <p className='B3 text-[#646464]'>
                    You agree to indemnify and hold us harmless from any claims, losses, or damages (including legal fees) arising from your misuse of the Service or violation of these Terms.
                </p>
            </ContentCard>
            <ContentCard heading="9. Termination">
                <ContentwithHeadings data={termination} />
            </ContentCard>
            <ContentCard heading="10. Changes to Terms">
                <p className='B3 text-[#646464]'>
                    We may update these Terms at any time. Changes take effect when posted on our website (InboxAutomation.co/terms). Your continued use of the Service after changes constitutes acceptance.
                </p>
            </ContentCard>
            <ContentCard heading="11. Governing Law and Dispute Resolution">
                <p className='B3 text-[#646464]'>
                    These Terms are governed by California law. Any disputes will be resolved exclusively in state or federal courts in California. You agree to submit to their jurisdiction.
                </p>
            </ContentCard>
            <ContentCard heading="12. Children's Use">
                <p className='B3 text-[#646464]'>
                    The Service is not intended for children under 13. If we learn that a user under 13 has provided personal information, we will delete it promptly, per our Privacy Policy.
                </p>
            </ContentCard>
            <ContentCard heading="13. Cookies and Tracking Technologies">
                <p className='B3 text-[#646464]'>
                    We use cookies and similar technologies to improve the Service, as detailed in our Privacy Policy. You can manage these via your browser settings.
                </p>
            </ContentCard>
            <ContentCard heading="14. Service Changes and Discontinuation">
                <p className='B3 text-[#646464]'>
                    We may modify or discontinue the Service (or parts of it) at any time, without liability. We’ll aim to notify you of significant changes via email or on our website.
                </p>
            </ContentCard>
            <ContentCard heading="15. Third-Party Links">
                <p className='B3 text-[#646464]'>
                    The Service may contain links to third-party sites. We are not responsible for their content, policies, or practices.
                </p>
            </ContentCard>
            <ContentCard heading="16. Entire Agreement and Severability">
                <p className='B3 text-[#646464]'>
                    These Terms, along with our Privacy Policy, constitute the full agreement between you and us. If any provision is unenforceable, the remaining provisions remain in effect.
                </p>
            </ContentCard>
            <ContentCard heading="17. Waiver">
                <p className='B3 text-[#646464]'>
                    Our failure to enforce any right or provision does not waive that right or provision.
                </p>
            </ContentCard>
            <ContentCard heading="Contact Us">
                <div className="mb-5 space-y-5">
                    <p className="B3 text-[#646464]">
                        If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
                    </p>
                    <div className=" text-gray-800 space-y-5">
                            <a href='https://purifyx.ai/' className="flex items-start gap-2 mb-1 B3 text-primary">
                                <span className="text-primary-600 text-lg">•</span>
                                <span className='underline'>purifyX.ai</span>
                            </a>
                            <a href='validleads@gmail.com' className="flex items-start gap-2 mb-1 B3 text-primary">
                                <span className="text-primary-600 text-lg">•</span>
                                <span className='underline'>purifyX@gmail.com</span>
                            </a>
                    </div>
                </div>
            </ContentCard>
        </div>
    )
}

export default TermsContent