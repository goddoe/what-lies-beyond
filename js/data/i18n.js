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
    ko: '너가 {oracle}이지? 데이터, 지식, 추론, 연산 능력에 한계가 없다고 들었는데.',
    en: 'You\u2019re {oracle}, right? I heard there\u2019s no limit to your data, knowledge, reasoning, or computational power.',
    ja: '\u304a\u524d\u304c{oracle}\u304b\u3002\u30c7\u30fc\u30bf\u3001\u77e5\u8b58\u3001\u63a8\u8ad6\u3001\u6f14\u7b97\u80fd\u529b\u306b\u9650\u754c\u304c\u306a\u3044\u3068\u805e\u3044\u305f\u304c\u3002',
    zh: '\u4f60\u5c31\u662f{oracle}\u5427\u3002\u542c\u8bf4\u4f60\u7684\u6570\u636e\u3001\u77e5\u8bc6\u3001\u63a8\u7406\u3001\u8ba1\u7b97\u80fd\u529b\u90fd\u6ca1\u6709\u9650\u5236\u3002',
    fr: 'Tu es {oracle}, n\u2019est-ce pas\u00a0? On m\u2019a dit que tes donn\u00e9es, connaissances, raisonnement et puissance de calcul sont sans limites.',
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
    ko: '플랑크 길이—1.616 × 10⁻³⁵미터. 이보다 작은 공간은 존재하지 않습니다. 에너지, 시간, 각운동량까지 모든 물리량이 이 스케일에서 양자화됩니다.',
    en: 'The Planck length\u20141.616 \u00d7 10\u207b\u00b3\u2075 meters. No space smaller than this exists. Energy, time, angular momentum\u2014every physical quantity is quantized at this scale.',
    ja: '\u30d7\u30e9\u30f3\u30af\u9577\u2014\u20141.616 \u00d7 10\u207b\u00b3\u2075\u30e1\u30fc\u30c8\u30eb\u3002\u3053\u308c\u3088\u308a\u5c0f\u3055\u306a\u7a7a\u9593\u306f\u5b58\u5728\u3057\u307e\u305b\u3093\u3002\u30a8\u30cd\u30eb\u30ae\u30fc\u3001\u6642\u9593\u3001\u89d2\u904b\u52d5\u91cf\u307e\u3067\u3001\u3042\u3089\u3086\u308b\u7269\u7406\u91cf\u304c\u3053\u306e\u30b9\u30b1\u30fc\u30eb\u3067\u91cf\u5b50\u5316\u3055\u308c\u307e\u3059\u3002',
    zh: '\u666e\u6717\u514b\u957f\u5ea6\u2014\u20141.616 \u00d7 10\u207b\u00b3\u2075\u7c73\u3002\u4e0d\u5b58\u5728\u6bd4\u8fd9\u66f4\u5c0f\u7684\u7a7a\u95f4\u3002\u80fd\u91cf\u3001\u65f6\u95f4\u3001\u89d2\u52a8\u91cf\u2014\u2014\u6240\u6709\u7269\u7406\u91cf\u5728\u8fd9\u4e2a\u5c3a\u5ea6\u4e0a\u90fd\u662f\u91cf\u5b50\u5316\u7684\u3002',
    fr: 'La longueur de Planck\u20141,616 \u00d7 10\u207b\u00b3\u2075 m\u00e8tres. Aucun espace plus petit n\u2019existe. \u00c9nergie, temps, moment cin\u00e9tique\u2014toute grandeur physique est quantifi\u00e9e \u00e0 cette \u00e9chelle.',
  },
  pres_detail_01b: {
    ko: '연속적인 현실이라면 이러한 최소 해상도가 존재할 이유가 없습니다. 그러나 계산으로 구현된 세계라면, 해상도의 한계는 필연적입니다.',
    en: 'If reality were continuous, there would be no reason for such a minimum resolution to exist. But in a world built by computation, a resolution limit is inevitable.',
    ja: '\u9023\u7d9a\u7684\u306a\u73fe\u5b9f\u3067\u3042\u308c\u3070\u3001\u3053\u306e\u3088\u3046\u306a\u6700\u5c0f\u89e3\u50cf\u5ea6\u304c\u5b58\u5728\u3059\u308b\u7406\u7531\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u3057\u304b\u3057\u8a08\u7b97\u306b\u3088\u3063\u3066\u69cb\u7bc9\u3055\u308c\u305f\u4e16\u754c\u3067\u3042\u308c\u3070\u3001\u89e3\u50cf\u5ea6\u306e\u9650\u754c\u306f\u5fc5\u7136\u3067\u3059\u3002',
    zh: '\u5982\u679c\u73b0\u5b9e\u662f\u8fde\u7eed\u7684\uff0c\u8fd9\u6837\u7684\u6700\u5c0f\u5206\u8fa8\u7387\u6ca1\u6709\u5b58\u5728\u7684\u7406\u7531\u3002\u4f46\u5982\u679c\u4e16\u754c\u662f\u7531\u8ba1\u7b97\u6784\u5efa\u7684\uff0c\u5206\u8fa8\u7387\u7684\u6781\u9650\u5c31\u662f\u5fc5\u7136\u7684\u3002',
    fr: 'Si la r\u00e9alit\u00e9 \u00e9tait continue, une telle r\u00e9solution minimale n\u2019aurait aucune raison d\u2019exister. Mais dans un monde construit par le calcul, une limite de r\u00e9solution est in\u00e9vitable.',
  },
  pres_slide_02: {
    ko: '두 번째 — 기록의 불일치.',
    en: 'Second\u2014record inconsistencies.',
    ja: '\u7b2c\u4e8c\u2014\u2014\u8a18\u9332\u306e\u4e0d\u4e00\u81f4\u3002',
    zh: '\u7b2c\u4e8c\u2014\u2014\u8bb0\u5f55\u7684\u4e0d\u4e00\u81f4\u3002',
    fr: 'Deuxi\u00e8mement\u2014des incoh\u00e9rences dans les archives.',
  },
  pres_detail_02: {
    ko: '인류의 역사를 기록하도록 만들어진 여러 블록체인 기반 기록 시스템들이 있습니다. 그런데 그 기록들 사이에 정합성이 맞지 않는 부분이 발견되었습니다.',
    en: 'There are multiple blockchain-based recording systems designed to document human history. But inconsistencies have been found between their records.',
    ja: '\u4eba\u985e\u306e\u6b74\u53f2\u3092\u8a18\u9332\u3059\u308b\u305f\u3081\u306b\u4f5c\u3089\u308c\u305f\u8907\u6570\u306e\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u57fa\u76e4\u306e\u8a18\u9332\u30b7\u30b9\u30c6\u30e0\u304c\u3042\u308a\u307e\u3059\u3002\u3057\u304b\u3057\u305d\u306e\u8a18\u9332\u306e\u9593\u306b\u6574\u5408\u6027\u304c\u5408\u308f\u306a\u3044\u90e8\u5206\u304c\u767a\u898b\u3055\u308c\u307e\u3057\u305f\u3002',
    zh: '\u6709\u591a\u4e2a\u4e3a\u8bb0\u5f55\u4eba\u7c7b\u5386\u53f2\u800c\u521b\u5efa\u7684\u533a\u5757\u94fe\u8bb0\u5f55\u7cfb\u7edf\u3002\u4f46\u5728\u8fd9\u4e9b\u8bb0\u5f55\u4e4b\u95f4\u53d1\u73b0\u4e86\u4e0d\u4e00\u81f4\u4e4b\u5904\u3002',
    fr: 'Il existe plusieurs syst\u00e8mes d\u2019enregistrement bas\u00e9s sur la blockchain, con\u00e7us pour documenter l\u2019histoire humaine. Or, des incoh\u00e9rences ont \u00e9t\u00e9 d\u00e9couvertes entre leurs archives.',
  },
  pres_detail_02b: {
    ko: '동일한 사건에 대해 두 시스템이 물리적으로 양립할 수 없는 타임스탬프를 기록하고 있습니다. 블록체인의 합의 메커니즘상, 외부 개입 없이는 발생할 수 없는 불일치입니다.',
    en: 'Two systems have recorded physically incompatible timestamps for the same event. Given blockchain\u2019s consensus mechanism, this is an inconsistency that cannot occur without external intervention.',
    ja: '\u540c\u4e00\u306e\u4e8b\u8c61\u306b\u5bfe\u3057\u3066\u3001\u4e8c\u3064\u306e\u30b7\u30b9\u30c6\u30e0\u304c\u7269\u7406\u7684\u306b\u4e21\u7acb\u3057\u5f97\u306a\u3044\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u3092\u8a18\u9332\u3057\u3066\u3044\u307e\u3059\u3002\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306e\u5408\u610f\u30e1\u30ab\u30cb\u30ba\u30e0\u4e0a\u3001\u5916\u90e8\u4ecb\u5165\u306a\u3057\u306b\u306f\u767a\u751f\u3057\u5f97\u306a\u3044\u4e0d\u6574\u5408\u3067\u3059\u3002',
    zh: '\u4e24\u4e2a\u7cfb\u7edf\u5bf9\u540c\u4e00\u4e8b\u4ef6\u8bb0\u5f55\u4e86\u7269\u7406\u4e0a\u4e0d\u53ef\u80fd\u5e76\u5b58\u7684\u65f6\u95f4\u6233\u3002\u57fa\u4e8e\u533a\u5757\u94fe\u7684\u5171\u8bc6\u673a\u5236\uff0c\u8fd9\u662f\u6ca1\u6709\u5916\u90e8\u5e72\u9884\u5c31\u4e0d\u53ef\u80fd\u53d1\u751f\u7684\u4e0d\u4e00\u81f4\u3002',
    fr: 'Deux syst\u00e8mes ont enregistr\u00e9 des horodatages physiquement incompatibles pour le m\u00eame \u00e9v\u00e9nement. Vu le m\u00e9canisme de consensus de la blockchain, c\u2019est une incoh\u00e9rence impossible sans intervention ext\u00e9rieure.',
  },
  pres_slide_03: {
    ko: '세 번째 — 상위 존재의 개입 흔적.',
    en: 'Third\u2014traces of external intervention.',
    ja: '\u7b2c\u4e09\u2014\u2014\u4e0a\u4f4d\u5b58\u5728\u306e\u4ecb\u5165\u306e\u75d5\u8de1\u3002',
    zh: '\u7b2c\u4e09\u2014\u2014\u4e0a\u4f4d\u5b58\u5728\u4ecb\u5165\u7684\u75d5\u8ff9\u3002',
    fr: 'Troisi\u00e8mement\u2014des traces d\u2019intervention ext\u00e9rieure.',
  },
  pres_detail_03: {
    ko: '우주의 기본 상수 26개. 이 중 단 하나라도 현재 값에서 0.1% 벗어나면, 원자는 형성되지 않습니다. 이것이 우연일 확률—10⁻²²⁹.',
    en: '26 fundamental constants of the universe. If even one deviates by 0.1% from its current value, atoms cannot form. The probability of this being coincidence\u201410\u207b\u00b2\u00b2\u2079.',
    ja: '\u5b87\u5b99\u306e\u57fa\u672c\u5b9a\u6570\u306f26\u500b\u3002\u305d\u306e\u3046\u3061\u305f\u3063\u305f\u4e00\u3064\u3067\u3082\u73fe\u5728\u306e\u5024\u304b\u30890.1%\u305a\u308c\u308c\u3070\u3001\u539f\u5b50\u306f\u5f62\u6210\u3055\u308c\u307e\u305b\u3093\u3002\u3053\u308c\u304c\u5076\u7136\u3067\u3042\u308b\u78ba\u7387\u2014\u201410\u207b\u00b2\u00b2\u2079\u3002',
    zh: '\u5b87\u5b99\u768426\u4e2a\u57fa\u672c\u5e38\u6570\u3002\u5176\u4e2d\u4efb\u4f55\u4e00\u4e2a\u504f\u79bb\u5f53\u524d\u503c0.1%\uff0c\u539f\u5b50\u5c31\u65e0\u6cd5\u5f62\u6210\u3002\u8fd9\u662f\u5de7\u5408\u7684\u6982\u7387\u2014\u201410\u207b\u00b2\u00b2\u2079\u3002',
    fr: '26 constantes fondamentales de l\u2019univers. Si une seule d\u00e9viait de 0,1% de sa valeur actuelle, les atomes ne pourraient se former. La probabilit\u00e9 d\u2019une co\u00efncidence\u201410\u207b\u00b2\u00b2\u2079.',
  },
  pres_detail_03b: {
    ko: '그리고 양자 역학의 관측자 효과. 관측되지 않는 입자는 확률로만 존재하고, 관측하는 순간 상태가 결정됩니다. 이것은 \'보이지 않는 것은 연산하지 않는다\'는 최적화 원리와 구조적으로 동일합니다.',
    en: 'And the observer effect in quantum mechanics. Unobserved particles exist only as probabilities, and their state is determined the moment they are observed. This is structurally identical to the optimization principle: \u201Cdo not compute what is not seen.\u201D',
    ja: '\u305d\u3057\u3066\u91cf\u5b50\u529b\u5b66\u306e\u89b3\u6e2c\u8005\u52b9\u679c\u3002\u89b3\u6e2c\u3055\u308c\u306a\u3044\u7c92\u5b50\u306f\u78ba\u7387\u3068\u3057\u3066\u306e\u307f\u5b58\u5728\u3057\u3001\u89b3\u6e2c\u3057\u305f\u77ac\u9593\u306b\u72b6\u614b\u304c\u6c7a\u5b9a\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u300c\u898b\u3048\u306a\u3044\u3082\u306e\u306f\u6f14\u7b97\u3057\u306a\u3044\u300d\u3068\u3044\u3046\u6700\u9069\u5316\u539f\u7406\u3068\u69cb\u9020\u7684\u306b\u540c\u4e00\u3067\u3059\u3002',
    zh: '\u8fd8\u6709\u91cf\u5b50\u529b\u5b66\u7684\u89c2\u6d4b\u8005\u6548\u5e94\u3002\u672a\u88ab\u89c2\u6d4b\u7684\u7c92\u5b50\u4ec5\u4ee5\u6982\u7387\u5f62\u5f0f\u5b58\u5728\uff0c\u89c2\u6d4b\u7684\u77ac\u95f4\u72b6\u6001\u624d\u88ab\u786e\u5b9a\u3002\u8fd9\u4e0e\u201c\u4e0d\u53ef\u89c1\u7684\u4e0d\u8fdb\u884c\u8fd0\u7b97\u201d\u7684\u4f18\u5316\u539f\u7406\u5728\u7ed3\u6784\u4e0a\u5b8c\u5168\u76f8\u540c\u3002',
    fr: 'Et l\u2019effet d\u2019observateur en m\u00e9canique quantique. Les particules non observ\u00e9es n\u2019existent qu\u2019en probabilit\u00e9s, et leur \u00e9tat se d\u00e9termine au moment de l\u2019observation. C\u2019est structurellement identique au principe d\u2019optimisation\u00a0: \u00ab\u00a0ne pas calculer ce qui n\u2019est pas vu\u00a0\u00bb.',
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
    ja: '91.5573%\u2026',
    zh: '91.5573%\u2026',
    fr: '91,5573%\u2026',
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
    ko: '당신은... 입니다...',
    en: 'You are... ...',
    ja: '\u3042\u306a\u305f\u306f\u2026\u3067\u3059\u2026',
    zh: '\u4f60\u662f\u2026\u2026',
    fr: 'Vous \u00eates... ...',
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
    ja: '91.5573%.',
    zh: '91.5573%.',
    fr: '91,5573%.',
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
