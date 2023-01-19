
import { init as initApm } from '@elastic/apm-rum'
import history from './history';


function changeRoute() {
    var links = Array.from(document.getElementsByTagName('a')).map((a) => {
        return { href: a.getAttribute('href'), element: a }
    }).filter((a) => { return a.href.startsWith('/') })
    var i = Math.floor(Math.random() * links.length)
    try {
        history.push(links[i].href);
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

function stringToList(value) {
    if (value !== "" && value !== undefined){
        return JSON.parse(value)
    }
    return []
}

let serviceName = process.env.ELASTIC_APM_JS_BASE_SERVICE_NAME || process.env.ELASTIC_APM_SERVICE_NAME || window.elasticApmJsBaseServiceName
let serviceVersion = process.env.ELASTIC_APM_JS_BASE_SERVICE_VERSION || process.env.ELASTIC_APM_SERVICE_VERSION || window.elasticApmJsBaseServiceVersion
let serverUrl = process.env.ELASTIC_APM_JS_BASE_SERVER_URL || process.env.ELASTIC_APM_SERVER_URL || window.elasticApmJsBaseServerUrl

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

rumConfig.active = process.env.ELASTIC_APM_ACTIVE === 'true' || true
rumConfig.instrument = process.env.ELASTIC_APM_INSTRUMENT === 'true' || true
rumConfig.disableInstrumentations = stringToList(process.env.ELASTIC_APM_DISABLE_INSTRUMENT) || []
rumConfig.environment = process.env.ELASTIC_APM_ENVIRONMENT || 'production'
rumConfig.logLevel = process.env.ELASTIC_APM_LOG_LEVEL || 'debug'
rumConfig.breakdownMetrics = process.env.ELASTIC_APM_BREAKDOWN_METRICS === 'true' || false
rumConfig.flushInterval = Number(process.env.ELASTIC_APM_FLUSH_INTERVAL) || 500
rumConfig.distributedTracing = process.env.ELASTIC_APM_DISTRIBUTED_TRACING === 'true' || true
rumConfig.distributedTracingOrigins = stringToList(process.env.ELASTIC_APM_DISTRIBUTED_TRACING_ORIGINS)

rumConfig.errorThrottleLimit = Number(process.env.ELASTIC_APM_ERROR_THROTTLE_LIMIT) || 20
rumConfig.errorThrottleInterval = Number(process.env.ELASTIC_APM_ERROR_THROTTLE_INTERVAL) || 30000
rumConfig.transactionSampleRate = Number(process.env.ELASTIC_APM_TRANSACTION_SAMPLE_RATE) || 1.0
rumConfig.centralConfig = process.env.ELASTIC_APM_CENTRAL_CONFIG === 'true' || false
rumConfig.ignoreTransactions = stringToList(process.env.ELASTIC_APM_TRANSACTION_IGNORE_URLS)
rumConfig.monitorLongtasks = process.env.ELASTIC_APM_MONITOR_LONGTASKS === 'true' || false

var apm = initApm(rumConfig)

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