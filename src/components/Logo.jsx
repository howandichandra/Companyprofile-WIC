// Logo WIC resmi — PT Warni Indah Cemerlang
// Transparan, jadi aman dipakai di background terang maupun gelap.
// className mengatur tinggi logo (mis. "h-12", "h-14").
export default function Logo({ className = "h-11" }) {
  return (
    <img
      src="/logo-wic-nav.png"
      alt="WIC — PT Warni Indah Cemerlang"
      className={`w-auto select-none ${className}`}
      draggable={false}
    />
  );
}
