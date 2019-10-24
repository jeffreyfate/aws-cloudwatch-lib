/**
 * Enable alarm actions for the given alarms
 * 
 * @param {Array} names - which alarm names to enable actions for
 * @param {Function} repackageArrayParam - creates the parameter object to query using
 * @param {Function} enableAlarmActions - tells AWS to enable the alarms
 * @returns response
 */
exports.enableAlarmActionsForAlarms = async function(names, repackageArrayParam, enableAlarmActions) {
  const params = repackageArrayParam('AlarmNames', names)
  return await enableAlarmActions(params)
}