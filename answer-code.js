document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".callout-answer")
    .forEach(answer => {

      if (answer.closest(".show-code")) return;

      answer.querySelectorAll(".cell").forEach(cell => {

      answer.querySelectorAll("div.sourceCode").forEach(source => {
      
        // Leave code visible if marked .show-code
        if (source.closest(".show-code")) return;
      
        // Don't process it twice
        if (source.closest(".answer-code-details")) return;

          const details = document.createElement("details");
          details.className = "answer-code-details";

          const summary = document.createElement("summary");
          summary.textContent = "Show answer code";

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
          label.textContent = "Output";

          output.before(label);
        }

      });

    });
});