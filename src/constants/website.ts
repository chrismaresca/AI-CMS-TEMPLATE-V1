// Copyright Year
export const COPYRIGHT_YEAR = "2025";

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// DEFAULT METADATA

const DEFAULT_METADATA_TITLE = "Chris Maresca";
const DEFAULT_METADATA_DESCRIPTION = "A space dedicated to building, learning, and exploring my curiosities.";
const DEFAULT_METADATA_URL = "www.chrismaresca.dev";

export const DEFAULT_METADATA = {
  title: DEFAULT_METADATA_TITLE,
  description: DEFAULT_METADATA_DESCRIPTION,
  openGraph: {
    title: DEFAULT_METADATA_TITLE,
    description: DEFAULT_METADATA_DESCRIPTION,
    type: "website",
    locale: "en_US",
    siteName: DEFAULT_METADATA_TITLE,
    url: DEFAULT_METADATA_URL,
  },
  twitter: {
    title: DEFAULT_METADATA_TITLE,
    description: DEFAULT_METADATA_DESCRIPTION,
  },
  alternates: {
    canonical: DEFAULT_METADATA_URL,
  },
};


// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// ARTICLES

export const ARTICLES_TITLE = "Writing on artificial intelligence, product design, and just about anything I find interesting.";
export const ARTICLES_MOBILE_TITLE = "Writing on AI, product design, and just about anything I find interesting.";

export const ARTICLES_DESC = "My reflections on the art of building — from AI and design, to the curiosities that shape my journey.";
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------

// ARTICLES DEFAULT METADATA

const DEFAULT_ARTICLES_METADATA_TITLE = "Articles";
const DEFAULT_ARTICLES_METADATA_DESCRIPTION = "Articles about artificial intelligence and reflections on the art of building.";
const DEFAULT_ARTICLES_METADATA_URL = "/articles";

export const ARTICLES_DEFAULT_METADATA = {
  title: ARTICLES_TITLE,
  description: ARTICLES_DESC,
  openGraph: {
    title: DEFAULT_ARTICLES_METADATA_TITLE,
    description: DEFAULT_ARTICLES_METADATA_DESCRIPTION,
    url: DEFAULT_ARTICLES_METADATA_URL,
  },
  twitter: {
    title: DEFAULT_ARTICLES_METADATA_TITLE,
    description: DEFAULT_ARTICLES_METADATA_DESCRIPTION,
  },
  alternates: {
    canonical: DEFAULT_ARTICLES_METADATA_URL,
  },
};

