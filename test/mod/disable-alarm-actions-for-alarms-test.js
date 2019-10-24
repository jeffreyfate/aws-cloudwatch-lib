const test = require('tape')
const {disableAlarmActionsForAlarms} = require('../../src/mod/disable-alarm-actions-for-alarms')

test('disableAlarmActionsForAlarms responds from array of alarm names', async t => {
  const params = []
  const repackageArrayParam = (keyName, array) => ({[keyName]: array})
  const disableAlarmActions = async params => {
    t.deepEqual(params, {'AlarmNames':[]})
    return {}
  }

  const result = await disableAlarmActionsForAlarms(params, repackageArrayParam, disableAlarmActions)
  const expected = {}

  t.deepEqual(result, expected, 'correctly')

  t.end()
})