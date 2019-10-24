const {repackageArrayParam} = require('./lib/aws/request/repackage-array-param')
const {disableAlarmActions, enableAlarmActions} = require('./aws/cloudwatch')
const {disableAlarmActionsForAlarms} = require('./mod/disable-alarm-actions-for-alarms')
const {enableAlarmActionsForAlarms} = require('./mod/enable-alarm-actions-for-alarms')

/**
 * Disables alarm actions for the given alarms
 * 
 * @param {Array} names - the alarm names to disable alarm actions
 * @returns response
 */
exports.disableAlarmActionsForAlarms = async function(names) {
  return disableAlarmActionsForAlarms(names, repackageArrayParam, disableAlarmActions)
}

/**
 * Enables alarm actions for the given alarms
 * 
 * @param {Array} names - the alarm names to enable alarm actions
 * @returns response
 */
exports.enableAlarmActionsForAlarms = async function(names) {
  return enableAlarmActionsForAlarms(names, repackageArrayParam, enableAlarmActions)
}