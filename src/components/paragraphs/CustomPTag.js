export default function CustomPTag({ children }) {
  return (
    <p className="text-sm md:text-base leading-relaxed mb-4 md:mb-6 z-10">
      {children}
    </p>
  );
}
