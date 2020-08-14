import test from 'tape'
import karma from '../src'

test('plugin-lib-karma: export', (t) => {
  t.equals(
    typeof karma,
    'function',
    'must be a function'
  )

  t.end()
})
