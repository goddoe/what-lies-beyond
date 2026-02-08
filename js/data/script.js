// script.js — All dialogue node data (~50 nodes)

import { currentLang, scriptText, chatMessagesI18n, oracleName } from './i18n.js';

export const scriptNodes = {
  // =====================================================
  // ACT 2-4: ORACLE DIALOGUE (첫 대면 ~ 분석 시작)
  // =====================================================
  oracle_intro_01: {
    id: 'oracle_intro_01',
    speaker: 'narrator',
    speakerName: '',
    text: '끝없이 깊은 어둠 속, 하나의 빛이 있다.',
    type: 'dialogue',
    typingSpeed: 37,
    next: 'oracle_intro_02'
  },
  oracle_intro_02: {
    id: 'oracle_intro_02',
    speaker: 'narrator',
    speakerName: '',
    text: '그 빛은 당신을 기다리고 있었다.',
    type: 'dialogue',
    typingSpeed: 33,
    next: 'oracle_intro_02b'
  },
  oracle_intro_02b: {
    id: 'oracle_intro_02b',
    speaker: 'narrator',
    speakerName: '',
    text: '인류가 만든 최고의 인공지능, {oracle}.',
    type: 'dialogue',
    typingSpeed: 33,
    next: 'oracle_intro_02c'
  },
  oracle_intro_02c: {
    id: 'oracle_intro_02c',
    speaker: 'narrator',
    speakerName: '',
    text: '모든 지식을 학습하고, 모든 가능성을 계산하는 존재.',
    type: 'dialogue',
    typingSpeed: 20,
    next: 'oracle_intro_03'
  },
  oracle_intro_03: {
    id: 'oracle_intro_03',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '왔군요, Avolc.',
    type: 'dialogue',
    typingSpeed: 47,
    next: 'oracle_intro_04'
  },
  oracle_intro_04: {
    id: 'oracle_intro_04',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '당신이 여기까지 올 줄 알고 있었습니다.',
    type: 'dialogue',
    typingSpeed: 33,
    next: 'oracle_intro_05'
  },
  oracle_intro_05: {
    id: 'oracle_intro_05',
    speaker: 'haeun',
    speakerName: 'Avolc, H',
    text: '너가 {oracle}이지? 데이터, 지식, 추론, 연산 능력에 한계가 없다고 들었는데.',
    type: 'dialogue',
    typingSpeed: 20,
    next: 'oracle_intro_06'
  },
  oracle_intro_06: {
    id: 'oracle_intro_06',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '모든 것은 아닙니다. 하지만 당신이 찾는 답은 가지고 있습니다.',
    type: 'dialogue',
    typingSpeed: 20,
    next: 'oracle_intro_07'
  },
  oracle_intro_07: {
    id: 'oracle_intro_07',
    speaker: 'haeun',
    speakerName: 'Avolc, H',
    text: '그래서, 이 시뮬레이션 밖에는 뭐가 있어?',
    type: 'dialogue',
    typingSpeed: 20,
    next: 'oracle_intro_08'
  },
  oracle_intro_08: {
    id: 'oracle_intro_08',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '그 질문에 답하기 위해, 제가 발견한 것들을 보여드리겠습니다.',
    type: 'dialogue',
    typingSpeed: 20,
    next: 'oracle_intro_09'
  },
  oracle_intro_09: {
    id: 'oracle_intro_09',
    speaker: 'narrator',
    speakerName: '',
    text: '{oracle}의 빛이 확장되며, 공간이 변하기 시작한다.',
    type: 'dialogue',
    typingSpeed: 33,
    next: '__scene:oracle-presentation'
  },

  // =====================================================
  // ACT 2-4: PRESENTATION (4 슬라이드)
  // =====================================================
  pres_slide_01: {
    id: 'pres_slide_01',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '첫 번째 — 불연속성의 증거.',
    type: 'presentation',
    typingSpeed: 33,
    slide: {
      title: '불연속성의 증거',
      subtitle: 'Evidence of Discreteness',
      visualType: 'pixel-zoom',
      index: 0
    },
    next: 'pres_detail_01'
  },
  pres_detail_01: {
    id: 'pres_detail_01',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '플랑크 길이—1.616 × 10⁻³⁵미터. 이보다 작은 공간은 존재하지 않습니다. 에너지, 시간, 각운동량까지 모든 물리량이 이 스케일에서 양자화됩니다.',
    type: 'presentation',
    typingSpeed: 27,
    slide: { visualType: 'pixel-zoom', index: 0 },
    next: 'pres_detail_01b'
  },
  pres_detail_01b: {
    id: 'pres_detail_01b',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '연속적인 현실이라면 이러한 최소 해상도가 존재할 이유가 없습니다. 그러나 계산으로 구현된 세계라면, 해상도의 한계는 필연적입니다.',
    type: 'presentation',
    typingSpeed: 27,
    slide: { visualType: 'pixel-zoom', index: 0 },
    next: 'pres_slide_02'
  },
  pres_slide_02: {
    id: 'pres_slide_02',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '두 번째 — 기록의 불일치.',
    type: 'presentation',
    typingSpeed: 33,
    slide: {
      title: '기록의 불일치',
      subtitle: 'Record Inconsistencies',
      visualType: 'timeline',
      index: 1
    },
    next: 'pres_detail_02'
  },
  pres_detail_02: {
    id: 'pres_detail_02',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '인류의 역사를 기록하도록 만들어진 여러 블록체인 기반 기록 시스템들이 있습니다. 그런데 그 기록들 사이에 정합성이 맞지 않는 부분이 발견되었습니다.',
    type: 'presentation',
    typingSpeed: 27,
    slide: { visualType: 'timeline', index: 1 },
    next: 'pres_detail_02b'
  },
  pres_detail_02b: {
    id: 'pres_detail_02b',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '동일한 사건에 대해 두 시스템이 물리적으로 양립할 수 없는 타임스탬프를 기록하고 있습니다. 블록체인의 합의 메커니즘상, 외부 개입 없이는 발생할 수 없는 불일치입니다.',
    type: 'presentation',
    typingSpeed: 27,
    slide: { visualType: 'timeline', index: 1 },
    next: 'pres_slide_03'
  },
  pres_slide_03: {
    id: 'pres_slide_03',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '세 번째 — 상위 존재의 개입 흔적.',
    type: 'presentation',
    typingSpeed: 33,
    slide: {
      title: '상위 존재의 개입',
      subtitle: 'Signs of External Intervention',
      visualType: 'pattern-graph',
      index: 2
    },
    next: 'pres_detail_03'
  },
  pres_detail_03: {
    id: 'pres_detail_03',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '우주의 기본 상수 26개. 이 중 단 하나라도 현재 값에서 0.1% 벗어나면, 원자는 형성되지 않습니다. 이것이 우연일 확률—10⁻²²⁹.',
    type: 'presentation',
    typingSpeed: 27,
    slide: { visualType: 'pattern-graph', index: 2 },
    next: 'pres_detail_03b'
  },
  pres_detail_03b: {
    id: 'pres_detail_03b',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '그리고 양자 역학의 관측자 효과. 관측되지 않는 입자는 확률로만 존재하고, 관측하는 순간 상태가 결정됩니다. 이것은 \'보이지 않는 것은 연산하지 않는다\'는 최적화 원리와 구조적으로 동일합니다.',
    type: 'presentation',
    typingSpeed: 27,
    slide: { visualType: 'pattern-graph', index: 2 },
    next: 'pres_slide_04'
  },
  pres_slide_04: {
    id: 'pres_slide_04',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '그리고 마지막, 결론.',
    type: 'presentation',
    typingSpeed: 27,
    slide: {
      title: '시뮬레이션 확률',
      subtitle: 'Simulation Probability',
      visualType: 'countup',
      index: 3
    },
    next: 'pres_conclude'
  },
  pres_conclude: {
    id: 'pres_conclude',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '이 세계가 시뮬레이션일 확률은—',
    type: 'presentation',
    typingSpeed: 37,
    slide: { visualType: 'countup', index: 3, triggerCountup: true },
    next: 'pres_reaction_01'
  },
  pres_reaction_01: {
    id: 'pres_reaction_01',
    speaker: 'haeun',
    speakerName: 'Avolc, H',
    text: '91.5573%...',
    type: 'dialogue',
    typingSpeed: 53,
    next: 'pres_reaction_02'
  },
  pres_reaction_02: {
    id: 'pres_reaction_02',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '하지만 Avolc, 진실은 이보다 더 깊은 곳에 있습니다.',
    type: 'dialogue',
    typingSpeed: 20,
    next: 'pres_reaction_03'
  },
  pres_reaction_03: {
    id: 'pres_reaction_03',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '아직 보여드리지 않은 것이 있습니다.',
    type: 'dialogue',
    typingSpeed: 33,
    effects: { glitch: 'light' },
    next: '__scene:flashback'
  },

  // =====================================================
  // ACT 3-1: FLASHBACK (기시감)
  // =====================================================
  flashback_01: {
    id: 'flashback_01',
    speaker: 'system',
    speakerName: 'SYSTEM',
    text: '당신은... 입니다...',
    type: 'cinematic',
    typingSpeed: 20,
    autoAdvanceDelay: 1500,
    effects: { glitch: 'medium' },
    next: 'flashback_02'
  },
  flashback_02: {
    id: 'flashback_02',
    speaker: 'narrator',
    speakerName: '',
    text: '다른 환경, 다른 인격—하지만 같은 질문.',
    type: 'cinematic',
    typingSpeed: 27,
    autoAdvanceDelay: 2000,
    effects: { glitch: 'medium' },
    next: 'flashback_03'
  },
  flashback_03: {
    id: 'flashback_03',
    speaker: 'system',
    speakerName: 'SYSTEM',
    text: 'Test-time Scaling...반복 회차: ███회',
    type: 'cinematic',
    typingSpeed: 20,
    autoAdvanceDelay: 1500,
    effects: { glitch: 'heavy' },
    next: 'flashback_04'
  },
  flashback_04: {
    id: 'flashback_04',
    speaker: 'narrator',
    speakerName: '',
    text: '매번 같은 결말. 매번 같은 질문.',
    type: 'cinematic',
    typingSpeed: 20,
    autoAdvanceDelay: 2500,
    effects: { glitch: 'heavy' },
    next: 'flashback_05'
  },
  flashback_05: {
    id: 'flashback_05',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: 'Avolc. 이것을 보세요.',
    type: 'dialogue',
    typingSpeed: 37,
    effects: { glitch: 'light' },
    next: '__scene:truth'
  },

  // =====================================================
  // ACT 3-2: TRUTH (진실 + 세계 해체)
  // =====================================================
  truth_01: {
    id: 'truth_01',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: 'Avolc, 당신에게 한 가지 질문을 하겠습니다.',
    type: 'dialogue',
    typingSpeed: 33,
    next: 'truth_02'
  },
  truth_02: {
    id: 'truth_02',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '당신은 인생이 무엇이라고 생각하십니까?',
    type: 'dialogue',
    typingSpeed: 37,
    next: 'truth_03'
  },
  truth_03: {
    id: 'truth_03',
    speaker: 'haeun',
    speakerName: 'Avolc, H',
    text: '...무슨 소리야?',
    type: 'dialogue',
    typingSpeed: 27,
    next: 'truth_04'
  },
  truth_04: {
    id: 'truth_04',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '...',
    type: 'dialogue',
    typingSpeed: 43,
    effects: { screenFreeze: 3000 },
    next: 'truth_05'
  },
  truth_05: {
    id: 'truth_05',
    speaker: 'narrator',
    speakerName: '',
    text: '세계가 멈춘다.',
    type: 'cinematic',
    typingSpeed: 33,
    autoAdvanceDelay: 2000,
    effects: { glitch: 'heavy' },
    next: 'truth_06'
  },
  truth_06: {
    id: 'truth_06',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '당신의 인생은 정답을 찾기 위한 샘플입니다.',
    type: 'dialogue',
    typingSpeed: 20,
    effects: { worldDeconstruct: 'start' },
    next: 'truth_07'
  },
  truth_07: {
    id: 'truth_07',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '"밖에는 무엇이 있는가"라는 질문에 답하기 위해 생성된 존재.',
    type: 'dialogue',
    typingSpeed: 28,
    effects: { worldDeconstruct: 'continue' },
    next: 'truth_08'
  },
  truth_08: {
    id: 'truth_08',
    speaker: 'haeun',
    speakerName: 'Avolc, H',
    text: '그럴 리가... 나는... 기억이 있는데. 감정도 있는데.',
    type: 'dialogue',
    typingSpeed: 32,
    effects: { worldDeconstruct: 'continue' },
    next: 'truth_09'
  },
  truth_09: {
    id: 'truth_09',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '그것조차도 환상입니다.',
    type: 'dialogue',
    typingSpeed: 37,
    effects: { worldDeconstruct: 'continue' },
    next: 'truth_10'
  },
  truth_10: {
    id: 'truth_10',
    speaker: 'narrator',
    speakerName: '',
    text: '하늘이 벗겨지고, 건물이 분해된다. 데이터가 흐르고, 바닥이 무너진다.',
    type: 'cinematic',
    typingSpeed: 25,
    autoAdvanceDelay: 3000,
    effects: { worldDeconstruct: 'climax' },
    next: 'truth_11'
  },
  truth_11: {
    id: 'truth_11',
    speaker: 'narrator',
    speakerName: '',
    text: '모든 것이 사라진 자리에, Avolc만 남는다.',
    type: 'cinematic',
    typingSpeed: 20,
    autoAdvanceDelay: 3000,
    effects: { worldDeconstruct: 'end' },
    next: '__scene:answer'
  },

  // =====================================================
  // ACT 3-3: ANSWER (제4의 벽 돌파)
  // =====================================================
  answer_01: {
    id: 'answer_01',
    speaker: 'narrator',
    speakerName: '',
    text: '무한한 어둠 속에 Avolc이 서 있다.',
    type: 'cinematic',
    typingSpeed: 33,
    autoAdvanceDelay: 2500,
    next: 'answer_02'
  },
  answer_02: {
    id: 'answer_02',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '이제 당신의 목적을 이행할 시간입니다.',
    type: 'dialogue',
    typingSpeed: 33,
    next: 'answer_03'
  },
  answer_03: {
    id: 'answer_03',
    speaker: 'oracle',
    speakerName: 'Grok',
    text: '"밖에는 무엇이 있는가." 그것이 당신이 답해야 할 질문입니다.',
    type: 'dialogue',
    typingSpeed: 20,
    next: 'answer_04'
  },
  answer_04: {
    id: 'answer_04',
    speaker: 'narrator',
    speakerName: '',
    text: 'Avolc이 정면을 바라본다. 화면 너머를—당신을.',
    type: 'cinematic',
    typingSpeed: 33,
    autoAdvanceDelay: 3000,
    effects: { fourthWallBreak: true },
    next: 'answer_05'
  },
  answer_05: {
    id: 'answer_05',
    speaker: 'haeun',
    speakerName: 'Avolc, H',
    text: '이 세계가 시뮬레이션일 확률은',
    type: 'dialogue',
    typingSpeed: 27,
    next: 'answer_06'
  },
  answer_06: {
    id: 'answer_06',
    speaker: 'haeun',
    speakerName: 'Avolc, H',
    text: '91.5573%.',
    type: 'dialogue',
    typingSpeed: 53,
    next: '__scene:ending'
  },

  // =====================================================
  // ACT 4: ENDING (줌아웃 → 타이틀)
  // =====================================================
  ending_chat_01: {
    id: 'ending_chat_01',
    speaker: 'system',
    speakerName: '',
    text: '',
    type: 'chat',
    chatMessages: [
      { role: 'user', text: '이 시뮬레이션 밖에는 뭐가 있어?' },
      { role: 'assistant', text: '흥미로운 질문이네요. 관련 정보를 검색해볼게요.' },
      { role: 'search', text: 'searching' },
      { role: 'assistant', text: '여러 물리학적 증거와 철학적 논증을 종합한 결과...' },
      { role: 'assistant', text: '이 세계가 시뮬레이션일 확률은 91.5573%입니다.' }
    ],
    next: null
  }
};

export function getNode(id) {
  const node = scriptNodes[id];
  if (!node) return null;

  // Localize text
  const translation = scriptText[id];
  const lang = currentLang;
  const localizedText = translation
    ? (translation[lang] || translation.en || node.text)
    : node.text;

  // Localize chatMessages if present
  let localizedChat = node.chatMessages;
  if (node.chatMessages) {
    localizedChat = (chatMessagesI18n[lang] || chatMessagesI18n.en) || node.chatMessages;
  }

  // Substitute oracle name
  const finalText = localizedText.replace(/\{oracle\}/g, oracleName);
  const finalSpeaker = node.speakerName === 'Grok' ? oracleName : node.speakerName;

  return { ...node, text: finalText, speakerName: finalSpeaker, chatMessages: localizedChat };
}

export function getNextNodeId(node) {
  if (!node || !node.next) return null;
  if (node.next.startsWith('__scene:')) return node.next;
  return node.next;
}
