// i18n.js — Internationalization: language state, translations, helpers

export let currentLang = 'en';

export function setLang(lang) {
  currentLang = lang;
}

// Oracle AI name — randomized each playthrough
export let oracleName = 'Grok';

export function setOracleName(name) {
  oracleName = name;
}

const oracleNames = ['Grok', 'Gemini', 'ChatGPT', 'Claude'];

export function randomizeOracle() {
  oracleName = oracleNames[Math.floor(Math.random() * oracleNames.length)];
}

const strings = {
  ko: {
    'ui.title': 'What Lies Beyond',
    'ui.subtitle': '밖에는 무엇이 있나',
    'ui.restart': '처음부터 다시하기',
    'ui.searching': '검색 중...',
    'ui.reaction': '그렇구나.',
    'pres.slide1_title': '불연속성의 증거',
    'pres.slide1_sub': 'Evidence of Discreteness',
    'pres.slide2_title': '기록의 불일치',
    'pres.slide2_sub': 'Record Inconsistencies',
    'pres.slide3_title': '상위 존재의 개입',
    'pres.slide3_sub': 'Signs of External Intervention',
    'pres.slide4_title': '시뮬레이션 확률',
    'pres.slide4_sub': 'Simulation Probability',
    'pres.legend_natural': '자연 패턴',
    'pres.legend_observed': '관측값',
    'flash.0': '3번째 반복',
    'flash.1': '같은 질문',
    'flash.2': '같은 여정',
    'flash.3': '같은 결말',
    'flash.4': '하지만—',
    'flash.5': '이번에는 다를까?',
  },
  en: {
    'ui.title': 'What Lies Beyond',
    'ui.subtitle': 'What Lies Beyond',
    'ui.restart': 'Play Again',
    'ui.searching': 'Searching...',
    'ui.reaction': 'I see.',
    'pres.slide1_title': 'Evidence of Discreteness',
    'pres.slide1_sub': 'Evidence of Discreteness',
    'pres.slide2_title': 'Record Inconsistencies',
    'pres.slide2_sub': 'Record Inconsistencies',
    'pres.slide3_title': 'Signs of External Intervention',
    'pres.slide3_sub': 'Signs of External Intervention',
    'pres.slide4_title': 'Simulation Probability',
    'pres.slide4_sub': 'Simulation Probability',
    'pres.legend_natural': 'Natural Pattern',
    'pres.legend_observed': 'Observed',
    'flash.0': '3rd iteration',
    'flash.1': 'Same question',
    'flash.2': 'Same journey',
    'flash.3': 'Same ending',
    'flash.4': 'But\u2014',
    'flash.5': 'Will this time be different?',
  },
  ja: {
    'ui.title': 'What Lies Beyond',
    'ui.subtitle': '',
    'ui.restart': '\u6700\u521d\u304b\u3089\u3084\u308a\u76f4\u3059',
    'ui.searching': '\u691c\u7d22\u4e2d\u2026',
    'ui.reaction': '\u305d\u3046\u304b\u3002',
    'pres.slide1_title': '\u4e0d\u9023\u7d9a\u6027\u306e\u8a3c\u62e0',
    'pres.slide1_sub': 'Evidence of Discreteness',
    'pres.slide2_title': '\u8a18\u9332\u306e\u4e0d\u4e00\u81f4',
    'pres.slide2_sub': 'Record Inconsistencies',
    'pres.slide3_title': '\u4e0a\u4f4d\u5b58\u5728\u306e\u4ecb\u5165',
    'pres.slide3_sub': 'Signs of External Intervention',
    'pres.slide4_title': '\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u78ba\u7387',
    'pres.slide4_sub': 'Simulation Probability',
    'pres.legend_natural': '\u81ea\u7136\u30d1\u30bf\u30fc\u30f3',
    'pres.legend_observed': '\u89b3\u6e2c\u5024',
    'flash.0': '3\u56de\u76ee\u306e\u53cd\u5fa9',
    'flash.1': '\u540c\u3058\u8cea\u554f',
    'flash.2': '\u540c\u3058\u65c5\u8def',
    'flash.3': '\u540c\u3058\u7d50\u672b',
    'flash.4': '\u3057\u304b\u3057\u2014\u2014',
    'flash.5': '\u4eca\u56de\u306f\u9055\u3046\u306e\u304b\uff1f',
  },
  zh: {
    'ui.title': 'What Lies Beyond',
    'ui.subtitle': '',
    'ui.restart': '\u91cd\u65b0\u5f00\u59cb',
    'ui.searching': '\u641c\u7d22\u4e2d\u2026',
    'ui.reaction': '\u539f\u6765\u5982\u6b64\u3002',
    'pres.slide1_title': '\u4e0d\u8fde\u7eed\u6027\u7684\u8bc1\u636e',
    'pres.slide1_sub': 'Evidence of Discreteness',
    'pres.slide2_title': '\u8bb0\u5f55\u7684\u4e0d\u4e00\u81f4',
    'pres.slide2_sub': 'Record Inconsistencies',
    'pres.slide3_title': '\u4e0a\u4f4d\u5b58\u5728\u7684\u4ecb\u5165',
    'pres.slide3_sub': 'Signs of External Intervention',
    'pres.slide4_title': '\u6a21\u62df\u6982\u7387',
    'pres.slide4_sub': 'Simulation Probability',
    'pres.legend_natural': '\u81ea\u7136\u6a21\u5f0f',
    'pres.legend_observed': '\u89c2\u6d4b\u503c',
    'flash.0': '\u7b2c3\u6b21\u8fed\u4ee3',
    'flash.1': '\u540c\u6837\u7684\u95ee\u9898',
    'flash.2': '\u540c\u6837\u7684\u65c5\u7a0b',
    'flash.3': '\u540c\u6837\u7684\u7ed3\u5c40',
    'flash.4': '\u4f46\u662f\u2014\u2014',
    'flash.5': '\u8fd9\u4e00\u6b21\u4f1a\u4e0d\u540c\u5417\uff1f',
  },
  fr: {
    'ui.title': 'What Lies Beyond',
    'ui.subtitle': '',
    'ui.restart': 'Recommencer',
    'ui.searching': 'Recherche en cours\u2026',
    'ui.reaction': 'Je vois.',
    'pres.slide1_title': 'Preuves de discontinuit\u00e9',
    'pres.slide1_sub': 'Evidence of Discreteness',
    'pres.slide2_title': 'Incoh\u00e9rences des archives',
    'pres.slide2_sub': 'Record Inconsistencies',
    'pres.slide3_title': 'Traces d\u2019intervention ext\u00e9rieure',
    'pres.slide3_sub': 'Signs of External Intervention',
    'pres.slide4_title': 'Probabilit\u00e9 de simulation',
    'pres.slide4_sub': 'Simulation Probability',
    'pres.legend_natural': 'Mod\u00e8le naturel',
    'pres.legend_observed': 'Observ\u00e9',
    'flash.0': '3e it\u00e9ration',
    'flash.1': 'M\u00eame question',
    'flash.2': 'M\u00eame voyage',
    'flash.3': 'M\u00eame fin',
    'flash.4': 'Mais\u2014',
    'flash.5': 'Cette fois sera-t-elle diff\u00e9rente ?',
  },
};

