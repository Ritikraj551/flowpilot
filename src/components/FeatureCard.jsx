export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5">
        <Icon size={25} className="text-blue-600" />
      </div>

      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
