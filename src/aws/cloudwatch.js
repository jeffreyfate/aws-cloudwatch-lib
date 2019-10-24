const CloudWatch = require('aws-sdk/clients/cloudwatch')

/**
 * {
 *   AlarmNames: [
 *   ]
 * }
 */
exports.disableAlarmActions = async function(params) {
  const cloudwatch = new CloudWatch({apiVersion: '2015-12-01'})
  return await cloudwatch.disableAlarmActions(params).promise()
}