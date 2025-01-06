export function Statistics() {
  return (
    <section className="bg-indigo-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by thousands
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Join the thousands of users who trust us with their links
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="text-5xl font-extrabold text-indigo-600">1M+</div>
            <div className="mt-2 text-lg font-medium text-gray-900">Links Created</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-indigo-600">50K+</div>
            <div className="mt-2 text-lg font-medium text-gray-900">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-indigo-600">99.9%</div>
            <div className="mt-2 text-lg font-medium text-gray-900">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
} 