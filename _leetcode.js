
const axios = require('axios')
const yargs = require('yargs')

let argv = yargs.argv

// 创建axios实例service
const service = axios.create({
  baseURL: '',
  timeout: 2500,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // github 接口
    if (config['url'].includes('api.github.com')) {
      config.headers.Accept = 'application/vnd.github.v3+json'
      config.headers.Authorization = 'token ' + argv.GITHUB_TOKEN
    }
    return config
  },
  err => {
    console.log(err)
  }
)

// 响应拦截器
service.interceptors.response.use(
  data => {
    return data.data
  },
  err => {
    console.log(err)
  }
)
// leetcode接口
let body = {
  query:
    '\n    query questionOfToday {\n  todayRecord {\n    date\n    userStatus\n    question {\n      questionId\n      frontendQuestionId: questionFrontendId\n      difficulty\n      title\n      titleCn: translatedTitle\n      titleSlug\n      paidOnly: isPaidOnly\n      freqBar\n      isFavor\n      acRate\n      status\n      solutionNum\n      hasVideoSolution\n      topicTags {\n        name\n        nameTranslated: translatedName\n        id\n      }\n      extra {\n        topCompanyTags {\n          imgUrl\n          slug\n          numSubscribed\n        }\n      }\n    }\n    lastSubmission {\n      id\n    }\n  }\n}\n    ',
  variables: {},
}
let content_title = ''
let content_body = ''

Main()
async function Main() {
  try {
    await leetcode_fun()
    await github_fun()
  } catch {
    return Promise.reject('Some Error')
  }
}
//leetcode_data.question.questionId +
//'. ' +
function leetcode_fun() {
  return new Promise((resolve, reject) => {
    // leetcode请求数据
    service
      .post('https://leetcode-cn.com/graphql/', body)
      .then(function (response) {
        const leetcode_data = response.data.todayRecord[0]
        let labels_title = ''
        let labels_body = ''
        leetcode_data.question['topicTags'].forEach(element => {
          labels_title += '👋' + element.nameTranslated
          labels_body += '<code>' + element.nameTranslated + '</code> '
        })
        content_title =
          '[' +
          leetcode_data.date +
          ']' +
          leetcode_data.question.titleCn +
          labels_title
        content_body =
          '题目' + leetcode_data.question.titleCn
          '题目链接: https://leetcode-cn.com/problems/' +
          leetcode_data.question.titleSlug +
          '\n\n难度: <code>' +
          leetcode_data.question.difficulty +
          '</code>\n标签: ' +
          labels_body
        console.log(leetcode_data)
        resolve()
      })
  })
}

// github接口
function github_fun() {
  return new Promise((resolve, reject) => {
    // github请求数据
    service
      .post(
        'https://api.github.com/repos/nice-people-frontend-community/nice-js-leetcode/issues',
        {
          owner: 'nice-people-frontend-community',
          repo: 'nice-js-leetcode',
          assignees: ['nice-people-frontend-community'],
          title: 
          
          ,
          body: content_body,
          labels: ['LeetCode每日一题'],
        }
      )
      .then(data => {
        console.log(data)
        resolve()
      })
  })
}
