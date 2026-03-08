const REGIONS = [
 { id: 'north-america', name: 'North America', aliases: ['north america', 'us', 'usa', 'united states', 'canada', 'na'], baseIndex: 100, sensitivity: 1.1 },
 { id: 'europe', name: 'Europe', aliases: ['europe', 'eurozone', 'eu'], baseIndex: 100, sensitivity: 1.0 },
 { id: 'asia-pacific', name: 'Asia-Pacific', aliases: ['asia-pacific', 'asia pacific', 'apac'], baseIndex: 100, sensitivity: 0.95 },
 { id: 'em', name: 'Emerging Mkts', aliases: ['emerging', 'em', 'latam', 'emea'], baseIndex: 100, sensitivity: 1.35 },
 { id: 'us', name: 'United States', aliases: ['us', 'usa', 'united states', 'america'], baseIndex: 100, sensitivity: 1.1 },
 { id: 'uk', name: 'United Kingdom', aliases: ['uk', 'britain', 'great britain'], baseIndex: 100, sensitivity: 1.0 },
 { id: 'germany', name: 'Germany', aliases: ['germany', 'deutschland'], baseIndex: 100, sensitivity: 0.98 },
 { id: 'france', name: 'France', aliases: ['france'], baseIndex: 100, sensitivity: 0.98 },
 { id: 'japan', name: 'Japan', aliases: ['japan'], baseIndex: 100, sensitivity: 0.92 },
 { id: 'china', name: 'China', aliases: ['china', 'prc'], baseIndex: 100, sensitivity: 1.05 },
 { id: 'india', name: 'India', aliases: ['india'], baseIndex: 100, sensitivity: 1.2 },
 { id: 'australia', name: 'Australia', aliases: ['australia', 'aus'], baseIndex: 100, sensitivity: 0.97 },
 { id: 'brazil', name: 'Brazil', aliases: ['brazil'], baseIndex: 100, sensitivity: 1.4 },
 { id: 'canada', name: 'Canada', aliases: ['canada'], baseIndex: 100, sensitivity: 1.05 },
 { id: 'south-korea', name: 'South Korea', aliases: ['south korea', 'korea', 'sk'], baseIndex: 100, sensitivity: 0.98 },
 { id: 'italy', name: 'Italy', aliases: ['italy'], baseIndex: 100, sensitivity: 1.02 },
 { id: 'spain', name: 'Spain', aliases: ['spain'], baseIndex: 100, sensitivity: 1.02 },
 { id: 'netherlands', name: 'Netherlands', aliases: ['netherlands', 'holland'], baseIndex: 100, sensitivity: 0.99 },
 { id: 'switzerland', name: 'Switzerland', aliases: ['switzerland'], baseIndex: 100, sensitivity: 0.88 },
 { id: 'sweden', name: 'Sweden', aliases: ['sweden'], baseIndex: 100, sensitivity: 0.97 },
 { id: 'singapore', name: 'Singapore', aliases: ['singapore'], baseIndex: 100, sensitivity: 0.95 },
 { id: 'hong-kong', name: 'Hong Kong', aliases: ['hong kong', 'hk'], baseIndex: 100, sensitivity: 1.0 },
 { id: 'taiwan', name: 'Taiwan', aliases: ['taiwan'], baseIndex: 100, sensitivity: 1.0 },
 { id: 'mexico', name: 'Mexico', aliases: ['mexico'], baseIndex: 100, sensitivity: 1.25 },
 { id: 'indonesia', name: 'Indonesia', aliases: ['indonesia'], baseIndex: 100, sensitivity: 1.3 },
 { id: 'south-africa', name: 'South Africa', aliases: ['south africa', 'sa'], baseIndex: 100, sensitivity: 1.25 },
 { id: 'russia', name: 'Russia', aliases: ['russia'], baseIndex: 100, sensitivity: 1.3 },
 { id: 'turkey', name: 'Turkey', aliases: ['turkey', 'türkiye'], baseIndex: 100, sensitivity: 1.35 },
 { id: 'poland', name: 'Poland', aliases: ['poland'], baseIndex: 100, sensitivity: 1.08 },
 { id: 'thailand', name: 'Thailand', aliases: ['thailand'], baseIndex: 100, sensitivity: 1.1 },
 { id: 'malaysia', name: 'Malaysia', aliases: ['malaysia'], baseIndex: 100, sensitivity: 1.08 },
 { id: 'philippines', name: 'Philippines', aliases: ['philippines'], baseIndex: 100, sensitivity: 1.15 },
 { id: 'vietnam', name: 'Vietnam', aliases: ['vietnam'], baseIndex: 100, sensitivity: 1.2 },
 { id: 'argentina', name: 'Argentina', aliases: ['argentina'], baseIndex: 100, sensitivity: 1.4 },
 { id: 'chile', name: 'Chile', aliases: ['chile'], baseIndex: 100, sensitivity: 1.2 },
 { id: 'colombia', name: 'Colombia', aliases: ['colombia'], baseIndex: 100, sensitivity: 1.2 },
 { id: 'saudi-arabia', name: 'Saudi Arabia', aliases: ['saudi arabia', 'saudi'], baseIndex: 100, sensitivity: 1.15 },
 { id: 'uae', name: 'UAE', aliases: ['uae', 'united arab emirates'], baseIndex: 100, sensitivity: 1.05 },
 { id: 'israel', name: 'Israel', aliases: ['israel'], baseIndex: 100, sensitivity: 1.0 },
 { id: 'egypt', name: 'Egypt', aliases: ['egypt'], baseIndex: 100, sensitivity: 1.25 },
 { id: 'nigeria', name: 'Nigeria', aliases: ['nigeria'], baseIndex: 100, sensitivity: 1.35 },
 { id: 'portugal', name: 'Portugal', aliases: ['portugal'], baseIndex: 100, sensitivity: 1.02 },
 { id: 'belgium', name: 'Belgium', aliases: ['belgium'], baseIndex: 100, sensitivity: 0.99 },
 { id: 'austria', name: 'Austria', aliases: ['austria'], baseIndex: 100, sensitivity: 0.98 },
 { id: 'norway', name: 'Norway', aliases: ['norway'], baseIndex: 100, sensitivity: 0.95 },
 { id: 'denmark', name: 'Denmark', aliases: ['denmark'], baseIndex: 100, sensitivity: 0.96 },
 { id: 'ireland', name: 'Ireland', aliases: ['ireland'], baseIndex: 100, sensitivity: 0.99 },
 { id: 'finland', name: 'Finland', aliases: ['finland'], baseIndex: 100, sensitivity: 0.97 },
 { id: 'greece', name: 'Greece', aliases: ['greece'], baseIndex: 100, sensitivity: 1.15 },
 { id: 'pakistan', name: 'Pakistan', aliases: ['pakistan'], baseIndex: 100, sensitivity: 1.2 },
 { id: 'bangladesh', name: 'Bangladesh', aliases: ['bangladesh'], baseIndex: 100, sensitivity: 1.2 },
 { id: 'peru', name: 'Peru', aliases: ['peru'], baseIndex: 100, sensitivity: 1.15 },
 { id: 'new-zealand', name: 'New Zealand', aliases: ['new zealand'], baseIndex: 100, sensitivity: 0.95 },
 { id: 'czech-republic', name: 'Czech Republic', aliases: ['czech', 'czech republic'], baseIndex: 100, sensitivity: 1.05 },
 { id: 'hungary', name: 'Hungary', aliases: ['hungary'], baseIndex: 100, sensitivity: 1.1 },
 { id: 'romania', name: 'Romania', aliases: ['romania'], baseIndex: 100, sensitivity: 1.12 },
 { id: 'qatar', name: 'Qatar', aliases: ['qatar'], baseIndex: 100, sensitivity: 1.0 },
 { id: 'kuwait', name: 'Kuwait', aliases: ['kuwait'], baseIndex: 100, sensitivity: 1.05 },
 { id: 'morocco', name: 'Morocco', aliases: ['morocco'], baseIndex: 100, sensitivity: 1.15 },
 { id: 'kenya', name: 'Kenya', aliases: ['kenya'], baseIndex: 100, sensitivity: 1.25 },
 { id: 'ukraine', name: 'Ukraine', aliases: ['ukraine'], baseIndex: 100, sensitivity: 1.4 },
 { id: 'iran', name: 'Iran', aliases: ['iran'], baseIndex: 100, sensitivity: 1.2 },
 { id: 'lithuania', name: 'Lithuania', aliases: ['lithuania'], baseIndex: 100, sensitivity: 1.05 },
 { id: 'estonia', name: 'Estonia', aliases: ['estonia'], baseIndex: 100, sensitivity: 1.02 },
 { id: 'croatia', name: 'Croatia', aliases: ['croatia'], baseIndex: 100, sensitivity: 1.08 },
 ];

 const MAP_REGION_IDS = ['north-america', 'europe', 'asia-pacific', 'em'];
 const REGION_TO_MAP = {
 'us': 'north-america', 'canada': 'north-america', 'uk': 'europe', 'germany': 'europe', 'france': 'europe',
 'italy': 'europe', 'spain': 'europe', 'netherlands': 'europe', 'switzerland': 'europe', 'sweden': 'europe',
 'norway': 'europe', 'denmark': 'europe', 'ireland': 'europe', 'finland': 'europe', 'greece': 'europe',
 'portugal': 'europe', 'belgium': 'europe', 'austria': 'europe', 'poland': 'europe', 'czech-republic': 'europe',
 'hungary': 'europe', 'romania': 'europe',
 'japan': 'asia-pacific', 'china': 'asia-pacific', 'australia': 'asia-pacific', 'south-korea': 'asia-pacific',
 'india': 'em', 'indonesia': 'asia-pacific', 'singapore': 'asia-pacific', 'hong-kong': 'asia-pacific',
 'taiwan': 'asia-pacific', 'thailand': 'asia-pacific', 'malaysia': 'asia-pacific', 'philippines': 'asia-pacific',
 'vietnam': 'asia-pacific', 'new-zealand': 'asia-pacific', 'pakistan': 'em', 'bangladesh': 'em',
 'brazil': 'em', 'mexico': 'em', 'argentina': 'em', 'chile': 'em', 'colombia': 'em', 'peru': 'em',
 'south-africa': 'em', 'russia': 'em', 'turkey': 'em', 'saudi-arabia': 'em', 'uae': 'em', 'egypt': 'em',
 'nigeria': 'em', 'qatar': 'em', 'kuwait': 'em', 'israel': 'em',
 'morocco': 'em', 'kenya': 'em', 'ukraine': 'europe', 'iran': 'em',
 'lithuania': 'europe', 'estonia': 'europe', 'croatia': 'europe',
 };
 
 const SECTORS = [
 { id: 'all', name: 'All sectors (aggregate)' },
 { id: 'tech', name: 'Technology' },
 { id: 'financials', name: 'Financials' },
 { id: 'energy', name: 'Energy' },
 { id: 'industrials', name: 'Industrials' },
 { id: 'consumer', name: 'Consumer' },
 { id: 'healthcare', name: 'Healthcare' },
 { id: 'defensive', name: 'Staples & Utilities (Defensive)' },
 { id: 'defense', name: 'Defense' },
 { id: 'semiconductors', name: 'Semiconductors' },
 { id: 'airlines', name: 'Airlines' },
 ];

 const HEATMAP_SECTORS = [
 { id: 'energy', name: 'Energy' },
 { id: 'defense', name: 'Defense' },
 { id: 'semiconductors', name: 'Semiconductors' },
 { id: 'airlines', name: 'Airlines' },
 { id: 'financials', name: 'Financials' },
 { id: 'tech', name: 'Technology' },
 { id: 'healthcare', name: 'Healthcare' },
 ];

 const HEATMAP_SECTOR_SENSITIVITY = {
 energy: 1.35,
 defense: 0.85,
 semiconductors: 1.5,
 airlines: 1.6,
 financials: 1.25,
 tech: 1.4,
 healthcare: 0.9,
 };
 
 const SECTOR_SENSITIVITY = {
 tech: 1.4,
 financials: 1.1,
 energy: 1.3,
 industrials: 1.0,
 consumer: 0.95,
 healthcare: 0.9,
 defensive: 0.55,
 defense: 0.85,
 semiconductors: 1.5,
 airlines: 1.6,
 };

 const STOCKS_BY_SECTOR = {
 energy: { down: [{ ticker: 'XOM', name: 'ExxonMobil' }, { ticker: 'CVX', name: 'Chevron' }, { ticker: 'OXY', name: 'Occidental' }], up: [{ ticker: 'SLB', name: 'Schlumberger' }] },
 defense: { down: [], up: [{ ticker: 'LMT', name: 'Lockheed Martin' }, { ticker: 'RTX', name: 'RTX Corp' }, { ticker: 'NOC', name: 'Northrop Grumman' }] },
 semiconductors: { down: [{ ticker: 'NVDA', name: 'NVIDIA' }, { ticker: 'AMD', name: 'AMD' }, { ticker: 'INTC', name: 'Intel' }], up: [{ ticker: 'AVGO', name: 'Broadcom' }] },
 airlines: { down: [{ ticker: 'UAL', name: 'United' }, { ticker: 'DAL', name: 'Delta' }, { ticker: 'AAL', name: 'American' }], up: [] },
 financials: { down: [{ ticker: 'JPM', name: 'JPMorgan' }, { ticker: 'BAC', name: 'Bank of America' }, { ticker: 'GS', name: 'Goldman Sachs' }], up: [] },
 tech: { down: [{ ticker: 'AAPL', name: 'Apple' }, { ticker: 'MSFT', name: 'Microsoft' }, { ticker: 'GOOGL', name: 'Alphabet' }], up: [] },
 healthcare: { down: [], up: [{ ticker: 'JNJ', name: 'Johnson & Johnson' }, { ticker: 'UNH', name: 'UnitedHealth' }] },
 defensive: { down: [], up: [{ ticker: 'PG', name: 'Procter & Gamble' }, { ticker: 'KO', name: 'Coca-Cola' }, { ticker: 'WMT', name: 'Walmart' }] },
 };

 const BIGGEST_INDUSTRY_BY_COUNTRY = {
 'us': 'Technology', 'uk': 'Financials', 'germany': 'Automotive', 'france': 'Aerospace', 'japan': 'Automotive',
 'china': 'Manufacturing', 'india': 'IT Services', 'australia': 'Mining', 'brazil': 'Commodities', 'canada': 'Energy',
 'south-korea': 'Semiconductors', 'italy': 'Manufacturing', 'spain': 'Tourism', 'netherlands': 'Energy', 'switzerland': 'Pharma',
 'sweden': 'Manufacturing', 'singapore': 'Financials', 'hong-kong': 'Financials', 'taiwan': 'Semiconductors',
 'mexico': 'Manufacturing', 'indonesia': 'Commodities', 'south-africa': 'Mining', 'russia': 'Energy', 'turkey': 'Manufacturing',
 'poland': 'Manufacturing', 'thailand': 'Tourism', 'malaysia': 'Electronics', 'saudi-arabia': 'Energy', 'uae': 'Real Estate',
 'north-america': 'Technology', 'europe': 'Automotive', 'asia-pacific': 'Technology', 'em': 'Commodities',
 'morocco': 'Phosphates', 'kenya': 'Agriculture', 'ukraine': 'Agriculture', 'iran': 'Energy', 'croatia': 'Tourism',
 };
 
 const SCENARIOS = [
 {
 id: 'global-crisis',
 name: 'Global financial crisis',
 description: 'Deep synchronized global selloff with slow grind recovery.',
 shockCenter: 15,
 shockMagnitude: -35,
 decay: 0.04,
 baseDrift: 0.03,
 baseVol: 1.1,
 regionOverrides: {
 'north-america': { magnitude: -38 },
 europe: { magnitude: -33 },
 em: { magnitude: -45 },
 },
 },
 {
 id: 'tech-bust',
 name: 'Tech bubble burst',
 description: 'Valuation shock concentrated in growth and developed markets.',
 shockCenter: 10,
 shockMagnitude: -28,
 decay: 0.05,
 baseDrift: 0.04,
 baseVol: 1.2,
 regionOverrides: {
 'north-america': { magnitude: -32 },
 europe: { magnitude: -26 },
 'asia-pacific': { magnitude: -22 },
 },
 },
 {
 id: 'oil-shock',
 name: 'Energy supply shock',
 description: 'Sharp spike in energy costs; commodities rally, others suffer.',
 shockCenter: 8,
 shockMagnitude: -18,
 decay: 0.06,
 baseDrift: 0.02,
 baseVol: 1.4,
 regionOverrides: {
 europe: { magnitude: -24 },
 'north-america': { magnitude: -16 },
 em: { magnitude: -20 },
 'asia-pacific': { magnitude: -14 },
 },
 },
 {
 id: 'pandemic',
 name: 'Pandemic shock',
 description: 'Fast crash, policy response, and uneven reopening path.',
 shockCenter: 6,
 shockMagnitude: -25,
 decay: 0.09,
 baseDrift: 0.05,
 baseVol: 1.5,
 regionOverrides: {
 'north-america': { magnitude: -30 },
 europe: { magnitude: -28 },
 'asia-pacific': { magnitude: -18 },
 em: { magnitude: -26 },
 },
 },
 {
 id: 'custom',
 name: 'Custom stress',
 description: 'Tune magnitude, duration, and volatility manually.',
 shockCenter: 12,
 shockMagnitude: -30,
 decay: 0.06,
 baseDrift: 0.03,
 baseVol: 1.0,
 regionOverrides: {},
 },
 ];
 
 const CUSTOM_SCENARIO_KEYWORDS = {
 pandemic: { keywords: ['pandemic', 'outbreak', 'virus', 'covid', 'epidemic', 'spreads', 'disease'], sectorsUp: ['healthcare', 'defensive'], sectorsDown: ['airlines', 'consumer'] },
 war: { keywords: ['war', 'invades', 'invasion', 'conflict', 'military', 'attack'], sectorsUp: ['defense', 'energy'], sectorsDown: ['airlines', 'consumer'] },
 energy: { keywords: ['oil', 'energy', 'embargo', 'gas', 'opec', 'petroleum'], sectorsUp: ['energy'], sectorsDown: ['airlines', 'consumer'] },
 financial: { keywords: ['recession', 'crash', 'bank', 'financial', 'credit', 'default'], sectorsUp: ['defensive', 'healthcare'], sectorsDown: ['financials', 'tech'] },
 tech: { keywords: ['tech', 'semiconductor', 'bubble', 'valuation'], sectorsUp: ['defensive'], sectorsDown: ['tech', 'semiconductors'] },
 china: { keywords: ['china', 'chinese'], sectorsUp: [], sectorsDown: ['tech', 'consumer'] },
 europe: { keywords: ['europe', 'eu', 'germany', 'ukraine'], sectorsUp: ['defense', 'energy'], sectorsDown: ['financials'] },
 };

 const state = {
 selectedScenarioId: 'global-crisis',
 selectedRegionId: 'north-america',
 customScenarioText: '',
 histRegionId: null,
 selectedSectorId: 'all',
 shockMagnitude: -30,
 shockDuration: 10,
 volatilityMult: 1.8,
 horizon: 180,
 step: 0,
 isRunning: false,
 timerId: null,
 series: {},
 sectorSeries: {},
 };
 
 function initSeries() {
 state.series = {};
 state.sectorSeries = {};
 for (const region of REGIONS) {
 state.series[region.id] = [region.baseIndex];
 state.sectorSeries[region.id] = {};
 for (const sector of SECTORS) {
 if (sector.id === 'all') continue;
 state.sectorSeries[region.id][sector.id] = [region.baseIndex];
 }
 }
 }
 
 function getScenario() {
 // Check if this is a custom scenario with ML analysis
 if (state.selectedScenarioId === 'custom' && state.customScenarioText) {
 const mlAnalysis = analyzeCustomScenarioML(state.customScenarioText);
 if (mlAnalysis) {
 return {
 id: 'custom',
 name: 'Custom: ' + (state.customScenarioText.substring(0, 40) + (state.customScenarioText.length > 40 ? '...' : '')),
 description: 'ML-analyzed custom scenario',
 shockCenter: Math.max(3, Math.min(30, Math.floor(mlAnalysis.estimatedDuration / 3))),
 shockMagnitude: mlAnalysis.estimatedMagnitude,
 decay: 0.04,
 baseDrift: 0.02,
 baseVol: mlAnalysis.volatilityMult,
 regionOverrides: {},
 mlAnalysis: mlAnalysis
 };
 }
 }
 return SCENARIOS.find((s) => s.id === state.selectedScenarioId) || SCENARIOS[0];
 }
 
 function findRegion(id) {
 return REGIONS.find((r) => r.id === id) || REGIONS[0];
 }

 function resolveRegionFromInput(input) {
 const raw = String(input || '').trim().toLowerCase();
 if (!raw) return null;
 for (const r of REGIONS) {
 if (r.name.toLowerCase() === raw) return r;
 if (r.id === raw || r.id.replace(/-/g, ' ') === raw) return r;
 if (r.aliases && r.aliases.some((a) => a === raw)) return r;
 }
 return null;
 }

 function classifyCustomScenario(text) {
 const t = String(text || '').toLowerCase();
 if (!t.trim()) return null;
 const sectorsUp = new Set();
 const sectorsDown = new Set();
 let matched = 0;
 for (const [type, cfg] of Object.entries(CUSTOM_SCENARIO_KEYWORDS)) {
 if (cfg.keywords.some((k) => t.includes(k))) {
 matched += 1;
 (cfg.sectorsUp || []).forEach((s) => sectorsUp.add(s));
 (cfg.sectorsDown || []).forEach((s) => sectorsDown.add(s));
 }
 }
 const confidence = Math.min(0.95, 0.5 + matched * 0.15);
 return { sectorsUp: [...sectorsUp], sectorsDown: [...sectorsDown], confidence, hasMatch: matched > 0 };
 }

 // Advanced ML-based scenario analyzer
 function analyzeCustomScenarioML(text) {
 const t = String(text || '').toLowerCase();
 if (!t.trim()) return null;

 // Severity scoring based on keywords
 const severityKeywords = {
 critical: ['war', 'invasion', 'conflict', 'attack', 'collapse', 'bankruptcy', 'crash', 'crisis', 'emergency'],
 high: ['embargo', 'sanctions', 'pandemic', 'recession', 'default', 'terror', 'disaster', 'earthquake'],
 medium: ['slowdown', 'decline', 'shortage', 'inflation', 'strike', 'cyberattack', 'scandal'],
 low: ['tension', 'uncertainty', 'concern', 'risk', 'pressure', 'volatility']
 };

 // Scope keywords - determine which regions/sectors are affected
 const scopeKeywords = {
 global: ['global', 'worldwide', 'international', 'all nations', 'all countries', 'everywhere'],
 regional: ['asia', 'europe', 'americas', 'middle east', 'africa', 'region'],
 bilateral: ['china', 'taiwan', 'usa', 'russia', 'ukraine', 'israel', 'iran', 'saudi', 'india', 'pakistan']
 };

 // Duration inference - map severity to typical duration
 const durationMap = { critical: 45, high: 30, medium: 18, low: 10 };

 // Calculate severity (0-100)
 let severity = 0;
 for (const [level, keywords] of Object.entries(severityKeywords)) {
 for (const keyword of keywords) {
 if (t.includes(keyword)) {
 severity = Math.max(severity, { critical: 80, high: 60, medium: 40, low: 20 }[level]);
 }
 }
 }

 // Infer scope
 let scope = 'regional';
 for (const [s, keywords] of Object.entries(scopeKeywords)) {
 if (keywords.some(k => t.includes(k))) {
 scope = s;
 break;
 }
 }

 // Estimate shock magnitude based on severity (-90 to 0 range)
 let estimatedMagnitude = -30;
 if (severity >= 80) estimatedMagnitude = -70;
 else if (severity >= 60) estimatedMagnitude = -50;
 else if (severity >= 40) estimatedMagnitude = -35;
 else if (severity >= 20) estimatedMagnitude = -20;

 // Adjust for global scope
 if (scope === 'global') estimatedMagnitude *= 1.3;
 else if (scope === 'bilateral') estimatedMagnitude *= 0.8;

 // Infer duration
 const estimatedDuration = durationMap[Object.keys(durationMap).find(k => severityKeywords[k].some(kw => t.includes(kw))) || 'medium'] || 15;

 // Infer volatility multiplier (1.0 to 3.0)
 let volatilityMult = 1.5;
 if (severity >= 80) volatilityMult = 2.8;
 else if (severity >= 60) volatilityMult = 2.2;
 else if (severity >= 40) volatilityMult = 1.8;

 // Identify affected sectors
 const affectedSectors = identifyAffectedSectors(t, severity, scope);

 return {
 severity,
 scope,
 estimatedMagnitude: Math.max(-90, estimatedMagnitude),
 estimatedDuration: Math.max(5, Math.min(180, estimatedDuration)),
 volatilityMult,
 affectedSectors,
 confidence: 0.7 + Math.min(0.25, (severity / 100) * 0.25)
 };
 }

 function identifyAffectedSectors(text, severity, scope) {
 const sectorImpactMap = {
 energy: { keywords: ['oil', 'energy', 'gas', 'opec', 'embargo', 'supply'], sectorsUp: [], sectorsDown: ['airlines', 'consumer', 'tech'] },
 defense: { keywords: ['war', 'conflict', 'invasion', 'military', 'defense', 'attack'], sectorsUp: ['defense'], sectorsDown: ['airlines', 'tourism'] },
 tech: { keywords: ['semiconductor', 'tech', 'chip', 'cyberattack', 'tech ban'], sectorsUp: [], sectorsDown: ['semiconductors', 'tech'] },
 health: { keywords: ['pandemic', 'virus', 'disease', 'health'], sectorsUp: ['healthcare', 'defensive'], sectorsDown: ['airlines', 'consumer', 'tourism'] },
 financial: { keywords: ['banking', 'credit', 'default', 'recession'], sectorsUp: [], sectorsDown: ['financials', 'consumer'] },
 trade: { keywords: ['trade war', 'tariff', 'sanctions', 'embargo'], sectorsUp: ['defense', 'energy'], sectorsDown: ['tech', 'consumer', 'manufacturing'] },
 natural: { keywords: ['earthquake', 'tsunami', 'hurricane', 'disaster'], sectorsUp: [], sectorsDown: ['tourism', 'airlines', 'retail'] }
 };

 const result = { up: new Set(), down: new Set() };

 for (const [category, config] of Object.entries(sectorImpactMap)) {
 if (config.keywords.some(k => text.includes(k))) {
 config.sectorsUp.forEach(s => result.up.add(s));
 config.sectorsDown.forEach(s => result.down.add(s));
 }
 }

 // Add defensive sectors for severe scenarios
 if (severity >= 70) {
 result.up.add('defensive');
 result.up.add('healthcare');
 }

 return { up: Array.from(result.up), down: Array.from(result.down) };
 }

 function classifyCustomScenario(text) {
 const t = String(text || '').toLowerCase();
 if (!t.trim()) return null;
 const sectorsUp = new Set();
 const sectorsDown = new Set();
 let matched = 0;
 for (const [type, cfg] of Object.entries(CUSTOM_SCENARIO_KEYWORDS)) {
 if (cfg.keywords.some((k) => t.includes(k))) {
 matched += 1;
 (cfg.sectorsUp || []).forEach((s) => sectorsUp.add(s));
 (cfg.sectorsDown || []).forEach((s) => sectorsDown.add(s));
 }
 }
 const confidence = Math.min(0.95, 0.5 + matched * 0.15);
 return { sectorsUp: [...sectorsUp], sectorsDown: [...sectorsDown], confidence, hasMatch: matched > 0 };
 }

 function getStockRecommendations() {
 const customText = state.customScenarioText;
 const scenario = getScenario();
 let sectorsUp = new Set();
 let sectorsDown = new Set();
 let source = 'preset';
 const presetMap = {
 'global-crisis': { up: ['defensive', 'healthcare'], down: ['financials', 'tech', 'airlines'] },
 'tech-bust': { up: ['defensive', 'healthcare'], down: ['tech', 'semiconductors'] },
 'oil-shock': { up: ['energy'], down: ['airlines', 'consumer'] },
 'pandemic': { up: ['healthcare', 'defensive'], down: ['airlines', 'consumer'] },
 'custom': null,
 };
 
 // For custom scenarios with ML analysis
 if (scenario.id === 'custom' && scenario.mlAnalysis) {
 source = 'custom_ml';
 (scenario.mlAnalysis.affectedSectors.up || []).forEach((s) => sectorsUp.add(s));
 (scenario.mlAnalysis.affectedSectors.down || []).forEach((s) => sectorsDown.add(s));
 } else if (customText && customText.trim()) {
 // Fallback to basic classification
 const classified = classifyCustomScenario(customText);
 if (classified && classified.hasMatch) {
 source = 'custom_ml';
 classified.sectorsUp.forEach((s) => sectorsUp.add(s));
 classified.sectorsDown.forEach((s) => sectorsDown.add(s));
 }
 }
 
 // Use preset if no custom sectors identified
 if (source === 'preset' || sectorsUp.size === 0) {
 const p = presetMap[scenario.id];
 if (p) {
 (p.up || []).forEach((s) => sectorsUp.add(s));
 (p.down || []).forEach((s) => sectorsDown.add(s));
 }
 }
 const upList = [];
 const downList = [];
 for (const sid of sectorsUp) {
 const data = STOCKS_BY_SECTOR[sid];
 if (data?.up) data.up.forEach((s) => upList.push({ ...s, sector: sid }));
 }
 for (const sid of sectorsDown) {
 const data = STOCKS_BY_SECTOR[sid];
 if (data?.down) data.down.forEach((s) => downList.push({ ...s, sector: sid }));
 }
 return { upList, downList, source };
 }

 function projectStockReturn(sectorId, direction, horizonDays) {
 const sens = HEATMAP_SECTOR_SENSITIVITY[sectorId] ?? 1;
 const mag = state.shockMagnitude / 100;
 const decay = 1 - Math.exp(-horizonDays / 90);
 const raw = mag * sens * decay * 0.4;
 return direction === 'up' ? Math.abs(raw) * 0.6 : raw;
 }
 
 function randn() {
 let u = 0;
 let v = 0;
 while (u === 0) u = Math.random();
 while (v === 0) v = Math.random();
 return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
 }
 
 function effectiveShockMagnitude(regionId) {
 const scenario = getScenario();
 const override = scenario.regionOverrides[regionId];
 const base = scenario.shockMagnitude;
 const fromScenario = override?.magnitude ?? base;
 if (scenario.id === 'custom') {
 const customBase = state.shockMagnitude;
 return (fromScenario / base || 1) * customBase;
 }
 return fromScenario;
 }
 
 function shockEnvelope(t) {
 const scenario = getScenario();
 const center = scenario.shockCenter;
 const duration = state.shockDuration;
 const spread = duration / 2;
 const x = (t - center) / (spread || 1);
 const gaussian = Math.exp(-0.5 * x * x);
 const decayTail = Math.exp(-scenario.decay * Math.max(0, t - center));
 return gaussian * 0.75 + decayTail * 0.25;
 }
 
 function stepSimulation() {
 if (state.step >= state.horizon) {
 stopSimulation(false);
 logEvent(`Reached end of horizon (${state.horizon} days).`);
 return;
 }
 
 const scenario = getScenario();
 const envelope = shockEnvelope(state.step);
 
 for (const region of REGIONS) {
 const series = state.series[region.id];
 const last = series[series.length - 1];
 const direction = effectiveShockMagnitude(region.id);
 const shockReturn = (direction * envelope * region.sensitivity) / 100;
 
 const dailyVol = (scenario.baseVol * state.volatilityMult * region.sensitivity) / 100;
 const noise = randn() * dailyVol;
 
 const drift = scenario.baseDrift / 100 / 365;
 
 const totalReturn = shockReturn + noise + drift;
 const next = last * (1 + totalReturn);
 series.push(Math.max(10, next));
 
 const sectorBucket = state.sectorSeries[region.id];
 if (sectorBucket) {
 for (const sector of SECTORS) {
 if (sector.id === 'all') continue;
 const secSeries = sectorBucket[sector.id];
 if (!secSeries || !secSeries.length) continue;
 const lastSec = secSeries[secSeries.length - 1];
 const sens = SECTOR_SENSITIVITY[sector.id] ?? 1;
 const secNext = lastSec * (1 + totalReturn * sens);
 secSeries.push(Math.max(10, secNext));
 }
 }
 }
 
 state.step += 1;
 render();
 }
 
 function startSimulation() {
 if (state.isRunning) return;
 state.isRunning = true;
 document.getElementById('playPauseBtn').textContent = 'Pause';
 logEvent('Simulation started.');
 state.timerId = window.setInterval(stepSimulation, 140);
 }
 
 function stopSimulation(manual = true) {
 if (!state.isRunning && !manual) return;
 state.isRunning = false;
 if (state.timerId != null) {
 window.clearInterval(state.timerId);
 state.timerId = null;
 }
 document.getElementById('playPauseBtn').textContent = 'Run simulation';
 if (manual) {
 logEvent('Simulation paused.');
 }
 }
 
 function resetSimulation() {
 stopSimulation(false);
 state.step = 0;
 initSeries();
 render();
 logEvent('Simulation reset to day 0.');
 }
 
 function render() {
 const dayEl = document.getElementById('dayCounter');
 if (dayEl) {
 dayEl.textContent = `Day ${state.step} / ${state.horizon}`;
 }
 renderMap();
 renderMetrics();
 renderChart();
 }
 
 function renderMap() {
 const mapRegions = REGIONS.filter((r) => MAP_REGION_IDS.includes(r.id));
 for (const region of mapRegions) {
 const el = document.querySelector(`[data-region-id="${region.id}"]`);
 if (!el) continue;
 const series = state.series[region.id] || [];
 const current = series[series.length - 1] ?? region.baseIndex;
 const start = series[0] ?? region.baseIndex;
 const change = ((current - start) / start) * 100;
 
 const changeEl = el.querySelector('.map-region-change');
 const metricEl = el.querySelector('.map-region-metric-value');
 const chipEl = el.querySelector('.map-region-badge');
 
 if (metricEl) {
 metricEl.textContent = current.toFixed(1);
 }
 if (changeEl) {
 const sign = change > 0 ? '+' : '';
 changeEl.textContent = `${sign}${change.toFixed(1)}%`;
 changeEl.classList.toggle('metric-negative', change < 0);
 changeEl.classList.toggle('metric-positive', change > 0);
 }
 
 if (chipEl) {
 chipEl.textContent = `β ${region.sensitivity.toFixed(2)}`;
 }
 
 const shockMag = effectiveShockMagnitude(region.id);
 const envelope = shockEnvelope(state.step);
 const shockIntensity = Math.min(1, Math.abs((shockMag / 50) * envelope));
 
 const red = 248;
 const greenBase = 113;
 const blue = 113;
 const green = greenBase * (1 - shockIntensity);
 const overlay = `rgba(${red}, ${green.toFixed(0)}, ${blue}, ${0.18 + shockIntensity * 0.32})`;
 
 el.style.backgroundImage = `
 radial-gradient(circle at top, ${overlay}, transparent 70%),
 radial-gradient(circle at bottom, rgba(15,23,42,1), rgba(15,23,42,0.98))
 `;
 
 const mapId = REGION_TO_MAP[state.selectedRegionId] || state.selectedRegionId;
 const isSelected = region.id === state.selectedRegionId || region.id === mapId;
 el.classList.toggle('selected', isSelected);
 }
 }
 
 function getActiveSeries() {
 const regionId = state.selectedRegionId;
 const region = findRegion(regionId);
 let series = state.series[regionId] || [];
 
 if (state.selectedSectorId && state.selectedSectorId !== 'all') {
 const bucket = state.sectorSeries[regionId] || {};
 const sectorSeries = bucket[state.selectedSectorId];
 if (sectorSeries && sectorSeries.length) {
 series = sectorSeries;
 }
 }
 
 return { regionId, region, series };
 }
 
 function renderMetrics() {
 const { region, series } = getActiveSeries();
 const base = series[0] ?? region.baseIndex;
 const current = series[series.length - 1] ?? base;
 
 const currentEl = document.getElementById('metricCurrent');
 const currentChangeEl = document.getElementById('metricCurrentChange');
 const drawdownEl = document.getElementById('metricDrawdown');
 const troughEl = document.getElementById('metricTrough');
 const recoveryEl = document.getElementById('metricRecovery');
 const recoveryDaysEl = document.getElementById('metricRecoveryDays');
 
 if (!series.length) return;
 
 const changePct = ((current - base) / base) * 100;
 const maxPeak = Math.max(...series);
 const minTrough = Math.min(...series);
 
 let peak = series[0];
 let maxDrawdown = 0;
 for (const value of series) {
 if (value > peak) peak = value;
 const dd = (value - peak) / peak;
 if (dd < maxDrawdown) maxDrawdown = dd;
 }
 
 let recoveryIdx = null;
 for (let i = 0; i < series.length; i += 1) {
 if (series[i] >= base && i > 0) {
 recoveryIdx = i;
 break;
 }
 }
 
 currentEl.textContent = current.toFixed(1);
 currentChangeEl.textContent = `${changePct >= 0 ? '+' : ''}${changePct.toFixed(1)}% vs start`;
 currentChangeEl.classList.toggle('metric-negative', changePct < 0);
 currentChangeEl.classList.toggle('metric-positive', changePct > 0);
 
 drawdownEl.textContent = `${(maxDrawdown * 100).toFixed(1)}%`;
 drawdownEl.classList.toggle('metric-negative', maxDrawdown < 0);
 troughEl.textContent = `Trough: ${minTrough.toFixed(1)} (peak ${maxPeak.toFixed(1)})`;
 
 if (recoveryIdx == null) {
 recoveryEl.textContent = 'Unrecovered';
 recoveryEl.classList.add('metric-negative');
 recoveryDaysEl.textContent = 'Has not revisited starting level';
 } else {
 recoveryEl.textContent = 'Recovered';
 recoveryEl.classList.remove('metric-negative');
 recoveryEl.classList.add('metric-positive');
 recoveryDaysEl.textContent = `Recovered in ${recoveryIdx} days`;
 }
 }
 
 function renderChart() {
 const svg = document.getElementById('chartSvg');
 if (!svg) return;
 
 while (svg.firstChild) svg.removeChild(svg.firstChild);
 
 const { series: activeSeries } = getActiveSeries();
 const horizon = state.horizon;
 
 if (!activeSeries.length) return;
 let series = activeSeries.slice(0, Math.min(activeSeries.length, horizon + 1));
 if (series.length < 2) return;
 
 const width = svg.clientWidth || 600;
 const height = svg.clientHeight || 220;
 const paddingLeft = 36;
 const paddingRight = 14;
 const paddingTop = 14;
 const paddingBottom = 24;
 
 svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
 
 const minValue = Math.min(...series);
 const maxValue = Math.max(...series);
 let range = maxValue - minValue || 1;
 
 // Expand range to show full -500 to 500 scale while keeping zoom on data
 const expandedMin = Math.min(minValue, -500);
 const expandedMax = Math.max(maxValue, 500);
 
 // Add 15% padding to the actual data range for zoom effect
 const dataPadding = range * 0.15;
 const adjustedMin = Math.max(minValue - dataPadding, expandedMin);
 const adjustedMax = Math.min(maxValue + dataPadding, expandedMax);
 
 const xScale = (day) =>
 paddingLeft + (day / horizon) * (width - paddingLeft - paddingRight);
 
 const pathData = [];
 for (let i = 0; i < series.length; i += 1) {
 const x = xScale(i);
 const norm = (series[i] - adjustedMin) / (adjustedMax - adjustedMin);
 const y = height - paddingBottom - norm * (height - paddingTop - paddingBottom);
 pathData.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
 }
 
 const baseVal = series[0];
 const baseY =
 height -
 paddingBottom -
 ((baseVal - adjustedMin) / (adjustedMax - adjustedMin)) * (height - paddingTop - paddingBottom);
 
 const baseLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
 baseLine.setAttribute('x1', paddingLeft);
 baseLine.setAttribute('y1', baseY);
 baseLine.setAttribute('x2', width - paddingRight);
 baseLine.setAttribute('y2', baseY);
 baseLine.setAttribute('stroke', 'rgba(148,163,184,0.45)');
 baseLine.setAttribute('stroke-dasharray', '4 4');
 baseLine.setAttribute('stroke-width', '1');
 svg.appendChild(baseLine);
 
 const yTickCount = 4;
 for (let i = 0; i < yTickCount; i += 1) {
 const value = adjustedMin + (i / (yTickCount - 1)) * (adjustedMax - adjustedMin);
 const norm = (value - adjustedMin) / (adjustedMax - adjustedMin);
 const y =
 height - paddingBottom - norm * (height - paddingTop - paddingBottom);
 
 const tickLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
 tickLine.setAttribute('x1', paddingLeft - 4);
 tickLine.setAttribute('y1', y);
 tickLine.setAttribute('x2', paddingLeft);
 tickLine.setAttribute('y2', y);
 tickLine.setAttribute('stroke', 'rgba(148,163,184,0.6)');
 tickLine.setAttribute('stroke-width', '1');
 svg.appendChild(tickLine);
 
 const tickText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
 tickText.setAttribute('x', paddingLeft - 8);
 tickText.setAttribute('y', y + 3);
 tickText.setAttribute('text-anchor', 'end');
 tickText.setAttribute('font-size', '10');
 tickText.setAttribute('fill', 'rgba(148,163,184,0.95)');
 tickText.textContent = value.toFixed(0);
 svg.appendChild(tickText);
 }
 
 const xTicks = [0, Math.floor(horizon / 2), horizon];
 const uniqueXTicks = Array.from(new Set(xTicks)).filter((v) => v >= 0);
 
 for (const t of uniqueXTicks) {
 const x = xScale(t);
 
 const tickLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
 tickLine.setAttribute('x1', x);
 tickLine.setAttribute('y1', height - paddingBottom);
 tickLine.setAttribute('x2', x);
 tickLine.setAttribute('y2', height - paddingBottom + 4);
 tickLine.setAttribute('stroke', 'rgba(148,163,184,0.6)');
 tickLine.setAttribute('stroke-width', '1');
 svg.appendChild(tickLine);
 
 const tickText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
 tickText.setAttribute('x', x);
 tickText.setAttribute('y', height - paddingBottom + 14);
 tickText.setAttribute('text-anchor', 'middle');
 tickText.setAttribute('font-size', '10');
 tickText.setAttribute('fill', 'rgba(148,163,184,0.95)');
 tickText.textContent = t;
 svg.appendChild(tickText);
 }
 
 const gradientId = 'lineGradient';
 const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
 const linearGrad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
 linearGrad.setAttribute('id', gradientId);
 linearGrad.setAttribute('x1', '0%');
 linearGrad.setAttribute('y1', '0%');
 linearGrad.setAttribute('x2', '0%');
 linearGrad.setAttribute('y2', '100%');
 
 const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
 stop1.setAttribute('offset', '0%');
 stop1.setAttribute('stop-color', '#38bdf8');
 stop1.setAttribute('stop-opacity', '0.9');
 
 const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
 stop2.setAttribute('offset', '100%');
 stop2.setAttribute('stop-color', '#4f46e5');
 stop2.setAttribute('stop-opacity', '0.6');
 
 linearGrad.appendChild(stop1);
 linearGrad.appendChild(stop2);
 defs.appendChild(linearGrad);
 svg.appendChild(defs);
 
 const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
 path.setAttribute('d', pathData.join(' '));
 path.setAttribute('fill', 'none');
 path.setAttribute('stroke', `url(#${gradientId})`);
 path.setAttribute('stroke-width', '2');
 path.setAttribute('stroke-linejoin', 'round');
 path.setAttribute('stroke-linecap', 'round');
 svg.appendChild(path);
 
 const lastValue = series[series.length - 1];
 const lastDay = series.length - 1;
 const lastX = xScale(lastDay);
 const lastNorm = (lastValue - adjustedMin) / (adjustedMax - adjustedMin);
 const lastY = height - paddingBottom - lastNorm * (height - paddingTop - paddingBottom);
 
 const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
 dot.setAttribute('cx', lastX);
 dot.setAttribute('cy', lastY);
 dot.setAttribute('r', '4');
 dot.setAttribute('fill', '#e0f2fe');
 dot.setAttribute('stroke', '#0f172a');
 dot.setAttribute('stroke-width', '1');
 svg.appendChild(dot);
 }
 
 function logEvent(message) {
 const list = document.getElementById('eventLogList');
 if (!list) return;
 const now = new Date();
 const time = now.toLocaleTimeString(undefined, {
 hour: '2-digit',
 minute: '2-digit',
 second: '2-digit',
 });
 const li = document.createElement('li');
 li.innerHTML = `<span class="event-log-time">${time}</span><span class="event-log-msg">${message}</span>`;
 list.insertBefore(li, list.firstChild);
 
 while (list.children.length > 8) {
 list.removeChild(list.lastChild);
 }
 }
 
 function syncSlidersToUI() {
 const magnitudeSlider = document.getElementById('magnitudeSlider');
 const durationSlider = document.getElementById('durationSlider');
 const volatilitySlider = document.getElementById('volatilitySlider');
 
 if (magnitudeSlider) magnitudeSlider.value = state.shockMagnitude;
 if (durationSlider) durationSlider.value = state.shockDuration;
 if (volatilitySlider) volatilitySlider.value = state.volatilityMult;
 
 updateSliderLabels();
 }
 
 function updateSliderLabels() {
 const magnitudeLabel = document.getElementById('magnitudeValue');
 const durationLabel = document.getElementById('durationValue');
 const volatilityLabel = document.getElementById('volatilityValue');
 
 if (magnitudeLabel) {
 magnitudeLabel.textContent = `${state.shockMagnitude > 0 ? '+' : ''}${state.shockMagnitude.toFixed(
 0,
 )}%`;
 }
 if (durationLabel) {
 durationLabel.textContent = `${state.shockDuration.toFixed(0)} days`;
 }
 if (volatilityLabel) {
 volatilityLabel.textContent = `${state.volatilityMult.toFixed(1)}x`;
 }
 }
 
 function applyScenarioPreset(scenarioId) {
 state.selectedScenarioId = scenarioId;
 const scenario = getScenario();
 
 if (scenario.id !== 'custom') {
 state.shockMagnitude = scenario.shockMagnitude;
 state.shockDuration = scenario.shockCenter * 1.3;
 state.volatilityMult = scenario.baseVol;
 syncSlidersToUI();
 logEvent(`Preset selected: ${scenario.name}.`);
 } else {
 logEvent('Custom stress mode: sliders fully drive the shock.');
 }
 
 for (const btn of document.querySelectorAll('.scenario-btn')) {
 if (btn.dataset.scenarioId === scenarioId) {
 btn.classList.add('selected');
 } else {
 btn.classList.remove('selected');
 }
 }
 
 resetSimulation();
 }
 
 function setupScenarioButtons() {
 const container = document.getElementById('scenarioButtons');
 if (!container) return;
 
 container.innerHTML = '';
 for (const scenario of SCENARIOS) {
 const btn = document.createElement('button');
 btn.type = 'button';
 btn.className = 'scenario-btn';
 btn.dataset.scenarioId = scenario.id;
 btn.innerHTML = `
 <span class="scenario-name">${scenario.name}</span>
 <span class="scenario-sub">${scenario.description}</span>
 `;
 btn.addEventListener('click', () => {
 applyScenarioPreset(scenario.id);
 });
 container.appendChild(btn);
 }
 
 applyScenarioPreset(state.selectedScenarioId);
 }
 
 function setupRegionInput() {
 const input = document.getElementById('regionInput');
 const errorEl = document.getElementById('regionError');
 if (!input) return;

 input.value = findRegion(state.selectedRegionId).name;

 const applyRegion = (region) => {
 state.selectedRegionId = region.id;
 if (errorEl) {
 errorEl.hidden = true;
 errorEl.textContent = '';
 }
 input.classList.remove('error');
 render();
 renderAnalyticsTab();
 logEvent(`Focus switched to ${region.name}.`);
 };

 input.addEventListener('blur', () => {
 const raw = input.value.trim();
 if (!raw) return;
 const region = resolveRegionFromInput(raw);
 if (region) {
 applyRegion(region);
 input.value = region.name;
 } else {
 if (errorEl) {
 errorEl.hidden = false;
 errorEl.textContent = 'Region not supported. Try: US, UK, Germany, Japan, China, Brazil, etc.';
 }
 input.classList.add('error');
 }
 });

 input.addEventListener('keydown', (e) => {
 if (e.key === 'Enter') {
 input.blur();
 }
 });
 }
 
 function setupSectorSelect() {
 const select = document.getElementById('sectorSelect');
 if (!select) return;
 select.innerHTML = '';
 
 for (const sector of SECTORS) {
 const option = document.createElement('option');
 option.value = sector.id;
 option.textContent = sector.name;
 if (sector.id === state.selectedSectorId) {
 option.selected = true;
 }
 select.appendChild(option);
 }
 
 select.addEventListener('change', (e) => {
 state.selectedSectorId = e.target.value;
 const region = findRegion(state.selectedRegionId);
 const meta = SECTORS.find((s) => s.id === state.selectedSectorId);
 const sectorLabel = meta ? meta.name : state.selectedSectorId;
 
 if (state.selectedSectorId === 'all') {
 logEvent(`Focus switched to ${region.name} (all sectors).`);
 } else {
 logEvent(`Sector focus: ${sectorLabel} in ${region.name}.`);
 }
 render();
 });
 }
 
 function setupHorizonSelect() {
 const select = document.getElementById('horizonSelect');
 if (!select) return;
 select.value = String(state.horizon);
 
 select.addEventListener('change', (e) => {
 const value = Number(e.target.value) || 120;
 state.horizon = Math.max(10, value);
 resetSimulation();
 logEvent(`Horizon set to ${state.horizon} days.`);
 });
 }
 
 function setupMapGrid() {
 const container = document.getElementById('mapContainer');
 if (!container) return;
 container.innerHTML = '';
 const mapRegions = REGIONS.filter((r) => MAP_REGION_IDS.includes(r.id));
 for (const region of mapRegions) {
 const div = document.createElement('div');
 div.className = 'map-region';
 div.dataset.regionId = region.id;
 div.innerHTML = `
 <div class="map-region-header">
 <div class="map-region-name">${region.name}</div>
 <div class="map-region-badge"></div>
 </div>
 <div class="map-region-metric">
 <span>Index</span>
 <span class="map-region-metric-value">100.0</span>
 </div>
 <div class="map-region-change">0.0%</div>
 `;
 div.addEventListener('click', () => {
 state.selectedRegionId = region.id;
 const regionInput = document.getElementById('regionInput');
 const regionError = document.getElementById('regionError');
 if (regionInput) regionInput.value = region.name;
 if (regionError) { regionError.hidden = true; }
 if (regionInput) regionInput.classList.remove('error');
 render();
 renderAnalyticsTab();
 logEvent(`Region clicked: ${region.name}.`);
 });
 container.appendChild(div);
 }
 
 renderMap();
 }
 
 function setupControls() {
 const playPauseBtn = document.getElementById('playPauseBtn');
 const stepBtn = document.getElementById('stepBtn');
 const resetBtn = document.getElementById('resetBtn');
 const clearLogBtn = document.getElementById('clearLogBtn');
 const magnitudeSlider = document.getElementById('magnitudeSlider');
 const durationSlider = document.getElementById('durationSlider');
 const volatilitySlider = document.getElementById('volatilitySlider');
 
 playPauseBtn?.addEventListener('click', () => {
 if (state.isRunning) {
 stopSimulation(true);
 } else {
 startSimulation();
 }
 });
 
 stepBtn?.addEventListener('click', () => {
 if (!state.isRunning) {
 stepSimulation();
 logEvent('Manual step executed.');
 }
 });
 
 resetBtn?.addEventListener('click', () => {
 resetSimulation();
 });
 
 clearLogBtn?.addEventListener('click', () => {
 const list = document.getElementById('eventLogList');
 if (!list) return;
 list.innerHTML = '';
 });
 
 magnitudeSlider?.addEventListener('input', (e) => {
 state.shockMagnitude = Number(e.target.value);
 updateSliderLabels();
 if (state.selectedScenarioId !== 'custom') {
 state.selectedScenarioId = 'custom';
 for (const btn of document.querySelectorAll('.scenario-btn')) {
 btn.classList.toggle('selected', btn.dataset.scenarioId === 'custom');
 }
 logEvent('Scenario switched to Custom because magnitude was adjusted.');
 }
 });
 
 durationSlider?.addEventListener('input', (e) => {
 state.shockDuration = Number(e.target.value);
 updateSliderLabels();
 if (state.selectedScenarioId !== 'custom') {
 state.selectedScenarioId = 'custom';
 for (const btn of document.querySelectorAll('.scenario-btn')) {
 btn.classList.toggle('selected', btn.dataset.scenarioId === 'custom');
 }
 logEvent('Scenario switched to Custom because duration was adjusted.');
 }
 });
 
 volatilitySlider?.addEventListener('input', (e) => {
 state.volatilityMult = Number(e.target.value);
 updateSliderLabels();
 if (state.selectedScenarioId !== 'custom') {
 state.selectedScenarioId = 'custom';
 for (const btn of document.querySelectorAll('.scenario-btn')) {
 btn.classList.toggle('selected', btn.dataset.scenarioId === 'custom');
 }
 logEvent('Scenario switched to Custom because volatility was adjusted.');
 }
 });
 }
 
 function setupTabs() {
 const simulatorTab = document.getElementById('simulatorTab');
 const analyticsTab = document.getElementById('analyticsTab');
 const recommendationsTab = document.getElementById('recommendationsTab');
 const btns = document.querySelectorAll('.tab-btn');
 btns.forEach((btn) => {
 btn.addEventListener('click', () => {
 const tab = btn.dataset.tab;
 btns.forEach((b) => {
 b.classList.toggle('active', b.dataset.tab === tab);
 b.setAttribute('aria-selected', b.dataset.tab === tab);
 });
 if (simulatorTab) simulatorTab.hidden = tab !== 'simulator';
 if (analyticsTab) {
 analyticsTab.hidden = tab !== 'analytics';
 if (tab === 'analytics') renderAnalyticsTab();
 }
 if (recommendationsTab) {
 recommendationsTab.hidden = tab !== 'recommendations';
 if (tab === 'recommendations') renderRecommendationsTab();
 }
 });
 });
 }

 function setupCustomScenarioInput() {
 const el = document.getElementById('customScenarioInput');
 if (!el) return;
 el.addEventListener('input', () => {
 state.customScenarioText = el.value;
 
 // Auto-preset sliders based on ML analysis
 if (el.value.trim()) {
 const mlAnalysis = analyzeCustomScenarioML(el.value);
 if (mlAnalysis) {
 // Update state with ML-derived parameters
 state.shockMagnitude = mlAnalysis.estimatedMagnitude;
 state.shockDuration = mlAnalysis.estimatedDuration;
 state.volatilityMult = mlAnalysis.volatilityMult;
 state.horizon = Math.max(60, mlAnalysis.estimatedDuration * 3);
 
 // Update slider UI
 const magSlider = document.getElementById('shockMagnitudeSlider');
 const durSlider = document.getElementById('shockDurationSlider');
 const volSlider = document.getElementById('volatilityMultSlider');
 const horizSlider = document.getElementById('horizonSlider');
 
 if (magSlider) magSlider.value = mlAnalysis.estimatedMagnitude;
 if (durSlider) durSlider.value = mlAnalysis.estimatedDuration;
 if (volSlider) volSlider.value = mlAnalysis.volatilityMult.toFixed(2);
 if (horizSlider) horizSlider.value = Math.max(60, mlAnalysis.estimatedDuration * 3);
 
 // Switch to custom scenario
 state.selectedScenarioId = 'custom';
 const scenarioSelect = document.getElementById('scenarioSelect');
 if (scenarioSelect) scenarioSelect.value = 'custom';
 
 // Log event
 logEvent(`ML Analysis: Severity ${mlAnalysis.severity}%, Scope ${mlAnalysis.scope}, Duration ${mlAnalysis.estimatedDuration} days`);
 
 // Render to show updates
 render();
 }
 }
 });
 }

 function setupSupportedRegionsList() {
 const el = document.getElementById('supportedRegionsList');
 if (!el) return;
 el.innerHTML = REGIONS.map((r) => `<span>${r.name}</span>`).join('');
 }

 function setupHistRegionSelect() {
 const select = document.getElementById('histRegionSelect');
 if (!select) return;
 select.innerHTML = REGIONS.map((r) =>
 `<option value="${r.id}">${r.name}</option>`
 ).join('');
 state.histRegionId = state.histRegionId || state.selectedRegionId;
 select.value = state.histRegionId;
 select.addEventListener('change', () => {
 state.histRegionId = select.value;
 renderAnalyticsTab();
 });
 }

 function computeStressScore() {
 const mag = Math.abs(state.shockMagnitude);
 const dur = Math.min(40, state.shockDuration);
 const vol = state.volatilityMult;
 return Math.min(10, (mag / 60) * 4 + (dur / 40) * 2 + (vol - 0.5) / 2.5 * 2).toFixed(1);
 }

 function renderAnalyticsTab() {
 const scenario = getScenario();
 const heatmapEl = document.getElementById('industryHeatmap');
 if (heatmapEl) {
 heatmapEl.innerHTML = '';
 for (const sec of HEATMAP_SECTORS) {
 const sens = HEATMAP_SECTOR_SENSITIVITY[sec.id] ?? 1;
 const mag = scenario.id === 'custom' ? state.shockMagnitude : (scenario.regionOverrides['north-america']?.magnitude ?? scenario.shockMagnitude);
 const impact = Math.abs((mag / 100) * sens * 100);
 const cell = document.createElement('div');
 cell.className = 'heatmap-cell';
 const intensity = Math.min(100, impact);
 const r = 248, g = Math.round(250 - intensity * 1.2), b = 113;
 cell.style.background = `linear-gradient(135deg, rgba(${r},${g},${b},${0.15 + intensity/400}), rgba(15,23,42,0.9))`;
 cell.innerHTML = `<div class="cell-label">${sec.name}</div><div class="cell-value">${impact.toFixed(0)}% impact</div>`;
 heatmapEl.appendChild(cell);
 }
 }
 const stocksDown = document.getElementById('stocksDown');
 const stocksUp = document.getElementById('stocksUp');
 if (stocksDown && stocksUp) {
 stocksDown.innerHTML = '';
 stocksUp.innerHTML = '';
 const downList = [], upList = [];
 for (const [sid, data] of Object.entries(STOCKS_BY_SECTOR)) {
 (data.down || []).forEach((s) => downList.push({ ...s, sector: sid }));
 (data.up || []).forEach((s) => upList.push({ ...s, sector: sid }));
 }
 downList.slice(0, 8).forEach((s) => {
 const li = document.createElement('li');
 li.innerHTML = `<span>${s.name}</span><span class="ticker">${s.ticker}</span>`;
 stocksDown.appendChild(li);
 });
 upList.slice(0, 8).forEach((s) => {
 const li = document.createElement('li');
 li.innerHTML = `<span>${s.name}</span><span class="ticker">${s.ticker}</span>`;
 stocksUp.appendChild(li);
 });
 }
 const quantEl = document.getElementById('quantificationMetric');
 if (quantEl) {
 const score = computeStressScore();
 quantEl.innerHTML = `Stress score: <strong>${score}/10</strong> (0 = calm, 10 = extreme; inspired by St. Louis Fed Financial Stress Index)`;
 }
 const tableEl = document.getElementById('biggestIndustryTable');
 if (tableEl) {
 let html = '<table><thead><tr><th>Country / Region</th><th>Primary industry</th></tr></thead><tbody>';
 for (const [rid, industry] of Object.entries(BIGGEST_INDUSTRY_BY_COUNTRY)) {
 const r = findRegion(rid);
 if (r) html += `<tr><td>${r.name}</td><td>${industry}</td></tr>`;
 }
 html += '</tbody></table>';
 tableEl.innerHTML = html;
 }
 const histEl = document.getElementById('historicalComp');
 if (histEl) {
 const regionId = document.getElementById('histRegionSelect')?.value || state.selectedRegionId;
 const region = findRegion(regionId);
 const baseSens = region.sensitivity;
 const comps = [
 { name: '2008 GFC', mag: Math.round(-38 * baseSens), note: 'Deep selloff, slow recovery' },
 { name: '2020 pandemic', mag: Math.round(-34 * baseSens), note: 'Fast crash, policy support' },
 { name: '2001 tech bust', mag: Math.round(-28 * baseSens), note: 'Growth/tech concentrated' },
 { name: '1997 Asia crisis', mag: Math.round(-45 * baseSens), note: 'EM-focused' },
 ];
 histEl.innerHTML = `<p class="hist-region-note">Region: <strong>${region.name}</strong></p>` + comps.map((c) =>
 `<div class="historical-card"><h4>${c.name}</h4><p>~${c.mag}% peak (${region.name}) · ${c.note}</p></div>`
 ).join('');
 }
 const thEl = document.getElementById('timeHorizonSim');
 if (thEl) {
 const base = 100;
 const mag = state.shockMagnitude / 100;
 const periods = [
 { label: '1 week', days: 5 },
 { label: '1 month', days: 21 },
 { label: '1 year', days: 365},
 { label: '5 years', days: 1260 },
 ];
 thEl.innerHTML = periods.map((p) => {
 const est = base * (1 + mag * 0.3 * Math.min(1, p.days / 60));
 return `<div class="time-horizon-card"><div class="th-label">${p.label}</div><div class="th-value">~${est.toFixed(0)}</div></div>`;
 }).join('');
 }
 }

 function renderRecommendationsTab() {
 const scenario = getScenario();
 const customText = state.customScenarioText || '';
 const summaryEl = document.getElementById('recScenarioSummary');
 const activeScenario = customText.trim()
 ? `Custom: "${customText.slice(0, 80)}${customText.length > 80 ? '...' : ''}"`
 : `Preset: ${scenario.name}`;
 if (summaryEl) summaryEl.innerHTML = `<strong>Active scenario:</strong> ${activeScenario} · <em>ML-based predictions</em>`;

 const { upList, downList, source } = getStockRecommendations();

 const periods = [
 { label: '1 week', days: 5 },
 { label: '1 month', days: 21 },
 { label: '1 year', days: 365 },
 { label: '5 years', days: 1260 },
 ];
 const base = 100;
 const mag = state.shockMagnitude / 100;
 const thEl = document.getElementById('recTimeHorizon');
 if (thEl) {
 thEl.innerHTML = periods.map((p) => {
 const est = base * (1 + mag * 0.35 * Math.min(1.2, p.days / 90));
 return `<div class="rec-th-card"><div class="rec-th-label">${p.label}</div><div class="rec-th-value">~${est.toFixed(0)}</div></div>`;
 }).join('');
 }

 const upEl = document.getElementById('recStocksUp');
 const downEl = document.getElementById('recStocksDown');
 if (upEl) {
 upEl.innerHTML = (upList.length ? upList : [{ ticker: 'JNJ', name: 'Johnson & Johnson', sector: 'healthcare' }, { ticker: 'UNH', name: 'UnitedHealth', sector: 'healthcare' }])
 .map((s) => `<div class="rec-stock-card"><span>${s.name}</span><span class="ticker">${s.ticker}</span></div>`).join('');
 }
 if (downEl) {
 downEl.innerHTML = (downList.length ? downList : [{ ticker: 'UAL', name: 'United Airlines', sector: 'airlines' }, { ticker: 'AAL', name: 'American Airlines', sector: 'airlines' }])
 .map((s) => `<div class="rec-stock-card"><span>${s.name}</span><span class="ticker">${s.ticker}</span></div>`).join('');
 }

 const allRecs = [...upList.map((s) => ({ ...s, dir: 'up' })), ...downList.map((s) => ({ ...s, dir: 'down' }))];
 const timelineEl = document.getElementById('recStockTimeline');
 if (timelineEl && allRecs.length) {
 let html = '<table><thead><tr><th>Stock</th><th>1 wk</th><th>1 m</th><th>1 yr</th><th>5 yr</th></tr></thead><tbody>';
 for (const s of allRecs.slice(0, 12)) {
 const mult = s.dir === 'up' ? 1 : -1;
 html += '<tr><td>' + s.name + ' (' + s.ticker + ')</td>';
 for (const p of periods) {
 const ret = projectStockReturn(s.sector, s.dir, p.days) * 100 * mult;
 html += `<td class="${ret >= 0 ? 'rec-positive' : 'rec-negative'}">${ret >= 0 ? '+' : ''}${ret.toFixed(1)}%</td>`;
 }
 html += '</tr>';
 }
 html += '</tbody></table>';
 timelineEl.innerHTML = html;
 } else if (timelineEl) {
 timelineEl.innerHTML = '<p class="field-hint">Select a scenario and view recommendations above.</p>';
 }
 }

 function init() {
 initSeries();
 setupTabs();
 setupScenarioButtons();
 setupCustomScenarioInput();
 setupSupportedRegionsList();
 setupHistRegionSelect();
 setupRegionInput();
 setupSectorSelect();
 setupHorizonSelect();
 setupMapGrid();
 setupControls();
 updateSliderLabels();
 render();
 logEvent('Simulator ready. Enter a focus region and press Run.');
 }
 
 window.addEventListener('DOMContentLoaded', init);