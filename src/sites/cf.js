// ==UserScript==
// @include        /http://d69\.in/\?p[mt]=.+/
// @include        /http://ghanaimages\.co/\?p[mt]=.+/
// @include        /http://imagehost\.thasnasty\.com/\?p[mt]=.+/
// @include        /http://imgurban\.info/\?p[mt]=.+/
// @include        /http://imgwiev\.tk/\?p[mt]=.+/
// @include        /http://www\.x45x\.info/\?p[mt]=.+/
// ==/UserScript==

$.register({
  rule: {
    host: /^imgwiev\.tk|www\.x45x\.info|imagehost\.thasnasty\.com|ghanaimages\.co|imgurban\.info|d69\.in$/,
    query: /\?p[mt]=(.+)/,
  },
  run: function (m) {
    $.redirect('/?di=' + m.query[1]);
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
