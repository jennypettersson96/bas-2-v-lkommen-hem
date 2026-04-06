import { useEffect, useState } from "react";

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRuadvm-cDHAuU_SYFyYq4uNzF3nB2MFmSe4JFWXTnv-21APzdqknPeB7zPLtBhLmV1qIziXPxmbnw-/pub?output=csv";

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

  const weekRow = rows.find((r) => r.label.toLowerCase().startsWith("vecka"));

  const dataRows = rows.filter(
    (r) =>
      r.label.toLowerCase() !== "kommentar" &&
      r.label.toLowerCase() !== "comment" &&
      r !== weekRow
  );

  return (
    <section id="oppettider" className="py-20 bg-muted/40 scroll-mt-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-2">
          Öppettider
        </h2>

        {weekRow && (
          <p className="text-lg font-semibold text-muted-foreground mb-8">
            {weekRow.label} {weekRow.value && `– ${weekRow.value}`}
          </p>
        )}

        {loading && (
          <p className="text-muted-foreground">Laddar öppettider…</p>
        )}

        {error && (
          <p className="text-muted-foreground">
            Kunde inte hämta öppettider. Försök igen senare.
          </p>
        )}

        {!loading && !error && (
          <>
            <div className="max-w-md space-y-0">
              {dataRows.map((row, i) => (
                <div
                  key={i}
                  className="flex justify-between py-3 border-b border-border/50 last:border-0"
                >
                  <span className="font-medium text-foreground">{row.label}</span>
                  <span className="text-muted-foreground">{row.value || "—"}</span>
                </div>
              ))}
            </div>

            {comment && comment.value && (
              <p className="mt-6 text-sm text-muted-foreground italic">
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
