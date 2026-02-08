import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { scriptNodes } from '../js/data/script.js';
import { scriptText } from '../js/data/i18n.js';

const REQUIRED_LANGS = ['ko', 'en', 'ja', 'zh', 'fr'];
const BANNED_NAMES = ['Grok', 'Gemini', 'ChatGPT', 'Claude'];

// ---------------------------------------------------------------------------
// 1. Node chain integrity
// ---------------------------------------------------------------------------
describe('Node chain integrity', () => {
  for (const [key, node] of Object.entries(scriptNodes)) {
    if (node.next === null) continue;

    it(`${key}.next → "${node.next}" should be valid`, () => {
      const isScene = node.next.startsWith('__scene:');
      const isNode = node.next in scriptNodes;
      assert.ok(isScene || isNode,
        `"${node.next}" is neither a valid node ID nor a __scene:* reference`);
    });
  }
});

// ---------------------------------------------------------------------------
// 2. i18n completeness — every scriptText entry has all 5 languages
// ---------------------------------------------------------------------------
describe('i18n completeness', () => {
  for (const [key, translations] of Object.entries(scriptText)) {
    for (const lang of REQUIRED_LANGS) {
      it(`scriptText["${key}"] should have "${lang}"`, () => {
        assert.ok(lang in translations,
          `Missing "${lang}" translation for "${key}"`);
      });
    }
  }
});

// ---------------------------------------------------------------------------
// 3. i18n coverage — every non-chat scriptNode has a scriptText entry
// ---------------------------------------------------------------------------
describe('i18n coverage', () => {
  for (const [key, node] of Object.entries(scriptNodes)) {
    if (node.type === 'chat') continue;

    it(`scriptText should contain "${key}"`, () => {
      assert.ok(key in scriptText,
        `scriptText is missing entry for node "${key}"`);
    });
  }
});

// ---------------------------------------------------------------------------
// 4. Node structure — required fields present, id === key
// ---------------------------------------------------------------------------
describe('Node structure', () => {
  const REQUIRED_FIELDS = ['id', 'speaker', 'speakerName', 'text', 'type', 'next'];

  for (const [key, node] of Object.entries(scriptNodes)) {
    it(`"${key}" should have all required fields`, () => {
      for (const field of REQUIRED_FIELDS) {
        assert.ok(field in node,
          `Node "${key}" is missing required field "${field}"`);
      }
    });

    it(`"${key}".id should equal its key`, () => {
      assert.equal(node.id, key,
        `Node id "${node.id}" does not match key "${key}"`);
    });
  }
});

// ---------------------------------------------------------------------------
// 5. No hardcoded oracle name in text values
// ---------------------------------------------------------------------------
describe('No hardcoded oracle name', () => {
  for (const [key, node] of Object.entries(scriptNodes)) {
    it(`"${key}".text should not contain hardcoded AI names`, () => {
      for (const name of BANNED_NAMES) {
        assert.ok(!node.text.includes(name),
          `Node "${key}" text contains hardcoded name "${name}"`);
      }
    });
  }
});
