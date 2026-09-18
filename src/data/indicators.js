// Central source of truth for the labour-market indicators used by the UI.
// Data imported from the supplied NEW Excel workbook: new data(1).xlsx.
// Coverage: 1990–2025. Blank workbook cells are represented as null and are
// never guessed, interpolated, or replaced with values from the old dataset.

export const labourMarketData = [
  {
    "year": 1990,
    "male_lfpr": 86.118,
    "female_lfpr": 30.257,
    "male_unemployment": null,
    "female_unemployment": null,
    "employment_to_population_ratio": null,
    "gdp_growth": null,
    "youth_unemployment": null
  },
  {
    "year": 1991,
    "male_lfpr": 86.105,
    "female_lfpr": 30.361,
    "male_unemployment": 7.62,
    "female_unemployment": 7.702,
    "employment_to_population_ratio": 53.537,
    "gdp_growth": 1.05683143296179,
    "youth_unemployment": 20.18
  },
  {
    "year": 1992,
    "male_lfpr": 86.081,
    "female_lfpr": 30.476,
    "male_unemployment": 7.629,
    "female_unemployment": 7.71,
    "employment_to_population_ratio": 53.561,
    "gdp_growth": 5.48239602167003,
    "youth_unemployment": 20.26
  },
  {
    "year": 1993,
    "male_lfpr": 86.054,
    "female_lfpr": 30.595,
    "male_unemployment": 7.642,
    "female_unemployment": 7.721,
    "employment_to_population_ratio": 53.581,
    "gdp_growth": 4.7507762195799,
    "youth_unemployment": 20.35
  },
  {
    "year": 1994,
    "male_lfpr": 86.016,
    "female_lfpr": 30.736,
    "male_unemployment": 7.57,
    "female_unemployment": 7.66,
    "employment_to_population_ratio": 53.655,
    "gdp_growth": 6.65892406747307,
    "youth_unemployment": 20.27
  },
  {
    "year": 1995,
    "male_lfpr": 86.143,
    "female_lfpr": 31.331,
    "male_unemployment": 7.545,
    "female_unemployment": 7.639,
    "employment_to_population_ratio": 53.975,
    "gdp_growth": 7.57449184027195,
    "youth_unemployment": 20.2
  },
  {
    "year": 1996,
    "male_lfpr": 86.265,
    "female_lfpr": 31.934,
    "male_unemployment": 7.511,
    "female_unemployment": 7.611,
    "employment_to_population_ratio": 54.302,
    "gdp_growth": 7.54952224888829,
    "youth_unemployment": 20.12
  },
  {
    "year": 1997,
    "male_lfpr": 86.387,
    "female_lfpr": 32.542,
    "male_unemployment": 7.549,
    "female_unemployment": 7.643,
    "employment_to_population_ratio": 54.592,
    "gdp_growth": 4.04982084902483,
    "youth_unemployment": 20.19
  },
  {
    "year": 1998,
    "male_lfpr": 86.509,
    "female_lfpr": 33.157,
    "male_unemployment": 7.571,
    "female_unemployment": 7.661,
    "employment_to_population_ratio": 54.892,
    "gdp_growth": 6.18441582080355,
    "youth_unemployment": 20.22
  },
  {
    "year": 1999,
    "male_lfpr": 86.628,
    "female_lfpr": 33.775,
    "male_unemployment": 7.558,
    "female_unemployment": 7.65,
    "employment_to_population_ratio": 55.213,
    "gdp_growth": 8.84575556114116,
    "youth_unemployment": 20.19
  },
  {
    "year": 2000,
    "male_lfpr": 86.742,
    "female_lfpr": 34.397,
    "male_unemployment": 7.564,
    "female_unemployment": 7.655,
    "employment_to_population_ratio": 55.52,
    "gdp_growth": 3.84099115686554,
    "youth_unemployment": 20.2
  },
  {
    "year": 2001,
    "male_lfpr": 86.369,
    "female_lfpr": 34.483,
    "male_unemployment": 7.587,
    "female_unemployment": 7.674,
    "employment_to_population_ratio": 55.363,
    "gdp_growth": 4.82396626397303,
    "youth_unemployment": 20.42
  },
  {
    "year": 2002,
    "male_lfpr": 85.993,
    "female_lfpr": 34.57,
    "male_unemployment": 7.659,
    "female_unemployment": 7.736,
    "employment_to_population_ratio": 55.175,
    "gdp_growth": 3.80397532120038,
    "youth_unemployment": 20.76
  },
  {
    "year": 2003,
    "male_lfpr": 85.614,
    "female_lfpr": 34.66,
    "male_unemployment": 7.61,
    "female_unemployment": 7.694,
    "employment_to_population_ratio": 55.056,
    "gdp_growth": 7.86038147545045,
    "youth_unemployment": 20.86
  },
  {
    "year": 2004,
    "male_lfpr": 85.229,
    "female_lfpr": 34.753,
    "male_unemployment": 7.573,
    "female_unemployment": 7.663,
    "employment_to_population_ratio": 54.928,
    "gdp_growth": 7.92293661307978,
    "youth_unemployment": 20.99
  },
  {
    "year": 2005,
    "male_lfpr": 84.847,
    "female_lfpr": 34.852,
    "male_unemployment": 7.523,
    "female_unemployment": 7.62,
    "employment_to_population_ratio": 54.812,
    "gdp_growth": 7.92343062131789,
    "youth_unemployment": 21.12
  },
  {
    "year": 2006,
    "male_lfpr": 84.294,
    "female_lfpr": 33.499,
    "male_unemployment": 7.526,
    "female_unemployment": 7.623,
    "employment_to_population_ratio": 53.938,
    "gdp_growth": 8.06073257305057,
    "youth_unemployment": 21.47
  },
  {
    "year": 2007,
    "male_lfpr": 83.744,
    "female_lfpr": 32.179,
    "male_unemployment": 7.536,
    "female_unemployment": 7.631,
    "employment_to_population_ratio": 53.076,
    "gdp_growth": 7.66081506510766,
    "youth_unemployment": 21.86
  },
  {
    "year": 2008,
    "male_lfpr": 83.203,
    "female_lfpr": 30.892,
    "male_unemployment": 7.606,
    "female_unemployment": 7.691,
    "employment_to_population_ratio": 52.2,
    "gdp_growth": 3.08669805950082,
    "youth_unemployment": 22.42
  },
  {
    "year": 2009,
    "male_lfpr": 82.674,
    "female_lfpr": 29.641,
    "male_unemployment": 7.615,
    "female_unemployment": 7.698,
    "employment_to_population_ratio": 51.379,
    "gdp_growth": 7.8618888330338,
    "youth_unemployment": 22.86
  },
  {
    "year": 2010,
    "male_lfpr": 82.157,
    "female_lfpr": 28.425,
    "male_unemployment": 7.61,
    "female_unemployment": 7.694,
    "employment_to_population_ratio": 50.586,
    "gdp_growth": 8.49758470165625,
    "youth_unemployment": 23.3
  },
  {
    "year": 2011,
    "male_lfpr": 81.732,
    "female_lfpr": 27.583,
    "male_unemployment": 7.587,
    "female_unemployment": 7.675,
    "employment_to_population_ratio": 50.012,
    "gdp_growth": 5.24131620024293,
    "youth_unemployment": 23.64
  },
  {
    "year": 2012,
    "male_lfpr": 81.316,
    "female_lfpr": 26.764,
    "male_unemployment": 7.625,
    "female_unemployment": 7.707,
    "employment_to_population_ratio": 49.418,
    "gdp_growth": 5.45638755164772,
    "youth_unemployment": 24.14
  },
  {
    "year": 2013,
    "male_lfpr": 81.209,
    "female_lfpr": 26.669,
    "male_unemployment": 7.659,
    "female_unemployment": 7.736,
    "employment_to_population_ratio": 49.267,
    "gdp_growth": 6.38610640091713,
    "youth_unemployment": 24.47
  },
  {
    "year": 2014,
    "male_lfpr": 81.058,
    "female_lfpr": 26.607,
    "male_unemployment": 7.636,
    "female_unemployment": 7.717,
    "employment_to_population_ratio": 49.132,
    "gdp_growth": 7.41022760516977,
    "youth_unemployment": 24.71
  },
  {
    "year": 2015,
    "male_lfpr": 80.853,
    "female_lfpr": 26.582,
    "male_unemployment": 7.609,
    "female_unemployment": 7.693,
    "employment_to_population_ratio": 48.985,
    "gdp_growth": 7.99625378567987,
    "youth_unemployment": 24.96
  },
  {
    "year": 2016,
    "male_lfpr": 80.628,
    "female_lfpr": 26.575,
    "male_unemployment": 7.59,
    "female_unemployment": 7.678,
    "employment_to_population_ratio": 48.83,
    "gdp_growth": 8.25630550176662,
    "youth_unemployment": 25.23
  },
  {
    "year": 2017,
    "male_lfpr": 80.393,
    "female_lfpr": 26.578,
    "male_unemployment": 7.605,
    "female_unemployment": 7.69,
    "employment_to_population_ratio": 48.655,
    "gdp_growth": 6.79538341902422,
    "youth_unemployment": 25.59
  },
  {
    "year": 2018,
    "male_lfpr": 80.158,
    "female_lfpr": 26.568,
    "male_unemployment": 7.632,
    "female_unemployment": 7.713,
    "employment_to_population_ratio": 48.466,
    "gdp_growth": 6.45385134495295,
    "youth_unemployment": 26.0
  },
  {
    "year": 2019,
    "male_lfpr": 79.928,
    "female_lfpr": 26.539,
    "male_unemployment": 6.653,
    "female_unemployment": 6.073,
    "employment_to_population_ratio": 48.88,
    "gdp_growth": 3.87143694070524,
    "youth_unemployment": 22.95
  },
  {
    "year": 2020,
    "male_lfpr": 79.12,
    "female_lfpr": 25.998,
    "male_unemployment": 8.219,
    "female_unemployment": 6.749,
    "employment_to_population_ratio": 47.496,
    "gdp_growth": -5.77772470687303,
    "youth_unemployment": 24.67
  },
  {
    "year": 2021,
    "male_lfpr": 79.511,
    "female_lfpr": 27.724,
    "male_unemployment": 6.72,
    "female_unemployment": 5.394,
    "employment_to_population_ratio": 49.171,
    "gdp_growth": 9.68959249191741,
    "youth_unemployment": 20.82
  },
  {
    "year": 2022,
    "male_lfpr": 80.154,
    "female_lfpr": 29.348,
    "male_unemployment": 4.907,
    "female_unemployment": 4.587,
    "employment_to_population_ratio": 51.003,
    "gdp_growth": 7.6093649776932,
    "youth_unemployment": 17.73
  },
  {
    "year": 2023,
    "male_lfpr": 80.903,
    "female_lfpr": 30.984,
    "male_unemployment": 4.216,
    "female_unemployment": 4.057,
    "employment_to_population_ratio": 52.415,
    "gdp_growth": 7.210224629335,
    "youth_unemployment": 15.6
  },
  {
    "year": 2024,
    "male_lfpr": 81.489,
    "female_lfpr": 32.415,
    "male_unemployment": 4.207,
    "female_unemployment": 4.088,
    "employment_to_population_ratio": 53.317,
    "gdp_growth": 7.09927893176518,
    "youth_unemployment": 15.75
  },
  {
    "year": 2025,
    "male_lfpr": 81.652,
    "female_lfpr": 32.425,
    "male_unemployment": 4.249,
    "female_unemployment": 4.141,
    "employment_to_population_ratio": 53.31,
    "gdp_growth": 7.56666179284244,
    "youth_unemployment": 16.02
  }
];

