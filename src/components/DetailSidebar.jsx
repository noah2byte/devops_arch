export default function DetailSidebar({
  title,
  description
}) {
  return (
    <div
      style={{
        width: "400px",
        borderLeft: "1px solid #ddd",
        padding: "20px"
      }}
    >
      <h2>{title}</h2>

      <pre
        style={{
          whiteSpace: "pre-wrap"
        }}
      >
        {description}
      </pre>
    </div>
  );
}