export default function BackgroundPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-gray-200/5" />
          ))}
        </div>
      </div>

      {/* Gradient Blobs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#0088cc]/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#00cc88]/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
      
      {/* Dots Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, gray 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
    </div>
  );
} 