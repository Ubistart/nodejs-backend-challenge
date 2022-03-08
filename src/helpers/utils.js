const clearUserObject = (user) => {
  delete user.createdAt;
  delete user.updatedAt;
  delete user.deletedAt;
  delete user.password;

  return user;
};

module.exports = { clearUserObject };
