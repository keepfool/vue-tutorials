import Home from './components/Home.vue'
import About from './components/About.vue'
import News from './components/News.vue'
import Message from './components/Message.vue'

export default {
	'home': {
		component: Home,
		subRoutes: {
			'news': {
				component: News
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