document.addEventListener("DOMContentLoaded", () => {

  const collapsibleSections =
    document.querySelectorAll("section.fold");

  collapsibleSections.forEach((section) => {

    const heading = section.querySelector(
      ":scope > h2, :scope > h3, :scope > h4, :scope > h5, :scope > h6"
    );

    if (!heading) return;

    const levelClasses = [
      "core",
      "rec",
      "extension",
      "bonus",
      "ref"
    ];

    const levelClass = levelClasses.find((cls) =>
      section.classList.contains(cls)
    );

    const details = document.createElement("details");
    details.classList.add("collapse-section");

    if (levelClass) {
      details.classList.add(levelClass);
    }

    const summary = document.createElement("summary");
    summary.textContent = heading.textContent.trim();

    details.appendChild(summary);

    /*
      Move everything belonging to this Quarto section
      except its original heading into <details>.
    */
    const contents = Array.from(section.children).filter(
      (child) => child !== heading
    );

    contents.forEach((child) => {
      details.appendChild(child);
    });

    heading.insertAdjacentElement("afterend", details);

    /*
      The real heading remains in the document for Quarto's
      TOC, anchors and cross-references, but isn't duplicated
      visually.
    */
    heading.style.display = "none";
  });


  /*
    Open a collapsible section when linked to from the
    sidebar or a cross-reference.
  */
  function openTargetSection() {
    if (!window.location.hash) return;

    const target = document.querySelector(window.location.hash);

    if (!target) return;

    const section = target.matches("section")
      ? target
      : target.closest("section");

    if (!section) return;

    const details = section.querySelector(
      ":scope > details.collapse-section"
    );

    if (details) {
      details.open = true;
    }
  }

  openTargetSection();

  window.addEventListener("hashchange", openTargetSection);

});