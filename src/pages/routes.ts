import type { RouteRecordRaw } from 'vue-router'
import About from './about/About.vue'
import Docs from './docs/Docs.vue'
import PageNotFound from './errors/PageNotFound.vue'
import Home from './home/Home.vue'
import Play from './play/Play.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/play', component: Play },
  { path: '/about', component: About },
  { path: '/docs', component: Docs },
  { path: '/:path(.*)', component: PageNotFound },
]
