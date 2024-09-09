const privacyPolicyContent = `
  ## Privacy Policy

  **Effective Date**: September 1, 2024

  Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our services.

  ### 1. Information We Collect
  We may collect the following types of information:
  - **Personal Information**: Name, email address, phone number, etc.
  - **Usage Data**: Pages visited, time spent on the site, and other behavioral information.
  - **Cookies**: We use cookies to track your preferences and improve your experience.

  ### 2. How We Use Your Information
  We use the information we collect for the following purposes:
  - To provide and maintain our services.
  - To personalize your experience.
  - To improve our website and services.
  - To send promotional information, with your consent.

  ### 3. How We Protect Your Information
  We implement a variety of security measures to protect your personal information, including encryption and secure servers.

  ### 4. Sharing Your Information
  We do not sell, trade, or otherwise transfer your personal information to outside parties, except when required by law or with your consent.

  ### 5. Your Rights
  You have the following rights regarding your personal data:
  - Access: You can request a copy of the data we hold about you.
  - Rectification: You can ask us to correct any incorrect or incomplete information.
  - Deletion: You can request the deletion of your personal information.

  ### 6. Changes to This Privacy Policy
  We may update our Privacy Policy from time to time. Any changes will be posted on this page, and we will notify you via email if the changes are significant.

  If you have any questions regarding this Privacy Policy, please contact us at **privacy@yourwebsite.com**.

  Thank you for trusting us with your information!
`;

export default function PrivacyPolicyPage() {
  return (
    <section className="container mx-auto">
      <div className="bg-slate-50 border p-6 rounded-lg">
        <div>
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Effective Date: September 1, 2024</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 mt-6">
          <div dangerouslySetInnerHTML={{ __html: privacyPolicyContent }} />
        </div>
      </div>
    </section>
  );
}
