cran_packages <- c(
  "ape",
  "cowsay",
  "DescTools",
  "effectsize",
  "fortunes",
  "GGally",
  "gt",
  "httr2",
  "janitor",
  "lubridate",
  "maps",
  "moments",
  "osbng",
  "patchwork",
  "phytools",
  "pollimetry",
  "pwr",
  "rnaturalearth",
  "Runuran",
  "sf",
  "styler",
  "terra",
  "tidyverse"
)

not_installed <- cran_packages[
  !cran_packages %in% installed.packages()[, "Package"]
]

install.packages(not_installed)

if (!requireNamespace("BiocManager", quietly = TRUE)) {
  install.packages("BiocManager")
}

bioconductor_packages <- c(
  "Biostrings",
  "ggtree",
  "msa",
  "ORFik",
  "treeio"
)

not_installed <- bioconductor_packages[
  !bioconductor_packages %in% installed.packages()[, "Package"]
]

BiocManager::install(not_installed, ask = FALSE)