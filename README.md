[![Creative Commons Attribution-NonCommercial 4.0 International License](https://i.creativecommons.org/l/by-nc/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc/4.0/)

# Swarmpunk

## Rough Consensus and Running Code in Brains, Machines, and Society

A dissertation by Jonny Saunders

- Submitted: 22-07-15
- Defended: 22-08-05
- Approved: TBD
- Archived: TBD

# Overview

- Homepage: [https://jon-e.net/dissertation](https://jon-e.net/dissertation)
- Defense
	- [slides](https://jon-e.net/dissertation/slides/)
	- [video](https://archive.org/details/jls-defense), Download: [x265](https://archive.org/download/jls-defense/22-08-05_defense.mp4), [x264](https://archive.org/download/jls-defense/22-08-05_defense.ia.mp4), [subs](https://archive.org/download/jls-defense/22-08-05_defense.srt), [.torrent](https://archive.org/download/jls-defense/jls-defense_archive.torrent), [magnet](magnet:?xt=urn:btih:49f5db3ddcd6c2269ed783ef7b412a915bda4528&dn=jls-defense&tr=http%3a%2f%2fbt1.archive.org%3a6969%2fannounce&tr=http%3a%2f%2fbt2.archive.org%3a6969%2fannounce&ws=http%3a%2f%2fia601409.us.archive.org%2f31%2fitems%2f&ws=https%3a%2f%2farchive.org%2fdownload%2f&ws=https%3a%2f%2fia601409.us.archive.org&ws=https%3a%2f%2fia801409.us.archive.org)
- Dissertation
	- Repository [PDF](dissertation/build/jls_dissertation/jls_dissertation.pdf)
	- Archival PDF (TODO)
	- Sections (TODO: HTML render for each)


# Repository Structure

The site and slides are built with `.github/workflows/gh-pages.yml`

## `/dissertation`

The dissertation is built using [tectonic](https://tectonic-typesetting.github.io/en-US/) from several git submodules within `/dissertation/src` into `/dissertation/build`

Within `src`:

- `_preamble.tex`, `index.tex`, and `_postamble.tex` are the root of the document, treat them like they're concatenated together.
- `index.tex` draws from a nested set of source documents using `\input`. Follow the input statements :)


## `/slides`

Built using [spectacle](https://formidable.com/open-source/spectacle/) and React, sort of messy iteration on [infrastructure-presentation](https://github.com/sneakers-the-rat/infrastructure-presentation) and its derivatives, see [presentations](https://jon-e.net/presentations/).

The slides themselves are indexed by [slides.jsx](dissertation/slides/src/slides/slides.jsx)

## `/site`

A simple jekyll site to link out to the components of the dissertation (and later to organize the HTML renders)

## `/forms`

Just some forms for my own recordkeeping

## `/bibliographies`

.bib exports for the different chapters organized into one place (the dissertation itself uses a [combined version](dissertation/src/bibliographies/dissertation_combined.bib))


