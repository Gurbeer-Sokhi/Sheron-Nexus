import Link from "next/link";

export default function ServiceCard({ title, description, icon, link }) {
  const DefaultIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10 text-[#8B5CF6]"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );

  const renderIcon = () => {
    if (!icon) return <DefaultIcon />;
    if (typeof icon === "function") {
      const IconComponent = icon;
      return <IconComponent className="h-10 w-10 text-[#8B5CF6]" aria-hidden="true" />;
    }
    return icon;
  };

  return (
    <div className="group flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-md transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl dark:bg-gray-900">
      <div>
        <div className="mb-4">{renderIcon()}</div>
        <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{description}</p>
      </div>

      <div className="mt-6">
        <Link
          href={link}
          aria-label={`Learn more about ${title}`}
          className="inline-flex items-center justify-center rounded-full bg-[#8B5CF6] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 active:scale-95"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}


