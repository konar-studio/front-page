/**
 * mermaid.js | https://theme-next.js.org/docs/tag-plugins/mermaid
 */

'use strict';

const { escapeHTML } = require('hexo-util');

module.exports = function(args, content) {
  return `<pre class="mermaid" style="text-align: center;">
${args.join(' ')}
${escapeHTML(content)}
</pre>`;
};