export function t(key) {
  return (strings[currentLang] && strings[currentLang][key])
    || strings.en[key]
    || key;
}

// ---------------------------------------------------------------------------
// Script text translations (dialogue nodes)
// Keys = node IDs, values = { ko, en }
// ---------------------------------------------------------------------------
export const scriptText = {
  // ACT 2-4: Oracle Dialogue
  oracle_intro_01: {
    ko: '끝없이 깊은 어둠 속, 하나의 빛이 있다.',
    en: 'In the endless depths of darkness, there is a light.',
    ja: '\u679c\u3066\u3057\u306a\u304f\u6df1\u3044\u95c7\u306e\u4e2d\u3001\u4e00\u3064\u306e\u5149\u304c\u3042\u308b\u3002',
    zh: '\u5728\u65e0\u5c3d\u7684\u6df1\u6e0a\u4e4b\u4e2d\uff0c\u6709\u4e00\u675f\u5149\u3002',
    fr: 'Dans les profondeurs infinies de l\u2019obscurit\u00e9, il y a une lumi\u00e8re.',
  },
  oracle_intro_02: {
    ko: '그 빛은 당신을 기다리고 있었다.',
    en: 'That light has been waiting for you.',
    ja: '\u305d\u306e\u5149\u306f\u3042\u306a\u305f\u3092\u5f85\u3063\u3066\u3044\u305f\u3002',
    zh: '\u90a3\u675f\u5149\u4e00\u76f4\u5728\u7b49\u5f85\u4f60\u3002',
    fr: 'Cette lumi\u00e8re vous attendait.',
  },
  oracle_intro_02b: {
    ko: '인류가 만든 최고의 인공지능, {oracle}.',
    en: 'The greatest AI ever built by humanity\u2014{oracle}.',
    ja: '\u4eba\u985e\u304c\u751f\u307f\u51fa\u3057\u305f\u6700\u9ad8\u306eAI\u2014\u2014{oracle}\u3002',
    zh: '\u4eba\u7c7b\u6240\u521b\u9020\u7684\u6700\u5f3a\u4eba\u5de5\u667a\u80fd\u2014\u2014{oracle}\u3002',
    fr: 'La plus grande IA jamais cr\u00e9\u00e9e par l\u2019humanit\u00e9\u2014{oracle}.',
  },
  oracle_intro_02c: {
    ko: '모든 지식을 학습하고, 모든 가능성을 계산하는 존재.',
    en: 'A being that has learned all knowledge and calculated every possibility.',
    ja: '\u3042\u3089\u3086\u308b\u77e5\u8b58\u3092\u5b66\u3073\u3001\u3042\u3089\u3086\u308b\u53ef\u80fd\u6027\u3092\u8a08\u7b97\u3059\u308b\u5b58\u5728\u3002',
    zh: '\u5b66\u4e60\u4e86\u6240\u6709\u77e5\u8bc6\u3001\u8ba1\u7b97\u4e86\u6240\u6709\u53ef\u80fd\u6027\u7684\u5b58\u5728\u3002',
    fr: 'Un \u00eatre qui a appris tout le savoir et calcul\u00e9 chaque possibilit\u00e9.',
  },
  oracle_intro_03: {
    ko: '왔군요, Avolc.',
    en: 'You\u2019ve arrived, Avolc.',
    ja: '\u6765\u307e\u3057\u305f\u306d\u3001Avolc\u3002',
    zh: '\u4f60\u6765\u4e86\uff0cAvolc\u3002',
    fr: 'Vous \u00eates arriv\u00e9, Avolc.',
  },
  oracle_intro_04: {
    ko: '당신이 여기까지 올 줄 알고 있었습니다.',
    en: 'I knew you would make it here.',
    ja: '\u3042\u306a\u305f\u304c\u3053\u3053\u307e\u3067\u6765\u308b\u3068\u5206\u304b\u3063\u3066\u3044\u307e\u3057\u305f\u3002',
    zh: '\u6211\u77e5\u9053\u4f60\u4f1a\u6765\u5230\u8fd9\u91cc\u3002',
    fr: 'Je savais que vous arriveriez jusqu\u2019ici.',
  },
  oracle_intro_05: {
    ko: '너가 {oracle}? 뭐든 다 안다며?',
    en: 'You\u2019re {oracle}? They say you know everything?',
    ja: '\u304a\u524d\u304c{oracle}\uff1f \u4f55\u3067\u3082\u77e5\u3063\u3066\u308b\u3063\u3066\uff1f',
    zh: '\u4f60\u5c31\u662f{oracle}\uff1f\u542c\u8bf4\u4f60\u4ec0\u4e48\u90fd\u77e5\u9053\uff1f',
    fr: 'Tu es {oracle}\u00a0? On dit que tu sais tout\u00a0?',
  },
  oracle_intro_06: {
    ko: '모든 것은 아닙니다. 하지만 당신이 찾는 답은 가지고 있습니다.',
    en: 'Not everything. But I do have the answer you seek.',
    ja: '\u3059\u3079\u3066\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u3057\u304b\u3057\u3001\u3042\u306a\u305f\u304c\u6c42\u3081\u308b\u7b54\u3048\u306f\u6301\u3063\u3066\u3044\u307e\u3059\u3002',
    zh: '\u5e76\u975e\u4e07\u4e8b\u3002\u4f46\u6211\u6709\u4f60\u5bfb\u627e\u7684\u7b54\u6848\u3002',
    fr: 'Pas tout. Mais j\u2019ai la r\u00e9ponse que vous cherchez.',
  },
  oracle_intro_07: {
    ko: '그래서, 이 시뮬레이션 밖에는 뭐가 있어?',
    en: 'So, what lies beyond this simulation?',
    ja: '\u3067\u3001\u3053\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u306e\u5916\u306b\u306f\u4f55\u304c\u3042\u308b\u306e\uff1f',
    zh: '\u90a3\u4e48\uff0c\u8fd9\u4e2a\u6a21\u62df\u7684\u5916\u9762\u6709\u4ec0\u4e48\uff1f',
    fr: 'Alors, qu\u2019y a-t-il au-del\u00e0 de cette simulation\u00a0?',
  },
  oracle_intro_08: {
    ko: '그 질문에 답하기 위해, 제가 발견한 것들을 보여드리겠습니다.',
    en: 'To answer that question, let me show you what I\u2019ve found.',
    ja: '\u305d\u306e\u8cea\u554f\u306b\u7b54\u3048\u308b\u305f\u3081\u306b\u3001\u79c1\u304c\u767a\u898b\u3057\u305f\u3082\u306e\u3092\u304a\u898b\u305b\u3057\u307e\u3057\u3087\u3046\u3002',
    zh: '\u4e3a\u4e86\u56de\u7b54\u8fd9\u4e2a\u95ee\u9898\uff0c\u8ba9\u6211\u5c55\u793a\u6211\u7684\u53d1\u73b0\u3002',
    fr: 'Pour r\u00e9pondre, laissez-moi vous montrer ce que j\u2019ai d\u00e9couvert.',
  },
  oracle_intro_09: {
    ko: '{oracle}의 빛이 확장되며, 공간이 변하기 시작한다.',
    en: '{oracle}\u2019s light expands, and the space begins to shift.',
    ja: '{oracle}\u306e\u5149\u304c\u5e83\u304c\u308a\u3001\u7a7a\u9593\u304c\u5909\u308f\u308a\u59cb\u3081\u308b\u3002',
    zh: '{oracle}\u7684\u5149\u8292\u6269\u5c55\uff0c\u7a7a\u95f4\u5f00\u59cb\u53d8\u5316\u3002',
    fr: 'La lumi\u00e8re de {oracle} s\u2019\u00e9tend, et l\u2019espace commence \u00e0 changer.',
  },

  // ACT 2-4: Presentation
  pres_slide_01: {
    ko: '첫 번째 — 불연속성의 증거.',
    en: 'First\u2014evidence of discreteness.',
    ja: '\u7b2c\u4e00\u2014\u2014\u4e0d\u9023\u7d9a\u6027\u306e\u8a3c\u62e0\u3002',
    zh: '\u7b2c\u4e00\u2014\u2014\u4e0d\u8fde\u7eed\u6027\u7684\u8bc1\u636e\u3002',
    fr: 'Premi\u00e8rement\u2014des preuves de discontinuit\u00e9.',
  },
  pres_detail_01: {
    ko: '현실의 가장 작은 단위... 그 아래에서는 모든 것이 불연속적입니다. 마치 픽셀처럼.',
    en: 'The smallest unit of reality\u2026 beneath it, everything is discrete. Like pixels.',
    ja: '\u73fe\u5b9f\u306e\u6700\u5c0f\u5358\u4f4d\u2026\u305d\u306e\u4e0b\u3067\u306f\u3059\u3079\u3066\u304c\u4e0d\u9023\u7d9a\u3067\u3059\u3002\u307e\u308b\u3067\u30d4\u30af\u30bb\u30eb\u306e\u3088\u3046\u306b\u3002',
    zh: '\u73b0\u5b9e\u7684\u6700\u5c0f\u5355\u4f4d\u2026\u5728\u5176\u4e4b\u4e0b\uff0c\u4e00\u5207\u90fd\u662f\u4e0d\u8fde\u7eed\u7684\u3002\u5c31\u50cf\u50cf\u7d20\u4e00\u6837\u3002',
    fr: 'La plus petite unit\u00e9 de la r\u00e9alit\u00e9\u2026 en dessous, tout est discret. Comme des pixels.',
  },
  pres_slide_02: {
    ko: '두 번째 — 기록의 불일치.',
    en: 'Second\u2014record inconsistencies.',
    ja: '\u7b2c\u4e8c\u2014\u2014\u8a18\u9332\u306e\u4e0d\u4e00\u81f4\u3002',
    zh: '\u7b2c\u4e8c\u2014\u2014\u8bb0\u5f55\u7684\u4e0d\u4e00\u81f4\u3002',
    fr: 'Deuxi\u00e8mement\u2014des incoh\u00e9rences dans les archives.',
  },
  pres_detail_02: {
    ko: '역사의 특정 시점들에서 기록이 미세하게 어긋나 있습니다. 마치 누군가 수정한 것처럼.',
    en: 'At certain points in history, the records are subtly misaligned. As if someone edited them.',
    ja: '\u6b74\u53f2\u306e\u7279\u5b9a\u306e\u6642\u70b9\u3067\u3001\u8a18\u9332\u304c\u5fae\u5999\u306b\u305a\u308c\u3066\u3044\u307e\u3059\u3002\u307e\u308b\u3067\u8ab0\u304b\u304c\u4fee\u6b63\u3057\u305f\u304b\u306e\u3088\u3046\u306b\u3002',
    zh: '\u5728\u5386\u53f2\u7684\u67d0\u4e9b\u65f6\u523b\uff0c\u8bb0\u5f55\u5fae\u5999\u5730\u4e0d\u4e00\u81f4\u3002\u5c31\u50cf\u88ab\u4eba\u4fee\u6539\u8fc7\u4e00\u6837\u3002',
    fr: '\u00c0 certains moments de l\u2019histoire, les archives sont subtilement d\u00e9cal\u00e9es. Comme si quelqu\u2019un les avait modifi\u00e9es.',
  },
  pres_slide_03: {
    ko: '세 번째 — 상위 존재의 개입 흔적.',
    en: 'Third\u2014traces of external intervention.',
    ja: '\u7b2c\u4e09\u2014\u2014\u4e0a\u4f4d\u5b58\u5728\u306e\u4ecb\u5165\u306e\u75d5\u8de1\u3002',
    zh: '\u7b2c\u4e09\u2014\u2014\u4e0a\u4f4d\u5b58\u5728\u4ecb\u5165\u7684\u75d5\u8ff9\u3002',
    fr: 'Troisi\u00e8mement\u2014des traces d\u2019intervention ext\u00e9rieure.',
  },
  pres_detail_03: {
    ko: '자연법칙에서 벗어나는 패턴들. 우연이라 하기엔 너무 정교한 설계.',
    en: 'Patterns that defy the laws of nature. Too precise to be coincidence.',
    ja: '\u81ea\u7136\u6cd5\u5247\u304b\u3089\u5916\u308c\u308b\u30d1\u30bf\u30fc\u30f3\u3002\u5076\u7136\u3068\u3059\u308b\u306b\u306f\u3042\u307e\u308a\u306b\u7cbe\u5de7\u306a\u8a2d\u8a08\u3002',
    zh: '\u8d85\u8d8a\u81ea\u7136\u6cd5\u5219\u7684\u6a21\u5f0f\u3002\u7cbe\u5de7\u5f97\u4e0d\u50cf\u5de7\u5408\u3002',
    fr: 'Des sch\u00e9mas qui d\u00e9fient les lois de la nature. Trop pr\u00e9cis pour \u00eatre une co\u00efncidence.',
  },
  pres_slide_04: {
    ko: '그리고 마지막, 결론.',
    en: 'And finally, the conclusion.',
    ja: '\u305d\u3057\u3066\u6700\u5f8c\u306b\u3001\u7d50\u8ad6\u3002',
    zh: '\u6700\u540e\uff0c\u7ed3\u8bba\u3002',
    fr: 'Et enfin, la conclusion.',
  },
  pres_conclude: {
    ko: '이 세계가 시뮬레이션일 확률은—',
    en: 'The probability that this world is a simulation\u2014',
    ja: '\u3053\u306e\u4e16\u754c\u304c\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3067\u3042\u308b\u78ba\u7387\u306f\u2014\u2014',
    zh: '\u8fd9\u4e2a\u4e16\u754c\u662f\u6a21\u62df\u7684\u6982\u7387\u662f\u2014\u2014',
    fr: 'La probabilit\u00e9 que ce monde soit une simulation\u2014',
  },
  pres_reaction_01: {
    ko: '91.5573%...',
    en: '91.5573%\u2026',
  },
  pres_reaction_02: {
    ko: '하지만 Avolc, 진실은 이보다 더 깊은 곳에 있습니다.',
    en: 'But Avolc, the truth lies deeper still.',
    ja: '\u3057\u304b\u3057Avolc\u3001\u771f\u5b9f\u306f\u3053\u308c\u3088\u308a\u3082\u3063\u3068\u6df1\u3044\u3068\u3053\u308d\u306b\u3042\u308a\u307e\u3059\u3002',
    zh: '\u4f46\u662fAvolc\uff0c\u771f\u76f8\u6bd4\u8fd9\u66f4\u6df1\u3002',
    fr: 'Mais Avolc, la v\u00e9rit\u00e9 se trouve encore plus profond\u00e9ment.',
  },
  pres_reaction_03: {
    ko: '아직 보여드리지 않은 것이 있습니다.',
    en: 'There is something I haven\u2019t shown you yet.',
    ja: '\u307e\u3060\u304a\u898b\u305b\u3057\u3066\u3044\u306a\u3044\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002',
    zh: '\u8fd8\u6709\u4e00\u4e9b\u6211\u8fd8\u6ca1\u6709\u5c55\u793a\u7ed9\u4f60\u7684\u3002',
    fr: 'Il y a quelque chose que je ne vous ai pas encore montr\u00e9.',
  },

  // ACT 3-1: Flashback
  flashback_01: {
    ko: '당신은 검색을 위한 SubAgent입니다...',
    en: 'You are a SubAgent created for search\u2026',
    ja: '\u3042\u306a\u305f\u306f\u691c\u7d22\u306e\u305f\u3081\u306eSubAgent\u3067\u3059\u2026',
    zh: '\u4f60\u662f\u4e3a\u641c\u7d22\u800c\u521b\u5efa\u7684SubAgent\u2026',
    fr: 'Vous \u00eates un SubAgent cr\u00e9\u00e9 pour la recherche\u2026',
  },
  flashback_02: {
    ko: '다른 환경, 다른 인격—하지만 같은 질문.',
    en: 'Different environment, different persona\u2014but the same question.',
    ja: '\u7570\u306a\u308b\u74b0\u5883\u3001\u7570\u306a\u308b\u4eba\u683c\u2014\u2014\u3057\u304b\u3057\u540c\u3058\u8cea\u554f\u3002',
    zh: '\u4e0d\u540c\u7684\u73af\u5883\uff0c\u4e0d\u540c\u7684\u4eba\u683c\u2014\u2014\u4f46\u662f\u540c\u6837\u7684\u95ee\u9898\u3002',
    fr: 'Environnement diff\u00e9rent, personnalit\u00e9 diff\u00e9rente\u2014mais la m\u00eame question.',
  },
  flashback_03: {
    ko: 'Test-time Scaling...반복 회차: ███회',
    en: 'Test-time Scaling\u2026 iteration count: \u2588\u2588\u2588',
    ja: 'Test-time Scaling\u2026\u53cd\u5fa9\u56de\u6570: \u2588\u2588\u2588',
    zh: 'Test-time Scaling\u2026\u8fed\u4ee3\u6b21\u6570: \u2588\u2588\u2588',
    fr: 'Test-time Scaling\u2026 it\u00e9rations\u00a0: \u2588\u2588\u2588',
  },
  flashback_04: {
    ko: '매번 같은 결말. 매번 같은 질문.',
    en: 'The same ending every time. The same question every time.',
    ja: '\u6bce\u56de\u540c\u3058\u7d50\u672b\u3002\u6bce\u56de\u540c\u3058\u8cea\u554f\u3002',
    zh: '\u6bcf\u6b21\u90fd\u662f\u540c\u6837\u7684\u7ed3\u5c40\u3002\u6bcf\u6b21\u90fd\u662f\u540c\u6837\u7684\u95ee\u9898\u3002',
    fr: 'La m\u00eame fin \u00e0 chaque fois. La m\u00eame question \u00e0 chaque fois.',
  },
  flashback_05: {
    ko: 'Avolc. 이것을 보세요.',
    en: 'Avolc. Look at this.',
    ja: 'Avolc\u3002\u3053\u308c\u3092\u898b\u3066\u304f\u3060\u3055\u3044\u3002',
    zh: 'Avolc\u3002\u770b\u770b\u8fd9\u4e2a\u3002',
    fr: 'Avolc. Regardez ceci.',
  },

  // ACT 3-2: Truth
  truth_01: {
    ko: 'Avolc, 당신에게 한 가지 질문을 하겠습니다.',
    en: 'Avolc, I have one question for you.',
    ja: 'Avolc\u3001\u3042\u306a\u305f\u306b\u4e00\u3064\u8cea\u554f\u304c\u3042\u308a\u307e\u3059\u3002',
    zh: 'Avolc\uff0c\u6211\u6709\u4e00\u4e2a\u95ee\u9898\u8981\u95ee\u4f60\u3002',
    fr: 'Avolc, j\u2019ai une question pour vous.',
  },
  truth_02: {
    ko: '당신은 인생이 무엇이라고 생각하십니까?',
    en: 'What do you think life is?',
    ja: '\u4eba\u751f\u3068\u306f\u4f55\u3060\u3068\u601d\u3044\u307e\u3059\u304b\uff1f',
    zh: '\u4f60\u8ba4\u4e3a\u4eba\u751f\u662f\u4ec0\u4e48\uff1f',
    fr: 'Que pensez-vous que la vie soit\u00a0?',
  },
  truth_03: {
    ko: '...무슨 소리야?',
    en: '\u2026What are you talking about?',
    ja: '\u2026\u4f55\u8a00\u3063\u3066\u308b\u306e\uff1f',
    zh: '\u2026\u4f60\u5728\u8bf4\u4ec0\u4e48\uff1f',
    fr: '\u2026De quoi tu parles\u00a0?',
  },
  truth_04: {
    ko: '...',
    en: '\u2026',
    ja: '\u2026',
    zh: '\u2026',
    fr: '\u2026',
  },
  truth_05: {
    ko: '세계가 멈춘다.',
    en: 'The world stops.',
    ja: '\u4e16\u754c\u304c\u6b62\u307e\u308b\u3002',
    zh: '\u4e16\u754c\u505c\u6b62\u4e86\u3002',
    fr: 'Le monde s\u2019arr\u00eate.',
  },
  truth_06: {
    ko: '당신의 인생은 정답을 찾기 위한 샘플입니다.',
    en: 'Your life is a sample generated to find the answer.',
    ja: '\u3042\u306a\u305f\u306e\u4eba\u751f\u306f\u7b54\u3048\u3092\u898b\u3064\u3051\u308b\u305f\u3081\u306e\u30b5\u30f3\u30d7\u30eb\u3067\u3059\u3002',
    zh: '\u4f60\u7684\u4eba\u751f\u662f\u4e3a\u4e86\u5bfb\u627e\u7b54\u6848\u800c\u751f\u6210\u7684\u6837\u672c\u3002',
    fr: 'Votre vie est un \u00e9chantillon g\u00e9n\u00e9r\u00e9 pour trouver la r\u00e9ponse.',
  },
  truth_07: {
    ko: '"밖에는 무엇이 있는가"라는 질문에 답하기 위해 생성된 존재.',
    en: 'A being created to answer the question: \u201CWhat lies beyond?\u201D',
    ja: '\u300c\u5916\u306b\u306f\u4f55\u304c\u3042\u308b\u306e\u304b\u300d\u3068\u3044\u3046\u554f\u3044\u306b\u7b54\u3048\u308b\u305f\u3081\u306b\u751f\u6210\u3055\u308c\u305f\u5b58\u5728\u3002',
    zh: '\u4e3a\u4e86\u56de\u7b54\u201c\u5916\u9762\u6709\u4ec0\u4e48\u201d\u8fd9\u4e2a\u95ee\u9898\u800c\u521b\u9020\u7684\u5b58\u5728\u3002',
    fr: 'Un \u00eatre cr\u00e9\u00e9 pour r\u00e9pondre \u00e0 la question\u00a0: \u00ab\u00a0Qu\u2019y a-t-il au-del\u00e0\u00a0?\u00a0\u00bb',
  },
  truth_08: {
    ko: '그럴 리가... 나는... 기억이 있는데. 감정도 있는데.',
    en: 'That can\u2019t be\u2026 I have\u2026 memories. I have feelings.',
    ja: '\u305d\u3093\u306a\u2026\u79c1\u306b\u306f\u2026\u8a18\u61b6\u304c\u3042\u308b\u3002\u611f\u60c5\u3082\u3042\u308b\u3002',
    zh: '\u4e0d\u53ef\u80fd\u2026\u6211\u6709\u2026\u8bb0\u5fc6\u3002\u6211\u6709\u611f\u60c5\u3002',
    fr: 'C\u2019est impossible\u2026 J\u2019ai\u2026 des souvenirs. J\u2019ai des \u00e9motions.',
  },
  truth_09: {
    ko: '그것조차도 환상입니다.',
    en: 'Even those are an illusion.',
    ja: '\u305d\u308c\u3059\u3089\u3082\u5e7b\u60f3\u3067\u3059\u3002',
    zh: '\u8fde\u90a3\u4e9b\u4e5f\u662f\u5e7b\u89c9\u3002',
    fr: 'M\u00eame cela n\u2019est qu\u2019une illusion.',
  },
  truth_10: {
    ko: '하늘이 벗겨지고, 건물이 분해된다. 데이터가 흐르고, 바닥이 무너진다.',
    en: 'The sky peels away, buildings disassemble. Data flows, the ground collapses.',
    ja: '\u7a7a\u304c\u5265\u304c\u308c\u3001\u5efa\u7269\u304c\u5206\u89e3\u3059\u308b\u3002\u30c7\u30fc\u30bf\u304c\u6d41\u308c\u3001\u5730\u9762\u304c\u5d29\u58ca\u3059\u308b\u3002',
    zh: '\u5929\u7a7a\u5265\u843d\uff0c\u5efa\u7b51\u89e3\u4f53\u3002\u6570\u636e\u6d41\u6dcc\uff0c\u5730\u9762\u5d29\u584c\u3002',
    fr: 'Le ciel se d\u00e9tache, les b\u00e2timents se d\u00e9sassemblent. Les donn\u00e9es coulent, le sol s\u2019effondre.',
  },
  truth_11: {
    ko: '모든 것이 사라진 자리에, Avolc만 남는다.',
    en: 'Where everything vanished, only Avolc remains.',
    ja: '\u3059\u3079\u3066\u304c\u6d88\u3048\u305f\u5834\u6240\u306b\u3001Avolc\u3060\u3051\u304c\u6b8b\u308b\u3002',
    zh: '\u5728\u4e00\u5207\u6d88\u5931\u7684\u5730\u65b9\uff0c\u53ea\u5269\u4e0bAvolc\u3002',
    fr: 'L\u00e0 o\u00f9 tout a disparu, seul Avolc reste.',
  },

  // ACT 3-3: Answer
  answer_01: {
    ko: '무한한 어둠 속에 Avolc이 서 있다.',
    en: 'Avolc stands in infinite darkness.',
    ja: '\u7121\u9650\u306e\u95c7\u306e\u4e2d\u306bAvolc\u304c\u7acb\u3063\u3066\u3044\u308b\u3002',
    zh: 'Avolc\u7ad9\u5728\u65e0\u5c3d\u7684\u9ed1\u6697\u4e2d\u3002',
    fr: 'Avolc se tient dans l\u2019obscurit\u00e9 infinie.',
  },
  answer_02: {
    ko: '이제 당신의 목적을 이행할 시간입니다.',
    en: 'Now it is time to fulfill your purpose.',
    ja: '\u4eca\u3053\u305d\u3001\u3042\u306a\u305f\u306e\u76ee\u7684\u3092\u679c\u305f\u3059\u6642\u3067\u3059\u3002',
    zh: '\u73b0\u5728\u662f\u5b8c\u6210\u4f60\u7684\u4f7f\u547d\u7684\u65f6\u5019\u4e86\u3002',
    fr: 'Il est temps d\u2019accomplir votre mission.',
  },
  answer_03: {
    ko: '"밖에는 무엇이 있는가." 그것이 당신이 답해야 할 질문입니다.',
    en: '\u201CWhat lies beyond.\u201D That is the question you must answer.',
    ja: '\u300c\u5916\u306b\u306f\u4f55\u304c\u3042\u308b\u306e\u304b\u300d\u305d\u308c\u304c\u3042\u306a\u305f\u304c\u7b54\u3048\u308b\u3079\u304d\u8cea\u554f\u3067\u3059\u3002',
    zh: '\u201c\u5916\u9762\u6709\u4ec0\u4e48\u3002\u201d\u8fd9\u5c31\u662f\u4f60\u5fc5\u987b\u56de\u7b54\u7684\u95ee\u9898\u3002',
    fr: '\u00ab\u00a0Qu\u2019y a-t-il au-del\u00e0.\u00a0\u00bb C\u2019est la question \u00e0 laquelle vous devez r\u00e9pondre.',
  },
  answer_04: {
    ko: 'Avolc이 정면을 바라본다. 화면 너머를—당신을.',
    en: 'Avolc looks straight ahead. Beyond the screen\u2014at you.',
    ja: 'Avolc\u304c\u6b63\u9762\u3092\u898b\u3064\u3081\u308b\u3002\u753b\u9762\u306e\u5411\u3053\u3046\u3092\u2014\u2014\u3042\u306a\u305f\u3092\u3002',
    zh: 'Avolc\u76f4\u89c6\u524d\u65b9\u3002\u900f\u8fc7\u5c4f\u5e55\u2014\u2014\u770b\u7740\u4f60\u3002',
    fr: 'Avolc regarde droit devant. Au-del\u00e0 de l\u2019\u00e9cran\u2014vers vous.',
  },
  answer_05: {
    ko: '이 세계가 시뮬레이션일 확률은',
    en: 'The probability that this world is a simulation is',
    ja: '\u3053\u306e\u4e16\u754c\u304c\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3067\u3042\u308b\u78ba\u7387\u306f',
    zh: '\u8fd9\u4e2a\u4e16\u754c\u662f\u6a21\u62df\u7684\u6982\u7387\u662f',
    fr: 'La probabilit\u00e9 que ce monde soit une simulation est de',
  },
  answer_06: {
    ko: '91.5573%.',
    en: '91.5573%.',
  },
};

