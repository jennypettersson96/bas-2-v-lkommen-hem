import { useEffect, useState } from "react";

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/1Z-PUPu7kdBqM8Gk1yV_AMucKfmn2TXl2R5CjgBIwJ5U/pub?output=csv";

interface Row {
  label: string;
  value: string;
}

function parseCSV(text: string): Row[] {
  return text
    .split("\n")
    .map((line) => {
      const [a, ...rest] = line.split(",");
      return {
        label: (a || "").replace(/^"|"$/g, "").trim(),
        value: rest.join(",").replace(/^"|"$/g, "").trim(),
      };
    })
    .filter((r) => r.label);
}

const OpeningHoursSection = () => {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(SHEET_CSV_URL)
      .then((res) => {
        if (!res.ok) throw new Error("fetch failed");
        return res.text();
      })
      .then((text) => {
        setRows(parseCSV(text));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const comment = rows.find(
    (r) => r.label.toLowerCase() === "kommentar" || r.label.toLowerCase() === "comment"
  );
  const dataRows = rows.filter(
    (r) =>
      r.label.toLowerCase() !== "kommentar" &&
      r.label.toLowerCase() !== "comment"
  );

  return (
    <section id="oppettider" className="py-20 bg-muted/40">
      <div className="container max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-foreground mb-10">
          Öppettider
        </h2>

        {loading && (
          <p className="text-center text-muted-foreground">Laddar öppettider…</p>
        )}

        {error && (
          <p className="text-center text-muted-foreground">
            Kunde inte hämta öppettider. Försök igen senare.
          </p>
        )}

        {!loading && !error && (
          <>
            <div className="rounded-lg border bg-card overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {dataRows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b last:border-0 hover:bg-muted/50 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-foreground">
                        {row.label}
                      </td>
                      <td className="px-6 py-4 text-right text-muted-foreground">
                        {row.value || "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {comment && comment.value && (
              <p className="mt-4 text-center text-sm text-muted-foreground italic">
                {comment.value}
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default OpeningHoursSection;
