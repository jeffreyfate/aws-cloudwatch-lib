const test = require('tape')
const {enableAlarmActionsForAlarms} = require('../../src/mod/enable-alarm-actions-for-alarms')

test('enableAlarmActionsForAlarms responds from array of alarm names', async t => {
  const params = []
  const repackageArrayParam = (keyName, array) => ({[keyName]: array})
  const enableAlarmActions = async params => {
    t.deepEqual(params, {'AlarmNames':[]})
    return {}
  }

  const result = await enableAlarmActionsForAlarms(params, repackageArrayParam, enableAlarmActions)
  const expected = {}

  t.deepEqual(result, expected, 'correctly')

  t.end()
})