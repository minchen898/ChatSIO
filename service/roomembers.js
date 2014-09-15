var memberName = [];
var list = [];

exports.join = function(id, name) {
  memberName[id] = name;
  list.push(name);
  list.sort();
}

exports.getName = function(id) {
  return memberName[id];
}

exports.leave = function(id) {
  list.splice(list.indexOf(memberName[id]), 1);
  delete memberName[id];
}

exports.memberList = function() {
  return list;
}
