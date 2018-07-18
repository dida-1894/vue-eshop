<template>
  <div id="app">
    <header>
      {{this.$route.name}}
    </header>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <footer>
      <vue-footer></vue-footer>
    </footer>
  </div>
</template>

<script>
import VueFooter from "./components/VueFooter"
export default {
  name: 'App',
  components: {
    VueFooter
  },
  computed: {
  }
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
header{
  width: 100%;
  color: #298;
  font-weight: bold;
  padding: 20px 0px;
  text-align: center;
}
footer{
  width: 100%;
  position: fixed;
  bottom: 0;
}
html,body,#app{
  height: 100%;
}
.content{
  height: calc(100% - 102px);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
