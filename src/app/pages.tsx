import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Database,
  ExternalLink,
  FileCheck2,
  FileText,
  Globe2,
  GraduationCap,
  Info,
  Layers3,
  LineChart as LineIcon,
  Maximize2,
  Microscope,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { indicators, states } from "./data";
import {
  BrazilMap,
  DataTable,
  DemoBadge,
  EmptyState,
  FilterPanel,
  KPIStatCard,
  Modal,
  SectionHeader,
  Select,
  TimeSeriesChart,
} from "./components";

const Page = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-[1600px] px-4 py-7 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);
const homeFeatures: Array<[LucideIcon, string, string]> = [
  [
    CircleHelp,
    "Compreender o problema",
    "Indicadores articulados ajudam a observar múltiplas dimensões da inadimplência.",
  ],
  [
    Database,
    "Valorizar dados públicos",
    "Séries oficiais tornam a análise verificável, replicável e acessível.",
  ],
  [
    Microscope,
    "Apoiar a pesquisa",
    "Uma interface exploratória para investigação acadêmica e educação financeira.",
  ],
  [
    ShieldCheck,
    "Preservar transparência",
    "Cada indicador informa fonte, unidade, frequência e disponibilidade.",
  ],
];

export function HomePage() {
  const navigate = useNavigate();
  const [indicator, setIndicator] = useState("inadimplencia");
  return (
    <>
      <section className="hero overflow-hidden">
        <div className="hero-grid" />
        <Page className="relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <div>
            <div className="hero-kicker">
              <Sparkles size={14} /> Plataforma acadêmica de inteligência estatística
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-.04em] text-white sm:text-5xl lg:text-[58px]">
              Entenda a inadimplência brasileira{" "}
              <span className="text-blue-300">por meio dos dados.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300">
              Explore indicadores públicos de crédito, endividamento e contexto socioeconômico em
              uma plataforma de análise visual, interativa e transparente.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary btn-lg" to="/dashboard">
                Explorar dashboard <ArrowRight size={17} />
              </Link>
              <a className="btn-ghost-light btn-lg" href="#plataforma">
                Conhecer a plataforma
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                Dados agregados
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                Fontes rastreáveis
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                Finalidade educacional
              </span>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-10 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative rounded-[24px] border border-white/15 bg-white/[.08] p-4 shadow-2xl backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <i />
                  <i />
                  <i />
                </div>
                <span className="text-[10px] font-medium text-blue-200">
                  PAINEL ANALÍTICO · DEMONSTRAÇÃO
                </span>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wide text-slate-400">
                      Inadimplência PF
                    </p>
                    <p className="mt-1 text-2xl font-bold text-slate-900">
                      4,7<span className="ml-1 text-xs text-slate-400">%</span>
                    </p>
                  </div>
                  <DemoBadge />
                </div>
                <TimeSeriesChart selected={["inadimplencia", "juros"]} height={225} />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {indicators.slice(1, 4).map((i) => (
                  <div key={i.id} className="rounded-xl border border-white/10 bg-white/[.08] p-3">
                    <p className="truncate text-[9px] text-slate-400">{i.shortName}</p>
                    <p className="mt-1 text-lg font-bold text-white">
                      {i.value.toLocaleString("pt-BR")}
                      <small className="ml-1 text-[9px] font-normal">{i.unit}</small>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Page>
      </section>
      <Page>
        <SectionHeader
          eyebrow="Indicadores em destaque"
          title="Um retrato sintético do cenário"
          description="Valores ilustrativos para demonstrar a interface. Consulte as fontes oficiais antes de qualquer uso analítico."
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {indicators.slice(0, 4).map((i) => (
            <KPIStatCard key={i.id} item={i} onClick={() => navigate(`/indicadores/${i.id}`)} />
          ))}
        </div>
        <section className="py-16">
          <div className="card p-5 sm:p-7">
            <SectionHeader
              eyebrow="Prévia analítica"
              title="Evolução temporal"
              description="Alterne o indicador para observar a série em sua periodicidade original."
              action={
                <Select
                  label="Indicador"
                  value={indicator}
                  onChange={setIndicator}
                  options={indicators.slice(0, 4).map((i) => i.id)}
                />
              }
            />
            <TimeSeriesChart selected={[indicator]} height={370} />
            <div className="mt-4 flex justify-end">
              <Link to="/dashboard" className="btn-secondary">
                Abrir análise completa <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
        <section id="plataforma" className="pb-14">
          <SectionHeader
            eyebrow="Por que o observatório?"
            title="Dados públicos com contexto e transparência"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {homeFeatures.map(([Icon, t, d]) => (
              <div className="card p-6" key={t}>
                <div className="feature-icon">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{d}</p>
              </div>
            ))}
          </div>
        </section>
      </Page>
      <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
        <Page className="flex flex-col justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold">Observatório Brasileiro da Inadimplência</p>
            <p className="mt-1 text-xs text-slate-500">
              Projeto acadêmico — Engenharia de Computação — UNIVESP
            </p>
          </div>
          <p className="text-xs text-slate-500">
            Dados públicos agregados, com finalidade exploratória.
          </p>
        </Page>
      </footer>
    </>
  );
}

export function DashboardPage() {
  const [type, setType] = useState<"line" | "bar">("line");
  const [notice, setNotice] = useState("");
  const [selected, setSelected] = useState<string>();
  const [a, setA] = useState("inadimplencia");
  const [b, setB] = useState("juros");
  return (
    <Page>
      <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="eyebrow">Dashboard nacional</div>
          <h1 className="page-title">Visão geral da inadimplência</h1>
          <p className="page-subtitle">
            Acompanhe os principais indicadores de crédito e contexto socioeconômico do Brasil.
          </p>
        </div>
        <div className="flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-500 dark:border-white/10 dark:bg-white/5">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span>Referência mais recente</span>
          <strong className="text-slate-800 dark:text-white">Nov/2025</strong>
        </div>
      </div>
      <FilterPanel
        onApply={() => {
          setNotice("Filtros aplicados à visualização demonstrativa.");
          setTimeout(() => setNotice(""), 3000);
        }}
        onClear={() => {
          setNotice("Filtros restaurados.");
          setTimeout(() => setNotice(""), 3000);
        }}
      />
      {notice && (
        <div className="toast">
          <CheckCircle2 size={16} />
          {notice}
        </div>
      )}
      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {indicators.slice(0, 4).map((i) => (
          <KPIStatCard key={i.id} item={i} onClick={() => setSelected(i.id)} />
        ))}
      </div>
      <section className="mt-5 card p-5 sm:p-7">
        <SectionHeader
          title="Evolução dos indicadores"
          description="Séries com unidades compatíveis devem ser analisadas no mesmo eixo. Valores abaixo são demonstrativos."
          action={
            <div className="segmented">
              <button className={type === "line" ? "on" : ""} onClick={() => setType("line")}>
                <LineIcon size={15} />
                Linhas
              </button>
              <button className={type === "bar" ? "on" : ""} onClick={() => setType("bar")}>
                <BarChart3 size={15} />
                Barras
              </button>
              <button title="Ampliar">
                <Maximize2 size={15} />
              </button>
            </div>
          }
        />
        <TimeSeriesChart
          selected={["inadimplencia", "renda", "desocupacao"]}
          type={type}
          height={390}
        />
      </section>
      <section className="mt-5 card p-5 sm:p-7">
        <SectionHeader
          eyebrow="Comparação exploratória"
          title="Indicadores lado a lado"
          description="Escalas próprias preservam a leitura de séries com unidades distintas."
        />
        <div className="mb-5 grid gap-3 sm:grid-cols-2">
          <Select
            label="Indicador A"
            value={a}
            onChange={setA}
            options={indicators.map((i) => i.id)}
          />
          <Select
            label="Indicador B"
            value={b}
            onChange={setB}
            options={indicators.map((i) => i.id)}
          />
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="chart-frame">
            <TimeSeriesChart selected={[a]} height={250} />
          </div>
          <div className="chart-frame">
            <TimeSeriesChart selected={[b]} height={250} />
          </div>
        </div>
        <p className="method-note">
          <Info size={14} />A comparação é descritiva e não implica causalidade. Frequência,
          conceito e abrangência podem divergir entre as séries.
        </p>
      </section>
      <div className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_.85fr]">
        <section className="card p-5 sm:p-7">
          <SectionHeader
            title="Distribuição territorial"
            description="Disponibilidade verificada por indicador e fonte."
          />
          <BrazilMap />
          <div className="mt-4">
            <EmptyState />
          </div>
        </section>
        <section className="card p-5 sm:p-7">
          <SectionHeader
            title="Ranking estadual"
            description="Habilitado somente para indicadores com recorte territorial comparável."
          />
          <EmptyState
            title="Ranking não calculado"
            text="Selecione uma série do IBGE com observações estaduais para habilitar esta visualização."
          />
        </section>
      </div>
      <section className="mt-5">
        <SectionHeader
          title="Tabela analítica"
          description="Os registros respeitam os filtros ativos e podem ser exportados como CSV."
        />
        <DataTable />
      </section>
      {selected && (
        <Modal
          item={indicators.find((i) => i.id === selected)!}
          onClose={() => setSelected(undefined)}
        />
      )}
    </Page>
  );
}

export function IndicatorsPage() {
  const { id } = useParams();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Todas");
  const [detail, setDetail] = useState<string | undefined>(id);
  const list = useMemo(
    () =>
      indicators.filter(
        (i) =>
          (cat === "Todas" || i.category === cat) &&
          `${i.name} ${i.institution}`.toLowerCase().includes(q.toLowerCase()),
      ),
    [q, cat],
  );
  const item = detail ? indicators.find((i) => i.id === detail) : undefined;
  return (
    <Page>
      <div className="eyebrow">Catálogo de séries</div>
      <h1 className="page-title">Explorar indicadores</h1>
      <p className="page-subtitle">
        Pesquise conceitos, instituições e séries disponíveis no observatório.
      </p>
      <div className="card mt-7 grid gap-3 p-4 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <label>
          <span className="field-label">Pesquisa</span>
          <div className="relative">
            <Search className="absolute left-3 top-3 text-slate-400" size={16} />
            <input
              className="field pl-9"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Nome ou fonte…"
            />
          </div>
        </label>
        <Select
          label="Categoria"
          value={cat}
          onChange={setCat}
          options={["Todas", "Crédito", "Endividamento", "Trabalho e renda", "Contexto econômico"]}
        />
        <Select label="Instituição" options={["Todas", "Banco Central do Brasil", "IBGE"]} />
        <Select label="Periodicidade" options={["Todas", "Mensal", "Trimestral"]} />
      </div>
      <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
        <span>{list.length} indicadores encontrados</span>
        <span className="flex items-center gap-1">
          <SlidersHorizontal size={14} />
          Catálogo demonstrativo
        </span>
      </div>
      {list.length ? (
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {list.map((i) => (
            <article className="card flex flex-col p-6" key={i.id}>
              <div className="flex justify-between">
                <span className="category">{i.category}</span>
                <DemoBadge official />
              </div>
              <h2 className="mt-5 text-base font-bold leading-snug">{i.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{i.description}</p>
              <div className="my-5 grid grid-cols-2 gap-y-3 border-y border-slate-100 py-4 text-xs dark:border-white/10">
                <Meta a="Fonte" b={i.institution} />
                <Meta a="Unidade" b={i.unit} />
                <Meta a="Periodicidade" b={i.periodicity} />
                <Meta a="Abrangência" b={i.coverage} />
              </div>
              <button className="btn-secondary justify-between" onClick={() => setDetail(i.id)}>
                Explorar indicador <ChevronRight size={15} />
              </button>
            </article>
          ))}
        </div>
      ) : (
        <EmptyState
          title="Nenhum indicador encontrado"
          text="Revise a pesquisa ou limpe os filtros para ver todo o catálogo."
        />
      )}
      {item && <Modal item={item} onClose={() => setDetail(undefined)} />}
    </Page>
  );
}
const Meta = ({ a, b }: { a: string; b: string }) => (
  <div>
    <p className="text-[9px] uppercase tracking-wide text-slate-400">{a}</p>
    <p className="mt-1 font-medium">{b}</p>
  </div>
);

export function TerritorialPage() {
  const [selected, setSelected] = useState("SP");
  const [region, setRegion] = useState("Todas");
  const data = states
    .filter((s) => region === "Todas" || s[1] === region)
    .map(([uf, , v]) => ({ uf, value: v }));
  return (
    <Page>
      <div className="eyebrow">Análise geográfica</div>
      <h1 className="page-title">Panorama territorial</h1>
      <p className="page-subtitle">
        Explore diferenças entre regiões e estados a partir de indicadores públicos comparáveis.
      </p>
      <div className="card mt-7 grid gap-3 p-4 md:grid-cols-3">
        <Select
          label="Indicador"
          options={["Taxa de desocupação — demonstração", "Rendimento médio — demonstração"]}
        />
        <Select label="Período" options={["3º trimestre de 2025", "2º trimestre de 2025"]} />
        <Select
          label="Região"
          value={region}
          onChange={setRegion}
          options={["Todas", "Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"]}
        />
      </div>
      <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-800 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-200">
        <strong>Modo demonstração:</strong> valores territoriais abaixo são ilustrativos e não devem
        ser citados como estatística oficial.
      </div>
      <div className="mt-5 grid gap-5 xl:grid-cols-[1.05fr_.95fr]">
        <section className="card p-5">
          <SectionHeader title="Mapa do Brasil" description={`UF selecionada: ${selected}`} />
          <BrazilMap selected={selected} onSelect={setSelected} demo />
        </section>
        <section className="card p-5">
          <SectionHeader
            title="Comparação por UF"
            description="Taxa de desocupação (%) · demonstração"
          />
          <div className="h-[390px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical" margin={{ left: 0, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 10 }} />
                <YAxis type="category" dataKey="uf" tick={{ fontSize: 10 }} width={30} />
                <Tooltip />
                <Bar dataKey="value" fill="#2563eb" radius={[0, 5, 5, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
      <section className="mt-5">
        <SectionHeader
          title={`Detalhes de ${selected}`}
          description="A seleção do mapa atualiza o recorte territorial demonstrativo."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="card p-5">
            <p className="text-xs text-slate-500">Taxa demonstrativa</p>
            <p className="mt-2 text-3xl font-bold">
              {states.find((s) => s[0] === selected)?.[2].toLocaleString("pt-BR")}%
            </p>
          </div>
          <div className="card p-5">
            <p className="text-xs text-slate-500">Região</p>
            <p className="mt-2 text-xl font-bold">{states.find((s) => s[0] === selected)?.[1]}</p>
          </div>
          <div className="card p-5">
            <p className="text-xs text-slate-500">Status</p>
            <div className="mt-3">
              <DemoBadge />
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}

const sources = [
  {
    name: "Banco Central do Brasil (BCB)",
    desc: "Sistema Gerenciador de Séries Temporais — SGS. Catálogo de indicadores monetários, de crédito e financeiros.",
    items: "Inadimplência PF, juros e comprometimento da renda",
    period: "Mensal",
    coverage: "Brasil",
    status: "Integração prevista",
  },
  {
    name: "IBGE",
    desc: "PNAD Contínua, SIDRA e indicadores econômicos produzidos pelo sistema estatístico nacional.",
    items: "Desocupação, rendimento, informalidade e IPCA",
    period: "Mensal e trimestral",
    coverage: "Brasil e recortes territoriais",
    status: "Integração prevista",
  },
  {
    name: "Serasa",
    desc: "Relatórios públicos e publicações agregadas relacionadas ao panorama da inadimplência.",
    items: "Relatórios públicos de inadimplência",
    period: "Conforme publicação",
    coverage: "Brasil",
    status: "Em catalogação",
  },
];
export function SourcesPage() {
  return (
    <Page>
      <div className="eyebrow">Transparência e rastreabilidade</div>
      <h1 className="page-title">Fontes de dados</h1>
      <p className="page-subtitle">
        Conheça a origem, a cobertura e o status das fontes previstas para o observatório.
      </p>
      <div className="mt-7 grid gap-4 lg:grid-cols-3">
        {sources.map((s, i) => (
          <article className="card p-6" key={s.name}>
            <div className="flex items-start justify-between">
              <div className="feature-icon">
                {i === 0 ? <Building2 /> : i === 1 ? <Database /> : <FileText />}
              </div>
              <span className="badge pending">{s.status}</span>
            </div>
            <h2 className="mt-5 text-lg font-bold">{s.name}</h2>
            <p className="mt-2 min-h-20 text-sm leading-6 text-slate-500">{s.desc}</p>
            <div className="mt-5 space-y-3 border-t border-slate-100 pt-4 dark:border-white/10">
              <Meta a="Indicadores associados" b={s.items} />
              <div className="grid grid-cols-2">
                <Meta a="Periodicidade" b={s.period} />
                <Meta a="Abrangência" b={s.coverage} />
              </div>
            </div>
            <button
              className="btn-secondary mt-5 w-full"
              onClick={() =>
                alert(
                  "A abertura da fonte externa será habilitada após a validação dos endereços oficiais.",
                )
              }
            >
              Consultar fonte oficial <ExternalLink size={14} />
            </button>
          </article>
        ))}
      </div>
      <section className="mt-14">
        <SectionHeader
          eyebrow="Processamento"
          title="Como os dados são tratados"
          description="Uma cadeia rastreável reduz erros e preserva a comparabilidade entre as séries."
        />
        <div className="card grid gap-0 overflow-hidden md:grid-cols-6">
          {processSteps.map(([t, Icon], i) => (
            <div className="process-step" key={t}>
              <div className="relative z-10 grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950">
                <Icon size={18} />
              </div>
              <p className="relative z-10 mt-3 text-xs font-bold">{t}</p>
              <span>{i + 1}</span>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-8 rounded-2xl bg-[#101d35] p-6 text-white sm:p-8">
        <div className="flex gap-4">
          <Info className="shrink-0 text-blue-300" />
          <div>
            <h3 className="font-bold">Compromisso de transparência</h3>
            <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-300">
              O protótipo não declara integrações ainda não implementadas. Metadados de catálogo são
              apresentados separadamente dos valores demonstrativos, e toda série deverá manter
              referência à instituição responsável.
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}
const DownloadIcon = Workflow;
const processSteps: Array<[string, LucideIcon]> = [
  ["Fonte oficial", Database],
  ["Extração", DownloadIcon],
  ["Validação", FileCheck2],
  ["Padronização", SlidersHorizontal],
  ["Armazenamento", Layers3],
  ["Visualização", BarChart3],
];
const methodologySections: Array<[LucideIcon, string, string]> = [
  [
    Target,
    "Problema de pesquisa",
    "Como organizar e apresentar indicadores públicos relacionados à inadimplência de forma clara, rastreável e útil para exploração acadêmica?",
  ],
  [
    GraduationCap,
    "Objetivo geral",
    "Desenvolver uma plataforma web para consulta e visualização de indicadores agregados de crédito e contexto socioeconômico brasileiro.",
  ],
  [
    Microscope,
    "Metodologia",
    "Pesquisa aplicada, exploratória e descritiva, apoiada em levantamento de fontes públicas, modelagem das séries e prototipação iterativa.",
  ],
  [
    ShieldCheck,
    "Privacidade e LGPD",
    "A plataforma trabalha com dados públicos e agregados. Não utiliza dados pessoais, perfis individuais ou decisões automatizadas de crédito.",
  ],
];

export function MethodologyPage() {
  return (
    <Page>
      <div className="eyebrow">Pesquisa e desenvolvimento</div>
      <h1 className="page-title">Metodologia e sobre o projeto</h1>
      <p className="page-subtitle">
        Contexto acadêmico, escolhas metodológicas e limites interpretativos do observatório.
      </p>
      <div className="mt-8 grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
        <aside className="card h-fit p-6">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-600 text-white">
            <GraduationCap size={27} />
          </div>
          <h2 className="mt-5 text-xl font-bold">Observatório Brasileiro da Inadimplência</h2>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Trabalho de Conclusão de Curso em Engenharia de Computação da Universidade Virtual do
            Estado de São Paulo.
          </p>
          <div className="mt-6 border-t border-slate-100 pt-5 dark:border-white/10">
            <Meta a="Natureza" b="Exploratória e descritiva" />
            <div className="mt-4">
              <Meta a="Finalidade" b="Educacional, científica e informativa" />
            </div>
          </div>
        </aside>
        <div className="space-y-4">
          {methodologySections.map(([Icon, t, d]) => (
            <section className="card p-6" key={t}>
              <div className="flex gap-4">
                <div className="feature-icon shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h2 className="font-bold">{t}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{d}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      <section className="mt-10">
        <SectionHeader eyebrow="Arquitetura" title="Tecnologia planejada e protótipo" />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card border-t-4 border-t-blue-600 p-6">
            <span className="category">Arquitetura acadêmica planejada</span>
            <h3 className="mt-4 text-lg font-bold">
              Python + Django + Pandas + PostgreSQL + Chart.js
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Camada de ingestão, tratamento e persistência de dados, API web e visualizações para a
              implementação acadêmica final.
            </p>
          </div>
          <div className="card border-t-4 border-t-cyan-500 p-6">
            <span className="category">Tecnologia de prototipação</span>
            <h3 className="mt-4 text-lg font-bold">React + TypeScript + Tailwind CSS + Recharts</h3>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Este protótipo valida arquitetura de informação, fluxos de navegação, interação e
              linguagem visual; não substitui a pilha planejada.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10 card p-6 sm:p-8">
        <SectionHeader title="Limitações e interpretação responsável" />
        <ul className="grid gap-4 text-sm text-slate-600 dark:text-slate-300 md:grid-cols-2">
          {[
            "O protótipo não realiza previsão de inadimplência.",
            "Não avalia risco ou crédito de pessoas.",
            "Comparações não estabelecem relações causais.",
            "A disponibilidade territorial varia por fonte.",
            "Valores demonstrativos não são estatísticas oficiais.",
            "Metadados devem ser confirmados na fonte primária.",
          ].map((t) => (
            <li className="flex gap-3" key={t}>
              <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-blue-600" />
              {t}
            </li>
          ))}
        </ul>
      </section>
    </Page>
  );
}
