module.exports = {
	title: 'nice-js-leetcode',
	description: 'nice-js-leetcode',
	base: '/nice-js-leetcode/',
	theme: 'reco',
	head: [
		['meta', {
			name: 'viewport',
			content: 'width=device-width,initial-scale=1,user-scalable=no'
		}]
	],
	plugins: [
		'@vuepress-reco/vuepress-plugin-loading-page',
		[
			'dynamic-title',
			{
				showIcon: '/favicon.ico',
				showText: '(/≧▽≦/)咦！又好了！',
				hideIcon: '/failure.ico',
				hideText: '(●—●)喔哟，崩溃啦！',
				recoverTime: 2000,
			},
		],
		[
			'posts-encrypt',
			{
				route: '/auth',
				passwd: '111',
				encryptInDev: true,
				expires: 1000  * 60
			}
		],
		[
			"@vuepress-reco/vuepress-plugin-kan-ban-niang",
			{
				theme: ["blackCat"],
				clean: true,
				height: 260,
				modelStyle: {
					width: '100px',
					position: "fixed",
					right: "0px",
					bottom: "0px",
					opacity: "0.9",
					zIndex: 99999,
					objectFit: 'cover',
				}
			}
		],
		['@vuepress-reco/vuepress-plugin-bulletin-popover', {
			width: '300px', // 默认 260px
			title: '公告',
			body: [{
					type: 'title',
					content: '欢迎私聊vx:xiaoda0423 🎉🎉🎉',
					style: 'text-aligin: center;'
				},
				{
					text: 'text',
					content: '开始时的兴趣和后来的责任是我不断更新动力。得到很多网友的称赞、祝福和贡献，真的非常开心(^▽^)。如果你觉得还不错，可以为本人贡献一杯奶茶。'
				}
				// {
				// 	type: 'image',
				// 	src: '../assets/20220112100413.jpg'
				// }
			],
			footer: [{
				type: 'button',
				text: '打赏',
				link: '/donate'
			}]
		}],
		['vuepress-plugin-code-copy', true]
	],
	locales: {
		'/': {
			lang: 'zh-CN'
		}
	},
	themeConfig: {
		repo: '',
		repoLabel: 'Github',
		editLinks: true,
		editLinkText: '编辑此页',
		lastUpdated: '上次更新',
		subSidebar: 'auto',
		nav: [{
				text: '首页',
				link: '/'
			},
			{
				text: '星星♥',
				link: 'https://github.com/nice-people-frontend-community/nice-js-leetcode'
			},
			{
				text: '其它',
				items: [{
					text: '博客',
					items: [{
							text: 'Github',
							link: 'https://github.com/nice-people-frontend-community/nice-js-leetcode'
						},
						{
							text: '博客',
							link: 'https://github.com/nice-people-frontend-community/nice-js-leetcode'
						},
					]
				}, ],
			}
		],
		sidebar: [{
				title: 'nice-js-leetcode',
				path: '/',
				collapsable: false, // 不折叠
				children: [{
					title: "必读",
					path: "/"
				}]
			},
			{
				title: "leetcode",
				path: '/handbook/1-two-sum',
				collapsable: false, // 不折叠
				children: [{
					title: "1-two-sum",
					path: "/handbook/1-two-sum"
				},{
					title: "密码",
					path: "/handbook/role"
				}],
			},
		]
	}
}
