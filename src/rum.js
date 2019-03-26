
import { init as initApm } from '@elastic/apm-rum'
import { browserHistory } from 'react-router'
import { patching } from '@elastic/apm-rum-core'

function changeRoute() {
    var links = Array.from(document.getElementsByTagName('a')).map((a) => {
        return { href: a.getAttribute('href'), element: a }
    }).filter((a) => { return a.href.startsWith('/') })
    var i = Math.floor(Math.random() * links.length)
    try {
        browserHistory.push(links[i].href);
    } catch (e) {
        window.location.href = '/'
        console.log(e)
    }
}

window.changeRoute = changeRoute


var timeoutId
function setRouteChangeTimeout() {
    timeoutId = setTimeout(() => {
        changeRoute()
        setRouteChangeTimeout()
    }, 2000 + Math.floor(Math.random() * 10000));
}
window.activateLoadGeneration = function () {
    setRouteChangeTimeout()
}

window.deactivateLoadGeneration = function () {
    if (timeoutId) {
        clearTimeout(timeoutId)
    }
}


let serviceName = window.elasticApmJsBaseServiceName || process.env.ELASTIC_APM_JS_BASE_SERVICE_NAME
let serviceVersion = window.elasticApmJsBaseServiceVersion || process.env.ELASTIC_APM_JS_BASE_SERVICE_VERSION
let serverUrl = window.elasticApmJsBaseServerUrl || process.env.ELASTIC_APM_JS_BASE_SERVER_URL

let rumConfig = window.rumConfig || {}

if (!rumConfig.serviceName) {
    rumConfig.serviceName = serviceName
}
if (!rumConfig.serverUrl) {
    rumConfig.serverUrl = serverUrl
}
if (!rumConfig.serviceVersion) {
    rumConfig.serviceVersion = serviceVersion
}
rumConfig.logLevel = 'debug'

var apm = initApm(rumConfig)

var sub = patching.subscription
sub.subscribe(function (event, task) {
    var tr = apm.getCurrentTransaction()
    if (tr && event === 'schedule' && task.type === 'macroTask' && !task.id) {
        var id = tr.addTask()
        task.id = id
    }
    if (tr && event === 'invoke' && task.type === 'macroTask' && task.id) {
        tr.removeTask(task.id)
    }
})

const users = [
    { id: 1, username: 'arthurdent', email: 'arthur.dent@example.com' },
    { id: 2, username: 'fprefect', email: 'ford.prefect@example.com' },
    { id: 3, username: 'trillian', email: 'adastra@example.com' },
    { id: 4, username: 'zaphod', email: 'z@example.com' }
]

apm.setUserContext(
    users[Math.floor(Math.random() * users.length)]
)

apm.setCustomContext({
    userConfig: {
        showDashboard: true,
        featureFlags: ['double-trouble', '4423-hotfix']
    }
})

try {
    throw new Error('Test CaptureError')
} catch (e) {
    apm.captureError(e)
}