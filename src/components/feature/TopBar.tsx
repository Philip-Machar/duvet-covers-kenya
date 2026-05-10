export default function TopBar() {
  return (
    <div className="bg-primary text-white text-xs">
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 py-2 px-4 text-center">
        <span className="font-medium">Welcome to Duvet Covers Kenya</span>
        <a
          href="#collections"
          className="underline font-medium hover:text-accent-gold transition-colors"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
}