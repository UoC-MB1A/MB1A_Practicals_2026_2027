document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".callout-answer:not(.show-code)")
    .forEach(answer => {

      answer.querySelectorAll(".cell").forEach(cell => {

        // ----- Fold the source code -----
        cell.querySelectorAll("div.sourceCode").forEach(source => {

          // Don't process it twice
          if (source.closest(".answer-code-details")) return;

          const details = document.createElement("details");
          details.className = "answer-code-details";

          const summary = document.createElement("summary");
          summary.textContent = "Show code";

          source.before(details);
          details.appendChild(summary);
          details.appendChild(source);
        });

        // ----- Label actual output -----
        const output = cell.querySelector(
          ".cell-output, .cell-output-display, .cell-output-stdout"
        );

        if (
          output &&
          !cell.querySelector(".expected-output-label")
        ) {
          const label = document.createElement("div");
          label.className = "expected-output-label";
          label.textContent = "Expected output";

          output.before(label);
        }

      });

    });
});