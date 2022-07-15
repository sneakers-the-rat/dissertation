# Mice Can Learn Phonetic Categories

### Jonny Saunders and Mike Wehr, Journal of the Acoustical Society of America, Jan 2019.

## Abstract

> We perceive speech as a series of relatively invariant phonemes despite extreme variability in the acoustic signal. To be perceived as nearly-identical phonemes, speech sounds that vary continuously over a range of acoustic parameters must be perceptually discretized by the auditory system. Such many-to-one mappings of undifferentiated sensory information to a finite number of discrete categories are ubiquitous in perception. Although many mechanistic models of phonetic perception have been proposed, they remain largely unconstrained by neurobiological data. Current human neurophysiological methods lack the necessary spatiotemporal resolution to provide it: speech is too fast and the neural circuitry involved is too small. Here we demonstrate that mice are capable of learning generalizable phonetic categories, and can thus serve as a model for phonetic perception. Mice learned to discriminate consonants, and generalized consonant identity across novel vowel contexts and speakers, consistent with true category learning. A mouse model, given the powerful genetic and electrophysiological tools for probing neural circuits available for them, has the potential to powerfully augment our mechanistic understanding of phonetic perception.

## Building the Manuscript

This repository contains the raw data as well as all analysis, visualization, and typesetting code used to generate the manuscript.

The main manuscript file used to build the document is `manuscript/SaundersWehr_JASA2019.Rnw`

The manuscript can be built with RStudio after installing the requisite packages with:

```R
install.packages(c("ggplot2",   "binom", "plyr", "reshape", "xtable",
                   "rio",       "dplyr", "lme4", "effects", "stats",
                   "multcomp",  "grid",  "rsvg", "gtable",  "ggdendro",
                   "gridExtra", "knitr" ))
```

Note that `knitr` rather than `sweave` must be used on compilation, this can be changed by setting RStudio>Preferences...>Sweave>"Weave Rnw files using:" to `knitr`.

The build must be performed twice in order for the citations to work, the first generates a .bbl file, and the second is able to include it.

## File Descriptions

### code

* `plotting_fns.R` - functions used to generate figures 2-5
* `psds.m` and `spectrograms.m` - scripts used to generate power spectra and spectrograms
* `supplemental_plots.R` a script to generate the 'subway plot' in Fig. 1e

### data - Trial Data

**Data Files**

* `alldata.RData` - all training data from all mice.
* `gendata.RData` - data just from the generalization step
* `gendata_remap.RData` - Speaker number in `gendata` corresponds to training condition, ie. for both cohorts the speakers used for training were 1 and 2. This set has remapped the speaker numbers so they are the same across cohorts.
* `gendat_ts_w13.RData` - A subset of generalization data with an additional number of appearances column and also including trials from the last stage before generalization. Used to make Figure 3.

**Column Descriptions**

* "trialNumber" - number of trial for that particular mouse
* "consonant" - 1 = /g/, 2 = /b/
* "speaker" - speaker number, see note re: gendata_remap
* "vowel" - 1 = /I/, 2 = /o/, 3 = /a/, 4 = /ae/, 5 = /e/
* "token" - Token/recording number
* "correct" - 1/0 correct/incorrect
* "step" - training step, step 15 is generalization, step 13 is final step before generalization, rest can be described if needed, submit an issue.
* "session" - each day's training was counted as a training session.
* "date" - timestamp in seconds from start of year
* "response" - response 0/1 left/right
* "target" - correct answer 0/1 left/right
* "mouse" - mouse ID
* "gentype2" - generalization type (see Fig 2a)
* "novelnot" - 0 for gentype2==1, 1 for gentype2 %in% c(2,3,4,5)
* "cohort" - training cohort, see text.

### data - Acoustic Data

**Data File**

* `formants.RData` - acoustic data used in Fig. 5

**Column Descriptions**

See above column descriptions for repeated columns

* f2_onset, f2_vowel, f3_onset - as described in the methods
* f3.f2 - f3_onset - f2_onset
* training - whether a token was a training token for a training cohort, and if so which one
* distance columns - as described in the text. distances are from locus equation lines, "g1_dist" and etc. are the distances computed from locus equation lines when only cohort 1 training tokens were included, "dist_diff" is the difference of distances, again described in the text.

### data - Mouse Data

**Data File**

* `mouse_demographics.RData`

**Column Descriptions**

* Status - Nonlearner/Generalizer, whether the mouse reached the generalization task or not
* Box - training box used
* Litter - litter number of mice
* DoB - date of birth
* DateStart - date the mouse began training
* AgeStart - Age in weeks when mouse started training
* TrainDur - duration in weeks of training
* StartGen - Date the mouse started the generalization task, if at all
* DurTillGen - Amount of time spent training before reaching the generalization stage

#### data - GLMER Models

**Files**

* `lmer1.RData` : `correct ~ (1|mouse)`
* `lmer2.RData` : `correct ~ gentype2 + (1|mouse)`
* `lmer3.RData` : `correct ~ gentype2 + (1|mouse) + (0+gentype2|mouse)`
* `lmer4.RData` : `correct ~ gentype2 + (1 + gentype2|mouse)`

### Figures

Figures are generated programmatically as "FigureN_render.pdf", and then aesthetic modifications were made to generate "FigureN.pdf".


## Issues

We welcome feedback and criticism, please submit an issue and we will respond when possible.
