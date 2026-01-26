import { useHead } from '@unhead/vue';
import type { UseHeadInput } from '@unhead/vue';

interface DefaultHeadOptions {
  siteName?: string;
  description?: string;
  overrides?: UseHeadInput;
}

export function useDefaultHead(options: DefaultHeadOptions = {}) {
  const { siteName = '', description = '', overrides = {} } = options;

  return useHead({
    titleTemplate: '%s %separator %siteName',
    title: 'YAVB',
    templateParams: {
      separator: siteName.length ? '-' : '',
      siteName
    },
    meta: [{ name: 'description', content: description }],
    ...overrides
  });
}
