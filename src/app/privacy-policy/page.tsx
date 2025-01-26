import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-lg mb-4">
          Our privacy policy can be viewed at:{' '}
          <Link 
            href="https://app.termly.io/policy-viewer/policy.html?policyUUID=250350f0-c80d-4280-afd2-ff52438bfbb1"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  )
} 