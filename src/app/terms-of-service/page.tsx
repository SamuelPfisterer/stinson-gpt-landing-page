import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        <p className="text-lg mb-4">
          Our terms of service can be viewed at:{' '}
          <Link 
            href="https://app.termly.io/policy-viewer/policy.html?policyUUID=7f11c169-4fe2-46df-bb62-511ddf695a32"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </Link>
        </p>
      </div>
    </div>
  )
} 