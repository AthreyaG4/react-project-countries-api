export default function Field({ fieldLabel, fieldValue, formatter }) {
  return (
    <p className="mb-2">
      <span className="font-semibold">{fieldLabel}:</span>{" "}
      <span className="font-light">{fieldValue}</span>
    </p>
  );
}
