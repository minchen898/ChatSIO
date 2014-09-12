var memberName = [];

exports.join = function(id, name) {
  memberName[id] = name;
}

exports.getName = function(id) {
  return memberName[id];
}

exports.leave = function(id) {
  delete memberName[id];
}
