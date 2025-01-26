export default function Support() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Support</h1>
        
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">How does the photo analysis work?</h3>
                <p className="text-muted-foreground">
                  Our AI technology analyzes various aspects of your photos, including lighting, composition, facial expression, and overall quality to provide detailed feedback and recommendations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">How long does the analysis take?</h3>
                <p className="text-muted-foreground">
                  Most photos are analyzed within 10 seconds. The entire process typically takes around 2-3 minutes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Is this a subscription service?</h3>
                <p className="text-muted-foreground">
                  No, we offer a one-time purchase model. Once you buy the app, you have permanent access to all current features.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Need help? Our support team is available Monday through Friday, 9 AM - 5 PM EST.
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  Email us at:{" "}
                  <a href="mailto:support@drainbee.com" className="text-primary hover:underline">
                    support@drainbee.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  Typical response time: 24-48 hours
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 