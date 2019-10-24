/**
 * Disable alarm actions for the given alarms
 * 
 * @param {Array} names - which alarm names to disable actions for
 * @param {Function} repackageArrayParam - creates the parameter object to query using
 * @param {Function} disableAlarmActions - tells AWS to disable the alarms
 * @returns response
 */
exports.disableAlarmActionsForAlarms = async function(names, repackageArrayParam, disableAlarmActions) {
  const params = repackageArrayParam('AlarmNames', names)
  return await disableAlarmActions(params)
}