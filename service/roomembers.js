var memberName[];

exports.join = function(id, name) {
  memberName[id] = name;
  console.log("MEMBER JOIN");
  console.log(memberName);
}

exports.getName = function(id) {
  return memberName[id];
}

exports.leave = function(id) {
  delete memberName[id];
  console.log("MEMBER LEAVE");
  console.log(memberName);
}
