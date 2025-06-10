export default function Footer() {
  return (
    <footer className="bg-green-600 text-white px-4 py-3 flex flex-col items-center justify-center shadow-inner mt-0">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} PlantPulse. All rights reserved.
      </p>
      <p className="text-sm mt-1">
        Built with ❤️ by Team 21 |
        <a
          href="mailto:support@plantid.com"
          className="underline hover:text-green-200 ml-1"
        >
          support@plant.com
        </a>
      </p>
    </footer>
  );
}
