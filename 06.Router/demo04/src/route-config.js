import Home from './components/Home.vue'
import About from './components/About.vue'
import News from './components/News.vue'
import Message from './components/Message.vue'
import NewsDetail from './components/NewsDetail.vue'

export default {
	'home': {
		component: Home,
		subRoutes: {
			'news': {
				component: News,
				subRoutes: {
					'detail/:id': {
						name: 'detail',
						component: NewsDetail
					}
				}
			},
			'message': {
				component: Message
			}
		}
	},
	'about': {
		component: About
	}
}