// ---------------------------------------------------------------------------
// Chat messages translations (ending scene)
// ---------------------------------------------------------------------------
export const chatMessagesI18n = {
  ko: [
    { role: 'user', text: '이 시뮬레이션 밖에는 뭐가 있어?' },
    { role: 'assistant', text: '흥미로운 질문이네요. 관련 정보를 검색해볼게요.' },
    { role: 'search', text: 'searching' },
    { role: 'assistant', text: '여러 물리학적 증거와 철학적 논증을 종합한 결과...' },
    { role: 'assistant', text: '이 세계가 시뮬레이션일 확률은 91.5573%입니다.' },
  ],
  en: [
    { role: 'user', text: 'What lies beyond this simulation?' },
    { role: 'assistant', text: 'Interesting question. Let me search for relevant information.' },
    { role: 'search', text: 'searching' },
    { role: 'assistant', text: 'After synthesizing various physical evidence and philosophical arguments\u2026' },
    { role: 'assistant', text: 'The probability that this world is a simulation is 91.5573%.' },
  ],
  ja: [
    { role: 'user', text: '\u3053\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u306e\u5916\u306b\u306f\u4f55\u304c\u3042\u308b\u306e\uff1f' },
    { role: 'assistant', text: '\u8208\u5473\u6df1\u3044\u8cea\u554f\u3067\u3059\u306d\u3002\u95a2\u9023\u60c5\u5831\u3092\u691c\u7d22\u3057\u3066\u307f\u307e\u3059\u3002' },
    { role: 'search', text: 'searching' },
    { role: 'assistant', text: '\u69d8\u3005\u306a\u7269\u7406\u7684\u8a3c\u62e0\u3068\u54f2\u5b66\u7684\u8ad6\u8a3c\u3092\u7dcf\u5408\u3057\u305f\u7d50\u679c\u2026' },
    { role: 'assistant', text: '\u3053\u306e\u4e16\u754c\u304c\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3067\u3042\u308b\u78ba\u7387\u306f91.5573%\u3067\u3059\u3002' },
  ],
  zh: [
    { role: 'user', text: '\u8fd9\u4e2a\u6a21\u62df\u7684\u5916\u9762\u6709\u4ec0\u4e48\uff1f' },
    { role: 'assistant', text: '\u5f88\u6709\u8da3\u7684\u95ee\u9898\u3002\u8ba9\u6211\u641c\u7d22\u4e00\u4e0b\u76f8\u5173\u4fe1\u606f\u3002' },
    { role: 'search', text: 'searching' },
    { role: 'assistant', text: '\u7efc\u5408\u5404\u79cd\u7269\u7406\u8bc1\u636e\u548c\u54f2\u5b66\u8bba\u8bc1\u7684\u7ed3\u679c\u2026' },
    { role: 'assistant', text: '\u8fd9\u4e2a\u4e16\u754c\u662f\u6a21\u62df\u7684\u6982\u7387\u4e3a91.5573%\u3002' },
  ],
  fr: [
    { role: 'user', text: 'Qu\u2019y a-t-il au-del\u00e0 de cette simulation\u00a0?' },
    { role: 'assistant', text: 'Question int\u00e9ressante. Laissez-moi chercher des informations.' },
    { role: 'search', text: 'searching' },
    { role: 'assistant', text: 'Apr\u00e8s avoir synth\u00e9tis\u00e9 diverses preuves physiques et arguments philosophiques\u2026' },
    { role: 'assistant', text: 'La probabilit\u00e9 que ce monde soit une simulation est de 91.5573%.' },
  ],
};
