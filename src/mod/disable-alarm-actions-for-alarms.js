/**
 * Query AWS for the target ARNs associated with the provided names
 * 
 * @param {Array} names - which alarm names to disable actions for
 * @param {Function} repackageArrayParam - creates the parameter object to query using
 * @param {Function} disableAlarmActions - queries AWS to describe target groups
 * @returns response
 */
exports.disableAlarmActionsForAlarms = async function(names, repackageArrayParam, disableAlarmActions) {
  const params = repackageArrayParam('AlarmNames', names)
  return await disableAlarmActions(params)
}