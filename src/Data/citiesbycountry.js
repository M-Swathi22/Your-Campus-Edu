// src/data/citiesByCountry.js
// City-level accommodation data, keyed by country id (matches countryDetails.js).
// Powers the City Selection "departures board" — CityHero + CityGrid.
// Each city: id, name, image, listingsCount, avgRent, note (what it's known for), status.

const citiesByCountry = {
  usa: [
    {
      id: "new-york",
      name: "New York",
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 214,
      avgRent: "₹1.1L–1.6L /mo",
      note: "Near NYU, Columbia & The New School",
      status: "OPEN",
    },
    {
      id: "boston",
      name: "Boston",
      image:
        "https://images.unsplash.com/photo-1501979376754-207e550da8fb?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 168,
      avgRent: "₹90K–1.3L /mo",
      note: "Near Harvard, MIT & Boston University",
      status: "OPEN",
    },
    {
      id: "san-francisco",
      name: "San Francisco",
      image:
        "https://images.unsplash.com/photo-1521464302861-ce943915d1c3?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 142,
      avgRent: "₹1.2L–1.8L /mo",
      note: "Near Berkeley & Stanford commuter belt",
      status: "OPEN",
    },
    {
      id: "chicago",
      name: "Chicago",
      image:
        "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 121,
      avgRent: "₹70K–1.05L /mo",
      note: "Near UChicago & Northwestern",
      status: "OPEN",
    },
  ],
  uk: [
    {
      id: "london",
      name: "London",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 256,
      avgRent: "₹85K–1.3L /mo",
      note: "Near UCL, Imperial & LSE",
      status: "OPEN",
    },
    {
      id: "manchester",
      name: "Manchester",
      image:
        "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 133,
      avgRent: "₹48K–72K /mo",
      note: "Near University of Manchester",
      status: "OPEN",
    },
    {
      id: "edinburgh",
      name: "Edinburgh",
      image:
        "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 87,
      avgRent: "₹52K–80K /mo",
      note: "Near University of Edinburgh",
      status: "OPEN",
    },
    {
      id: "birmingham",
      name: "Birmingham",
      image:
        "https://images.unsplash.com/photo-1596395463231-3f0d99b8b6d3?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 74,
      avgRent: "₹40K–62K /mo",
      note: "Near University of Birmingham",
      status: "OPEN",
    },
  ],
  canada: [
    {
      id: "toronto",
      name: "Toronto",
      image:
        "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 198,
      avgRent: "₹65K–95K /mo",
      note: "Near U of T & Toronto Metropolitan",
      status: "OPEN",
    },
    {
      id: "vancouver",
      name: "Vancouver",
      image:
        "https://images.unsplash.com/photo-1560814304-4f05b62af116?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 146,
      avgRent: "₹70K–1.0L /mo",
      note: "Near UBC & SFU",
      status: "OPEN",
    },
    {
      id: "montreal",
      name: "Montreal",
      image:
        "https://images.unsplash.com/photo-1519178614-68673b201f36?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 102,
      avgRent: "₹42K–65K /mo",
      note: "Near McGill & Concordia",
      status: "OPEN",
    },
    {
      id: "ottawa",
      name: "Ottawa",
      image:
        "https://images.unsplash.com/photo-1503883670021-49c9c6ce1c3d?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 58,
      avgRent: "₹38K–58K /mo",
      note: "Near University of Ottawa & Carleton",
      status: "OPEN",
    },
  ],
  australia: [
    {
      id: "sydney",
      name: "Sydney",
      image:
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 187,
      avgRent: "₹58K–88K /mo",
      note: "Near USYD & UNSW",
      status: "OPEN",
    },
    {
      id: "melbourne",
      name: "Melbourne",
      image:
        "https://images.unsplash.com/photo-1514395462725-fb4566210144?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 172,
      avgRent: "₹52K–80K /mo",
      note: "Near Melbourne Uni & Monash",
      status: "OPEN",
    },
    {
      id: "brisbane",
      name: "Brisbane",
      image:
        "https://images.unsplash.com/photo-1566734904496-9309bb1798ba?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 94,
      avgRent: "₹40K–62K /mo",
      note: "Near UQ & QUT",
      status: "OPEN",
    },
    {
      id: "adelaide",
      name: "Adelaide",
      image:
        "https://images.unsplash.com/photo-1571168507218-4c2e0f562bbc?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 51,
      avgRent: "₹32K–48K /mo",
      note: "Near University of Adelaide",
      status: "OPEN",
    },
  ],
  germany: [
    {
      id: "berlin",
      name: "Berlin",
      image:
        "https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 164,
      avgRent: "₹42K–65K /mo",
      note: "Near TU Berlin & Humboldt",
      status: "OPEN",
    },
    {
      id: "munich",
      name: "Munich",
      image:
        "https://images.unsplash.com/photo-1595867818082-083862f3d630?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 138,
      avgRent: "₹48K–72K /mo",
      note: "Near TUM & LMU",
      status: "OPEN",
    },
    {
      id: "frankfurt",
      name: "Frankfurt",
      image:
        "https://images.unsplash.com/photo-1577086664693-894d8405334a?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 76,
      avgRent: "₹38K–58K /mo",
      note: "Near Goethe University",
      status: "OPEN",
    },
    {
      id: "stuttgart",
      name: "Stuttgart",
      image:
        "https://images.unsplash.com/photo-1585161471262-5cd992343c40?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 49,
      avgRent: "₹32K–50K /mo",
      note: "Near University of Stuttgart",
      status: "OPEN",
    },
  ],
  ireland: [
    {
      id: "dublin",
      name: "Dublin",
      image:
        "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 121,
      avgRent: "₹58K–88K /mo",
      note: "Near Trinity, UCD & DCU",
      status: "OPEN",
    },
    {
      id: "cork",
      name: "Cork",
      image:
        "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 42,
      avgRent: "₹35K–52K /mo",
      note: "Near University College Cork",
      status: "OPEN",
    },
    {
      id: "galway",
      name: "Galway",
      image:
        "https://images.unsplash.com/photo-1590523278191-995cbcda646b?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 29,
      avgRent: "₹30K–46K /mo",
      note: "Near University of Galway",
      status: "OPEN",
    },
    {
      id: "limerick",
      name: "Limerick",
      image:
        "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 18,
      avgRent: "₹26K–40K /mo",
      note: "Near University of Limerick",
      status: "OPEN",
    },
  ],
  newzealand: [
    {
      id: "auckland",
      name: "Auckland",
      image:
        "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 88,
      avgRent: "₹42K–65K /mo",
      note: "Near University of Auckland & AUT",
      status: "OPEN",
    },
    {
      id: "wellington",
      name: "Wellington",
      image:
        "https://images.unsplash.com/photo-1589871173042-4a2e6a3f1e6f?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 46,
      avgRent: "₹35K–54K /mo",
      note: "Near Victoria University",
      status: "OPEN",
    },
    {
      id: "christchurch",
      name: "Christchurch",
      image:
        "https://images.unsplash.com/photo-1618845279010-3d3c4d8d1c1e?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 31,
      avgRent: "₹28K–44K /mo",
      note: "Near University of Canterbury",
      status: "OPEN",
    },
    {
      id: "dunedin",
      name: "Dunedin",
      image:
        "https://images.unsplash.com/photo-1622715043969-ce2a6cf5ba85?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 16,
      avgRent: "₹22K–34K /mo",
      note: "Near University of Otago",
      status: "OPEN",
    },
  ],
  singapore: [
    {
      id: "kent-ridge",
      name: "Kent Ridge",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 63,
      avgRent: "₹55K–82K /mo",
      note: "Adjacent to NUS",
      status: "OPEN",
    },
    {
      id: "bugis",
      name: "Bugis",
      image:
        "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 34,
      avgRent: "₹48K–70K /mo",
      note: "Short commute to SMU",
      status: "OPEN",
    },
    {
      id: "queenstown",
      name: "Queenstown",
      image:
        "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 21,
      avgRent: "₹42K–62K /mo",
      note: "Near one-north & NUS shuttle routes",
      status: "OPEN",
    },
    {
      id: "jurong-east",
      name: "Jurong East",
      image:
        "https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=1200&auto=format&fit=crop",
      listingsCount: 14,
      avgRent: "₹35K–52K /mo",
      note: "Near NTU shuttle interchange",
      status: "OPEN",
    },
  ],
};

export default citiesByCountry;