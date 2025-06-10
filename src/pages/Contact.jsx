import Categories from "../components/Categories";
export default function Contact() {
  return (
    <div className="w-full bg-white dark:bg-[#0b1120] text-green-900 dark:text-white max-w-4xl mx-auto mt-10 px-6 text-center">
      <h2 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-2 text-center">
        Contact Us
      </h2>

      <div className="h-1 bg-green-400 dark:bg-green-600 mx-auto mb-8 rounded w-[130px]"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6 text-left">
          <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300">
            <li>Have questions about our system?</li>
            <li>Want to provide feedback?</li>
            <li>Looking for support?</li>
            <li>Interested in collaboration?</li>
            <li>Just want to say hello!</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 rounded-lg py-6 px-4 shadow-md w-full max-w-md">
            <p className="text-md font-medium">
              📧 Email us at:{" "}
              <a
                href="mailto:support@plant.com"
                className="text-green-700 dark:text-green-300 underline hover:text-green-900"
              >
                support@plant.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-6 items-start md:items-center">
          <SocialLink
            href="https://linkedin.com"
            label="LinkedIn"
            svgPath="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zM7 19h-3v-9h3v9zm-1.5-10.3c-1 0-1.7-.7-1.7-1.7s.7-1.7 1.7-1.7c1 0 1.7.7 1.7 1.7s-.7 1.7-1.7 1.7zm13.5 10.3h-3v-5c0-1.2-.4-2-1.5-2-1 0-1.4.7-1.6 1.4-.1.2-.1.6-.1 1v4.6h-3v-9h3v1.2c.4-.6 1.2-1.5 2.9-1.5 2.1 0 3.6 1.4 3.6 4.5v4.8z"
          />
          <SocialLink
            href="https://instagram.com"
            label="Instagram"
            svgPath="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-5 2a5 5 0 110 10 5 5 0 010-10zM7 7h10v10H7V7z"
          />
          <SocialLink
            href="https://telegram.org"
            label="Telegram"
            svgPath="M9.75 16.5l-.54-2.58 7.95-6.6-8.73 5.4-2.13-1.02-4.5-1.32 19.5-6.3-15.54 12.42z"
          />
          <SocialLink
            href="https://facebook.com"
            label="Facebook"
            svgPath="M18 0h-12c-3.3 0-6 2.7-6 6v12c0 3.3 2.7 6 6 6h12c3.3 0 6-2.7 6-6v-12c0-3.3-2.7-6-6-6zM15 11h-2v8h-3v-8H8v-3h2V7c0-2.2 1.3-3 3.1-3 .9 0 1.9.1 1.9.1v2h-1.1c-1 0-1.3.6-1.3 1.3v1.6h2.4l-.3 3z"
          />
          <SocialLink
            href="https://youtube.com"
            label="YouTube"
            svgPath="M19.8 7.2s-.2-1.5-.8-2.1c-.8-.8-1.6-.8-2-.9-2.8-.2-7-.2-7-.2s-4.3 0-7 .2c-.4 0-1.3.1-2 .9-.6.6-.8 2.1-.8 2.1S2 9 2 10.8v2.4c0 1.8.2 3.6.2 3.6s.2 1.5.8 2.1c.8.8 1.8.8 2.2.9 1.6.1 6.8.2 6.8.2s4.2 0 7-.2c.4 0 1.5-.1 2-.9.6-.6.8-2.1.8-2.1s.2-1.8.2-3.6v-2.4c0-1.8-.2-3.6-.2-3.6zM10 14.5v-5l4 2.5-4 2.5z"
          />
        </div>
      </div>
      <Categories />
    </div>
  );
}

function SocialLink({ href, label, svgPath }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-3 text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-500"
      aria-label={label}
    >
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d={svgPath} />
      </svg>
      <span className="text-lg font-medium">{label}</span>
    </a>
  );
}
