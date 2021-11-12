const obj = {
  value: 'abc',
  createFn: function() {
    return () => {
      console.log(this)
    }
  },
}
const fn = obj.createFn()
fn()