export const availableYears = labourMarketData.map(row => row.year);

export const getYearData = year =>
  labourMarketData.find(row => row.year === Number(year));

export const calculateLfprGap = row =>
  row && row.male_lfpr != null && row.female_lfpr != null
    ? row.male_lfpr - row.female_lfpr
    : null;

export const calculateChange = (current, previous) =>
  current == null || previous == null ? null : current - previous;

const formatPercent = value => value == null ? '—' : `${value.toFixed(2)}%`;

export const indicators = labourMarketData.flatMap(row => ([
  {
    id: `female-lfpr-${row.year}`,
    name: 'Female LFPR',
    value: row.female_lfpr,
    displayValue: formatPercent(row.female_lfpr),
    year: row.year,
    unit: '%',
    population: 'Women',
    source: 'New dataset',
    description: 'Female labour-force participation rate.'
  },
  {
    id: `male-lfpr-${row.year}`,
    name: 'Male LFPR',
    value: row.male_lfpr,
    displayValue: formatPercent(row.male_lfpr),
    year: row.year,
    unit: '%',
    population: 'Men',
    source: 'New dataset',
    description: 'Male labour-force participation rate.'
  },
  {
    id: `youth-unemployment-${row.year}`,
    name: 'Youth Unemployment',
    value: row.youth_unemployment,
    displayValue: formatPercent(row.youth_unemployment),
    year: row.year,
    unit: '%',
    population: 'India',
    source: 'New dataset',
    description: 'Youth unemployment rate.'
  },
  {
    id: `employment-to-population-${row.year}`,
    name: 'Employment-to-Population Ratio',
    value: row.employment_to_population_ratio,
    displayValue: formatPercent(row.employment_to_population_ratio),
    year: row.year,
    unit: '%',
    population: 'India',
    source: 'New dataset',
    description: 'Employment-to-population ratio.'
  },
  {
    id: `gdp-growth-${row.year}`,
    name: 'GDP Growth',
    value: row.gdp_growth,
    displayValue: formatPercent(row.gdp_growth),
    year: row.year,
    unit: '%',
    population: 'India',
    source: 'New dataset',
    description: 'Annual GDP growth rate.'
  }
]));

