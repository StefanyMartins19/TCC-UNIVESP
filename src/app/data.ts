export type Indicator = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  category: string;
  institution: string;
  code: string;
  unit: string;
  periodicity: string;
  coverage: string;
  value: number;
  change: number;
  color: string;
  available: string;
};

export const indicators: Indicator[] = [
  {
    id: "inadimplencia",
    name: "Inadimplência da carteira de crédito — Pessoas físicas",
    shortName: "Inadimplência PF",
    description:
      "Proporção da carteira de crédito com atraso superior ao critério definido pela fonte.",
    category: "Crédito",
    institution: "Banco Central do Brasil",
    code: "SGS 21084",
    unit: "%",
    periodicity: "Mensal",
    coverage: "Brasil",
    value: 4.7,
    change: 0.2,
    color: "#2563eb",
    available: "jan/2011 – nov/2025",
  },
  {
    id: "juros",
    name: "Taxa média de juros das operações de crédito livre — Pessoas físicas",
    shortName: "Juros crédito livre PF",
    description: "Taxa média de juros das novas operações de crédito com recursos livres.",
    category: "Crédito",
    institution: "Banco Central do Brasil",
    code: "SGS 25462",
    unit: "% a.a.",
    periodicity: "Mensal",
    coverage: "Brasil",
    value: 56.4,
    change: 1.1,
    color: "#8b5cf6",
    available: "mar/2011 – nov/2025",
  },
  {
    id: "renda",
    name: "Comprometimento da renda das famílias com o serviço da dívida",
    shortName: "Comprometimento da renda",
    description: "Estimativa do comprometimento da renda com pagamentos do serviço da dívida.",
    category: "Endividamento",
    institution: "Banco Central do Brasil",
    code: "SGS 29265",
    unit: "%",
    periodicity: "Mensal",
    coverage: "Brasil",
    value: 27.8,
    change: -0.3,
    color: "#0891b2",
    available: "jan/2005 – out/2025",
  },
  {
    id: "desocupacao",
    name: "Taxa de desocupação",
    shortName: "Taxa de desocupação",
    description: "Percentual de pessoas desocupadas na força de trabalho.",
    category: "Trabalho e renda",
    institution: "IBGE",
    code: "PNAD Contínua",
    unit: "%",
    periodicity: "Trimestral",
    coverage: "Brasil e UFs",
    value: 5.6,
    change: -0.4,
    color: "#f59e0b",
    available: "1º tri/2012 – 3º tri/2025",
  },
  {
    id: "rendimento",
    name: "Rendimento médio real habitual",
    shortName: "Rendimento médio",
    description: "Rendimento real habitual de todos os trabalhos das pessoas ocupadas.",
    category: "Trabalho e renda",
    institution: "IBGE",
    code: "PNAD Contínua",
    unit: "R$",
    periodicity: "Trimestral",
    coverage: "Brasil e UFs",
    value: 3528,
    change: 1.3,
    color: "#16a34a",
    available: "1º tri/2012 – 3º tri/2025",
  },
  {
    id: "ipca",
    name: "Índice Nacional de Preços ao Consumidor Amplo",
    shortName: "IPCA",
    description:
      "Variação de preços de um conjunto de produtos e serviços consumidos pelas famílias.",
    category: "Contexto econômico",
    institution: "IBGE",
    code: "SIDRA 7060",
    unit: "% a.m.",
    periodicity: "Mensal",
    coverage: "Brasil e áreas selecionadas",
    value: 0.41,
    change: -0.07,
    color: "#dc2626",
    available: "jan/1980 – nov/2025",
  },
];

export const months = [
  "Jan/24",
  "Fev/24",
  "Mar/24",
  "Abr/24",
  "Mai/24",
  "Jun/24",
  "Jul/24",
  "Ago/24",
  "Set/24",
  "Out/24",
  "Nov/24",
  "Dez/24",
  "Jan/25",
  "Fev/25",
  "Mar/25",
  "Abr/25",
  "Mai/25",
  "Jun/25",
  "Jul/25",
  "Ago/25",
  "Set/25",
  "Out/25",
  "Nov/25",
];
const waves = [
  [
    4.5, 4.6, 4.6, 4.7, 4.8, 4.7, 4.6, 4.5, 4.5, 4.4, 4.5, 4.6, 4.6, 4.7, 4.8, 4.9, 4.8, 4.7, 4.7,
    4.6, 4.6, 4.7, 4.7,
  ],
  [
    55, 54.6, 54.2, 53.8, 53.1, 52.7, 52.4, 52.1, 51.7, 51.4, 51.8, 52.2, 52.8, 53.4, 53.9, 54.3,
    54.8, 55.1, 55.5, 55.8, 56.1, 56.2, 56.4,
  ],
  [
    28.4, 28.2, 28.1, 28, 27.9, 28.1, 28.2, 28, 27.8, 27.7, 27.9, 28.1, 28, 27.9, 27.7, 27.6, 27.5,
    27.6, 27.7, 27.8, 27.9, 27.8, 27.8,
  ],
  [
    7.4, 7.4, 7.2, 7.1, 6.9, 6.9, 6.8, 6.6, 6.4, 6.2, 6.1, 6.2, 6.4, 6.5, 6.2, 6, 5.9, 5.8, 5.7,
    5.6, 5.6, 5.6, 5.6,
  ],
  [
    3190, 3205, 3210, 3220, 3240, 3260, 3270, 3290, 3305, 3320, 3340, 3350, 3370, 3390, 3410, 3430,
    3445, 3460, 3470, 3485, 3500, 3510, 3528,
  ],
  [
    0.42, 0.83, 0.16, 0.38, 0.46, 0.21, 0.38, -0.02, 0.44, 0.56, 0.39, 0.52, 0.16, 1.31, 0.56, 0.43,
    0.26, 0.24, 0.26, -0.11, 0.48, 0.09, 0.41,
  ],
];

export const seriesData = months.map((month, i) => ({
  month,
  ...Object.fromEntries(indicators.map((item, index) => [item.id, waves[index][i]])),
}));

export const states = [
  ["SP", "Sudeste", 8.7],
  ["RJ", "Sudeste", 7.9],
  ["MG", "Sudeste", 5.8],
  ["ES", "Sudeste", 4.5],
  ["BA", "Nordeste", 9.7],
  ["PE", "Nordeste", 10.4],
  ["CE", "Nordeste", 7.6],
  ["MA", "Nordeste", 8.0],
  ["PR", "Sul", 4.0],
  ["SC", "Sul", 2.8],
  ["RS", "Sul", 5.1],
  ["GO", "Centro-Oeste", 5.6],
  ["DF", "Centro-Oeste", 8.8],
  ["MT", "Centro-Oeste", 3.8],
  ["MS", "Centro-Oeste", 4.1],
  ["PA", "Norte", 7.1],
  ["AM", "Norte", 8.0],
  ["RO", "Norte", 3.3],
  ["AC", "Norte", 7.1],
] as const;
