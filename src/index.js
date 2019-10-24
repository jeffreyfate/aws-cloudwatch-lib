const {repackageArrayParam} = require('./lib/aws/request/repackage-array-param')
const {disableAlarmActions} = require('./aws/cloudwatch')
const {disableAlarmActionsForAlarms} = require('./mod/disable-alarm-actions-for-alarms')

/**
 * Fetches the target group ARNs that are associated with the given target group names
 * 
 * @param {Array} names - the target group names to look for
 * @returns {Array} the found ARNs
 */
exports.getTargetGroupArnsByName = async function(names) {
  return disableAlarmActionsForAlarms(names, repackageArrayParam, disableAlarmActions)
}