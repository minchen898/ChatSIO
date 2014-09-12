function members() {
  var memberName[];

  function addMember(id, name) {
    memberName[id] = name;
  }

  function getMemberName(id) {
    return memberName[id];
  }

  function removeMember(id) {
    delete memberName[id];
  }
}
