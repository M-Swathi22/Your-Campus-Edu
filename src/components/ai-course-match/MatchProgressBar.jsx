export default function MatchProgressBar({ score }) {
  return (
    <div className="mb-8">

      <div className="flex justify-between mb-2">
        <span className="font-medium">
          AI Confidence Score
        </span>

        <span className="font-bold">
          {score}%
        </span>
      </div>

      <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">
        <div
          className="h-full bg-[var(--primary)]"
          style={{ width: `${score}%` }}
        />
      </div>

    </div>
  );
}