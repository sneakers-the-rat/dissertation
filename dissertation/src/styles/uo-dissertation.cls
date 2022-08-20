%%
%
%% Adding/overriding custom styles:
%
% The class imports `uo-dissertation-local.tex` from the working directory, and so all customizations beyond the base class should be put there.
%
%% ----------------------------------------
%% References
%
% https://developerfacts.com/answer/581916-how-do-you-extend-article-document-class-in-latex
%% ----------------------------------------

\NeedsTeXFormat{LaTeX2e}[1994/06/01]

\ProvidesClass{uo-dissertation}[2020/08/18 University of Oregon Dissertation Class]

% Passes and class options to the underlying article class
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{report}}
\ProcessOptions

% Load LaTeX's book class
\LoadClass{report}

%% -------------------------------------
% Class Metadata & Intra-class functions
\newcommand{\@diss@class}{report}% the base LaTeX class (defaults to the article/handout style)
\newcommand{\@diss@pkgname}{uo-dissertation}

%%
% Define some shortcut macros for error/warning/info logging.
\RequirePackage{hardwrap}
\GenerateClassLogMacros[@diss]{\@diss@pkgname}
\newcommand{\@diss@debug@info}[1]{\ifthenelse{\boolean{@diss@debug}}{\@diss@info{#1}}{}}
\newcommand{\@diss@debug@info@noline}[1]{\ifthenelse{\boolean{@diss@debug}}{\@diss@info@noline{#1}}{}}

%% ------------------------------------
% Packages!

% Restyle title and toc, load before hyperref
\RequirePackage{titlesec,titletoc}

\RequirePackage{url}
\RequirePackage[unicode]{hyperref}
\RequirePackage{graphicx}
\RequirePackage{siunitx}
\RequirePackage[usenames, svgnames]{xcolor}
\RequirePackage{geometry}

\RequirePackage{tabularx, booktabs}
\RequirePackage{amsmath}
\RequirePackage{amsfonts}

\RequirePackage[backend=bibtex,style=numeric,%
hyperref=true,backref=true,sorting=none%
]{biblatex}

\RequirePackage{caption}
\RequirePackage{footmisc}
\RequirePackage{setspace}
\RequirePackage[autostyle, english=american]{csquotes}



%% -------------------------------------
% Class configuration to match UO's style

% Minimum 1in margins 
\geometry{
	left=1in,
	right=1in,
	bottom=1in,
	top=1in
}

% 1.5 to 2 line spacing for body text
\renewcommand{\baselinestretch}{1.5}

% 1 line between footnotes
\setlength{\footnotesep}{1.5em}
% Single-spaced footnotes
\renewcommand{\footnotelayout}{\setstretch{1.0}}


%% -------------------------------
% QoL

\MakeOuterQuote{"}


%% -------------------------------------
% If there is a `tufte-book-local.sty' file, load it.


\IfFileExists{uo-dissertation-local.tex}{%
  \@diss@info@noline{Loading uo-dissertation-local.tex}%
  \input{uo-dissertation-local}%
}{}