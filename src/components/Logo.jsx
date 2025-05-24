export default function Logo({ className = '' }) {
  return (
    <img
      src="/assets/images/logo.png"
      alt="Lynx Logo"
      className={`w-auto h-16 ${className}`}
    />
  );
}
