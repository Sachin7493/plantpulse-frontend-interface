export default function About() {
  return (
    <div
      id="about"
      className="w-full bg-white dark:bg-[#0b1120] text-green-900 dark:text-white max-w-4xl mx-auto mt-10 px-6 text-center"
    >
      <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-4">
        About
      </h2>
      <div className="h-1 w-24 bg-green-400 dark:bg-green-600 mx-auto mb-6 rounded"></div>
      <div className="space-y-6 px-4 pl-6">
        <p className="relative group text-lg text-gray-700 dark:text-gray-300 mb-6 px-4 py-2 overflow-hidden">
          <span className="absolute inset-0 w-0 bg-green-100 dark:bg-green-900 transition-all duration-500 ease-out group-hover:w-full rounded-md z-0"></span>
          <span className="relative z-10 group-hover:font-bold transition-all duration-300">
            <strong>"Revolutionizing Agriculture"</strong> is a machine
            learning-powered platform designed to help farmers detect plant
            diseases early and accurately through leaf image analysis.
          </span>
        </p>

        <p className="relative group text-lg text-gray-700 dark:text-gray-300 mb-6 px-4 py-2 overflow-hidden">
          <span className="absolute inset-0 w-0 bg-green-100 dark:bg-green-900 transition-all duration-500 ease-out group-hover:w-full rounded-md z-0"></span>
          <span className="relative z-10 group-hover:font-bold transition-all duration-300">
            Our system utilizes advanced Convolutional Neural Networks (CNNs)
            trained on the PlantVillage dataset to identify diseases with over
            96% accuracy. From image upload to result visualization, the entire
            process is automated and user-friendly.
          </span>
        </p>
        <p className="relative group text-lg text-gray-700 dark:text-gray-300 mb-6 px-4 py-2 overflow-hidden">
          <span className="absolute inset-0 w-0 bg-green-100 dark:bg-green-900 transition-all duration-500 ease-out group-hover:w-full rounded-md z-0"></span>
          <span className="relative z-10 group-hover:font-bold transition-all duration-300">
            Developed by a team of final-year Computer Science students, the
            platform aims to empower farmers with real-time diagnosis, reduce
            pesticide misuse, and contribute to sustainable agriculture.
          </span>
        </p>

        <p className="relative group text-lg text-gray-700 dark:text-gray-300 mb-6 px-4 py-2 overflow-hidden">
          <span className="absolute inset-0 w-0 bg-green-100 dark:bg-green-900 transition-all duration-500 ease-out group-hover:w-full rounded-md z-0"></span>
          <span className="relative z-10 group-hover:font-bold transition-all duration-300">
            The frontend is built using <strong>React.js</strong> and{" "}
            <strong>Tailwind CSS</strong>, while the backend API is powered by{" "}
            <strong>FastAPI</strong>.
          </span>
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-green-700 dark:text-green-400 mt-12 mb-4">
        How It Works
      </h3>
      <div className="h-1  bg-green-400 dark:bg-green-600 mx-auto mb-6 rounded w-[130px]"></div>

      <div className="space-y-6 px-7 pl-20">
        {[
          "Create an account or log in using your credentials.",
          "Upload or drag-and-drop a clear image of the affected plant leaf.",
          "Click on the 'Check Disease' button to run the prediction.",
          "View the predicted disease result with its confidence level.",
          "Chat with our AI assistant to get treatment suggestions and pesticide recommendations.",
        ].map((step, index) => (
          <p
            key={index}
            className="relative group text-md text-gray-700 dark:text-gray-300 px-2 py-2 overflow-hidden text-left flex items-start gap-2"
          >
            <span className="mt-1 w-2 h-2 min-w-2 min-h-2 bg-green-500 dark:bg-green-600 rounded-full"></span>
            <span className="absolute inset-0 w-0 bg-green-100 dark:bg-green-900 transition-all duration-500 ease-out group-hover:w-full rounded-md z-0"></span>
            <span className="relative z-10 group-hover:font-bold transition-all duration-300">
              <strong>Step {index + 1}:</strong> {step}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}
