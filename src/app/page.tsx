import Link from "next/link"
import Image from 'next/image';


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                AI Dating Profile Analyzer
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Optimize your dating profile photos with AI-powered analysis. Get detailed insights and recommendations to increase your matches.
              </p>
            </div>
            <div className="flex justify-center items-center space-y-4 md:space-y-0">
              <Link 
                href="/app-store" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <Image 
                  src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                  alt="Download on the App Store"
                  width={135}
                  height={40}
                  priority
                />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <div className="p-3 bg-primary/10 rounded-full">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">AI-Driven Analysis</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Get instant, detailed feedback on your profile photos using advanced AI technology.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <div className="p-3 bg-primary/10 rounded-full">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Detailed Scorecards</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Receive comprehensive scorecards with specific ratings for different aspects of your photos.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <div className="p-3 bg-primary/10 rounded-full">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Personalized Recommendations</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Get tailored suggestions to improve your photos and increase your match potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">1</div>
              <h3 className="text-xl font-bold">Select Your Photos</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Choose the photos you want to analyze from your camera roll.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">2</div>
              <h3 className="text-xl font-bold">Get Your Analysis</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Receive instant AI-powered feedback and scoring for each photo.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">3</div>
              <h3 className="text-xl font-bold">Improve Your Profile</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Follow personalized recommendations to enhance your profile.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
