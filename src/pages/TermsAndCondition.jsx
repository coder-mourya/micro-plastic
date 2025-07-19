import React from "react";

const TermsAndCondition = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-4 text-center text-black">Terms and Conditions</h1>
      <p className="text-center text-sm text-gray-500 mb-12">Microplastic Application — Last Updated: July 10th, 2025</p>

      <div className="space-y-8 text-justify">
        <div>
          <h2 className="font-semibold text-xl mb-2">1. Service Description</h2>
          <p>
            This platform uses artificial intelligence (AI) and machine learning (ML) models to analyze water samples for the presence of microplastics.
            The results are intended for research, educational, and environmental awareness purposes.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">2. Use of the Service</h2>
          <p>You agree to use the Service only for lawful purposes. You may not:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Misuse the platform or attempt to reverse-engineer any part of it.</li>
            <li>Submit content that is harmful, unlawful, or infringes on third-party rights.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">3. Accuracy of Results</h2>
          <p>
            The Service uses predictive AI/ML models and may not provide 100% accurate or definitive results. Outcomes are based on algorithmic interpretations and should not replace certified laboratory testing. We do not guarantee the accuracy, completeness, or suitability of the results for regulatory or legal purposes.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">4. Data Submission and Usage</h2>
          <p>By submitting water sample data (e.g., images, measurements), you:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Confirm that you have the right to use and share such data.</li>
            <li>Grant us a non-exclusive, royalty-free license to use, store, and process the data to improve the Service and for research purposes.</li>
          </ul>
          <p className="mt-2">
            Your data will be processed in compliance with the General Data Protection Regulation (GDPR). Personal data, if collected, will only be used for the purposes described and stored securely.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">5. Intellectual Property</h2>
          <p>
            All intellectual property related to the platform (software, algorithms, content) remains the property of the project or its licensors. You may not copy, distribute, or modify any part of the platform without prior written consent.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">6. Limitation of Liability</h2>
          <p>To the extent permitted by law, we are not liable for:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Any indirect, incidental, or consequential damages arising from the use of this Service.</li>
            <li>Any decisions made based on the output or interpretation of the results.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">7. Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to the Service if you violate these Terms or use the platform in an unauthorized manner.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">8. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the European Union and the local jurisdiction of the project’s host country. Any disputes will be subject to the exclusive jurisdiction of the appropriate courts.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">9. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the Service after changes implies acceptance of the revised Terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