export const headlineStats = [
  indicators.find(x => x.id === 'female-lfpr-2025'),
  indicators.find(x => x.id === 'male-lfpr-2025'),
  indicators.find(x => x.id === 'youth-unemployment-2025'),
];

const data2013 = getYearData(2013);
const data2025 = getYearData(2025);

export const genderGap = {
  male: data2025?.male_lfpr ?? null,
  female: data2025?.female_lfpr ?? null,
  gap: calculateLfprGap(data2025),
  gap2013: calculateLfprGap(data2013),
  gapChange: calculateChange(calculateLfprGap(data2025), calculateLfprGap(data2013)),
};

export const endpointData = {
  gdp: {
    from: indicators.find(x => x.id === 'gdp-growth-2013'),
    to: indicators.find(x => x.id === 'gdp-growth-2025'),
  },
  youthUnemployment: {
    from: indicators.find(x => x.id === 'youth-unemployment-2013'),
    to: indicators.find(x => x.id === 'youth-unemployment-2025'),
  },
  femaleLfpr: {
    from: indicators.find(x => x.id === 'female-lfpr-2013'),
    to: indicators.find(x => x.id === 'female-lfpr-2025'),
  },
  maleLfpr: {
    from: indicators.find(x => x.id === 'male-lfpr-2013'),
    to: indicators.find(x => x.id === 'male-lfpr-2025'),
  },
};
