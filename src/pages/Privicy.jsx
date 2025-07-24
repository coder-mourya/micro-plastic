import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800 leading-relaxed space-y-12">
      
      <div>
        <h1 className="text-4xl font-bold mb-2 text-center">Privacy Policy</h1>
        <p className="text-center text-sm text-gray-500 mb-8">
          Microplastic Application | Effective Date: July 20th, 2025
        </p>

        <div className="space-y-6 text-justify">
          <p>
            Microplastic Detection respects your privacy. This Privacy Policy explains how we handle your information when you use our application (“App”) to detect microplastic content in water samples.
          </p>

          <div>
            <h2 className="font-semibold text-xl mb-2">1. Information We Collect</h2>
            <p>
              We do not collect or store any personal data on our servers. The application uses a common username and password for access and does not associate data with individual users.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">2. Use of Information</h2>
            <p>The application only performs the following actions:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Detects microplastic content from water particle samples.</li>
              <li>Allows users to save the detection results locally on their own device.</li>
            </ul>
            <p className="mt-2">No data is transmitted to or stored on external servers.</p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">3. Data Storage</h2>
            <p>
              All data generated through the application (e.g., detection results) is stored locally on your device. You are responsible for managing, sharing, or deleting the data saved on your device.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">4. Security</h2>
            <p>
              As we do not collect or store any personal data, we do not process any sensitive information. However, we encourage you to protect your device and ensure that no unauthorized person can access the stored results.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">5. Third-Party Access</h2>
            <p>
              We do not share any data with third parties. The App does not use third-party services that collect or process user information.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">6. Children’s Privacy</h2>
            <p>
              Our App is not directed to children under the age of 13. We do not knowingly collect personal data from anyone, including children.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted within the app or at a designated website if available. Continued use of the App after updates constitutes acceptance of the revised policy.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">8. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, you may contact us at:{" "}
              <a href="mailto:info@appadvent.com" className="text-blue-600 underline">
                info@appadvent.com
              </a>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Privacy;
