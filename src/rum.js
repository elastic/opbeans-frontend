
import { init as initApm } from '@elastic/apm-rum'

console.log('Configuring RUM agent')

function stringToList(value) {
    if (value !== "" && value !== undefined){
        return JSON.parse(value)
    }
    return []
}

let serviceName = process.env.REACT_APP_ELASTIC_APM_JS_BASE_SERVICE_NAME || process.env.REACT_APP_ELASTIC_APM_SERVICE_NAME || window.elasticApmJsBaseServiceName
let serviceVersion = process.env.REACT_APP_ELASTIC_APM_JS_BASE_SERVICE_VERSION || process.env.REACT_APP_ELASTIC_APM_SERVICE_VERSION || window.elasticApmJsBaseServiceVersion
let serverUrl = process.env.REACT_APP_ELASTIC_APM_JS_BASE_SERVER_URL || process.env.REACT_APP_ELASTIC_APM_SERVER_URL || window.elasticApmJsBaseServerUrl

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

rumConfig.active = process.env.REACT_APP_ELASTIC_APM_ACTIVE === 'true' || true
rumConfig.breakdownMetrics = process.env.REACT_APP_ELASTIC_APM_BREAKDOWN_METRICS === 'true' || false
rumConfig.centralConfig = process.env.REACT_APP_ELASTIC_APM_CENTRAL_CONFIG === 'true' || false
rumConfig.disableInstrumentations = stringToList(process.env.REACT_APP_ELASTIC_APM_DISABLE_INSTRUMENT) || []
rumConfig.distributedTracing = process.env.REACT_APP_ELASTIC_APM_DISTRIBUTED_TRACING === 'true' || true
rumConfig.distributedTracingOrigins = stringToList(process.env.ELASTIC_APM_DISTRIBUTED_TRACING_ORIGINS)
rumConfig.environment = process.env.REACT_APP_ELASTIC_APM_ENVIRONMENT || 'production'
rumConfig.errorThrottleInterval = Number(process.env.REACT_APP_ELASTIC_APM_ERROR_THROTTLE_INTERVAL) || 30000
rumConfig.errorThrottleLimit = Number(process.env.REACT_APP_ELASTIC_APM_ERROR_THROTTLE_LIMIT) || 20
rumConfig.flushInterval = Number(process.env.REACT_APP_ELASTIC_APM_FLUSH_INTERVAL) || 500
rumConfig.ignoreTransactions = stringToList(process.env.ELASTIC_APM_TRANSACTION_IGNORE_URLS)
rumConfig.instrument = process.env.REACT_APP_ELASTIC_APM_INSTRUMENT === 'true' || true
rumConfig.logLevel = process.env.REACT_APP_ELASTIC_APM_LOG_LEVEL || 'debug'
rumConfig.monitorLongtasks = process.env.REACT_APP_ELASTIC_APM_MONITOR_LONGTASKS === 'true' || false
rumConfig.transactionSampleRate = Number(process.env.REACT_APP_ELASTIC_APM_TRANSACTION_SAMPLE_RATE) || 1.0

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

console.log('Configured RUM agent')