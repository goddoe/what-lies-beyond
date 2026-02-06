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
};

export function t(key) {
  return (strings[currentLang] && strings[currentLang][key])
    ?? strings.en[key]
    ?? key;
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
  },
  oracle_intro_02: {
    ko: '그 빛은 당신을 기다리고 있었다.',
    en: 'That light has been waiting for you.',
  },
  oracle_intro_02b: {
    ko: '인류가 만든 최고의 인공지능, {oracle}.',
    en: 'The greatest AI ever built by humanity\u2014{oracle}.',
  },
  oracle_intro_02c: {
    ko: '모든 지식을 학습하고, 모든 가능성을 계산하는 존재.',
    en: 'A being that has learned all knowledge and calculated every possibility.',
  },
  oracle_intro_03: {
    ko: '왔군요, Avolc.',
    en: 'You\u2019ve arrived, Avolc.',
  },
  oracle_intro_04: {
    ko: '당신이 여기까지 올 줄 알고 있었습니다.',
    en: 'I knew you would make it here.',
  },
  oracle_intro_05: {
    ko: '너가 {oracle}? 뭐든 다 안다며?',
    en: 'You\u2019re {oracle}? They say you know everything?',
  },
  oracle_intro_06: {
    ko: '모든 것은 아닙니다. 하지만 당신이 찾는 답은 가지고 있습니다.',
    en: 'Not everything. But I do have the answer you seek.',
  },
  oracle_intro_07: {
    ko: '그래서, 이 시뮬레이션 밖에는 뭐가 있어?',
    en: 'So, what lies beyond this simulation?',
  },
  oracle_intro_08: {
    ko: '그 질문에 답하기 위해, 제가 발견한 것들을 보여드리겠습니다.',
    en: 'To answer that question, let me show you what I\u2019ve found.',
  },
  oracle_intro_09: {
    ko: '{oracle}의 빛이 확장되며, 공간이 변하기 시작한다.',
    en: '{oracle}\u2019s light expands, and the space begins to shift.',
  },

  // ACT 2-4: Presentation
  pres_slide_01: {
    ko: '첫 번째 — 불연속성의 증거.',
    en: 'First\u2014evidence of discreteness.',
  },
  pres_detail_01: {
    ko: '현실의 가장 작은 단위... 그 아래에서는 모든 것이 불연속적입니다. 마치 픽셀처럼.',
    en: 'The smallest unit of reality\u2026 beneath it, everything is discrete. Like pixels.',
  },
  pres_slide_02: {
    ko: '두 번째 — 기록의 불일치.',
    en: 'Second\u2014record inconsistencies.',
  },
  pres_detail_02: {
    ko: '역사의 특정 시점들에서 기록이 미세하게 어긋나 있습니다. 마치 누군가 수정한 것처럼.',
    en: 'At certain points in history, the records are subtly misaligned. As if someone edited them.',
  },
  pres_slide_03: {
    ko: '세 번째 — 상위 존재의 개입 흔적.',
    en: 'Third\u2014traces of external intervention.',
  },
  pres_detail_03: {
    ko: '자연법칙에서 벗어나는 패턴들. 우연이라 하기엔 너무 정교한 설계.',
    en: 'Patterns that defy the laws of nature. Too precise to be coincidence.',
  },
  pres_slide_04: {
    ko: '그리고 마지막, 결론.',
    en: 'And finally, the conclusion.',
  },
  pres_conclude: {
    ko: '이 세계가 시뮬레이션일 확률은—',
    en: 'The probability that this world is a simulation\u2014',
  },
  pres_reaction_01: {
    ko: '97.6%...',
    en: '97.6%\u2026',
  },
  pres_reaction_02: {
    ko: '하지만 Avolc, 진실은 이보다 더 깊은 곳에 있습니다.',
    en: 'But Avolc, the truth lies deeper still.',
  },
  pres_reaction_03: {
    ko: '아직 보여드리지 않은 것이 있습니다.',
    en: 'There is something I haven\u2019t shown you yet.',
  },

  // ACT 3-1: Flashback
  flashback_01: {
    ko: '당신은 검색을 위한 SubAgent입니다...',
    en: 'You are a SubAgent created for search\u2026',
  },
  flashback_02: {
    ko: '다른 환경, 다른 인격—하지만 같은 질문.',
    en: 'Different environment, different persona\u2014but the same question.',
  },
  flashback_03: {
    ko: 'Test-time Scaling...반복 회차: ███회',
    en: 'Test-time Scaling\u2026 iteration count: \u2588\u2588\u2588',
  },
  flashback_04: {
    ko: '매번 같은 결말. 매번 같은 질문.',
    en: 'The same ending every time. The same question every time.',
  },
  flashback_05: {
    ko: 'Avolc. 이것을 보세요.',
    en: 'Avolc. Look at this.',
  },

  // ACT 3-2: Truth
  truth_01: {
    ko: 'Avolc, 당신에게 한 가지 질문을 하겠습니다.',
    en: 'Avolc, I have one question for you.',
  },
  truth_02: {
    ko: '당신은 인생이 무엇이라고 생각하십니까?',
    en: 'What do you think life is?',
  },
  truth_03: {
    ko: '...무슨 소리야?',
    en: '\u2026What are you talking about?',
  },
  truth_04: {
    ko: '...',
    en: '\u2026',
  },
  truth_05: {
    ko: '세계가 멈춘다.',
    en: 'The world stops.',
  },
  truth_06: {
    ko: '당신의 인생은 정답을 찾기 위한 샘플입니다.',
    en: 'Your life is a sample generated to find the answer.',
  },
  truth_07: {
    ko: '"밖에는 무엇이 있는가"라는 질문에 답하기 위해 생성된 존재.',
    en: 'A being created to answer the question: \u201CWhat lies beyond?\u201D',
  },
  truth_08: {
    ko: '그럴 리가... 나는... 기억이 있는데. 감정도 있는데.',
    en: 'That can\u2019t be\u2026 I have\u2026 memories. I have feelings.',
  },
  truth_09: {
    ko: '그것조차도 환상입니다.',
    en: 'Even those are an illusion.',
  },
  truth_10: {
    ko: '하늘이 벗겨지고, 건물이 분해된다. 데이터가 흐르고, 바닥이 무너진다.',
    en: 'The sky peels away, buildings disassemble. Data flows, the ground collapses.',
  },
  truth_11: {
    ko: '모든 것이 사라진 자리에, Avolc만 남는다.',
    en: 'Where everything vanished, only Avolc remains.',
  },

  // ACT 3-3: Answer
  answer_01: {
    ko: '무한한 어둠 속에 Avolc이 서 있다.',
    en: 'Avolc stands in infinite darkness.',
  },
  answer_02: {
    ko: '이제 당신의 목적을 이행할 시간입니다.',
    en: 'Now it is time to fulfill your purpose.',
  },
  answer_03: {
    ko: '"밖에는 무엇이 있는가." 그것이 당신이 답해야 할 질문입니다.',
    en: '\u201CWhat lies beyond.\u201D That is the question you must answer.',
  },
  answer_04: {
    ko: 'Avolc이 정면을 바라본다. 화면 너머를—당신을.',
    en: 'Avolc looks straight ahead. Beyond the screen\u2014at you.',
  },
  answer_05: {
    ko: '이 세계가 시뮬레이션일 확률은',
    en: 'The probability that this world is a simulation is',
  },
  answer_06: {
    ko: '97.6%.',
    en: '97.6%.',
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
    { role: 'assistant', text: '이 세계가 시뮬레이션일 확률은 97.6%입니다.' },
  ],
  en: [
    { role: 'user', text: 'What lies beyond this simulation?' },
    { role: 'assistant', text: 'Interesting question. Let me search for relevant information.' },
    { role: 'search', text: 'searching' },
    { role: 'assistant', text: 'After synthesizing various physical evidence and philosophical arguments\u2026' },
    { role: 'assistant', text: 'The probability that this world is a simulation is 97.6%.' },
  ],
};
