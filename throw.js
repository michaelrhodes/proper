module.exports = onerror

function onerror (fn) {
  return function (err) {
    if (err) throw err
    var args = arguments
    var count = args.length - 1
    count === 1 ? fn(args[1]) :
    count === 2 ? fn(args[1], args[2]) :
    count === 3 ? fn(args[1], args[2], args[3]) :
    fn.apply(null, [].slice.call(args, 1))
  }
}
