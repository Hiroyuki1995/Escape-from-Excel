"use strict";

/**
 * ユーザーの作成
 * This can only be done by the logged in user.
 *
 * body User Created user object (optional)
 * returns User
 **/
exports.createUser = function (body) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      firstName: "太郎",
      lastName: "山田",
      password: "12345",
      userStatus: 1,
      phone: "12345",
      id: 10,
      email: "yamada.taro@email.com",
      username: "山田太郎",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * 指定されたユーザーを削除する
 * This can only be done by the logged in user.
 *
 * userId String The name that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteUser = function (userId) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * 指定されたユーザーの詳細情報を取得する
 *
 * userId String The name that needs to be fetched. Use user1 for testing.
 * returns User
 **/
exports.getUserByName = function (userId) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      firstName: "太郎",
      lastName: "山田",
      password: "12345",
      userStatus: 1,
      phone: "12345",
      id: 10,
      email: "yamada.taro@email.com",
      username: "山田太郎",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * ログインしているユーザーに紐づく利用先のユーザー情報を全て取得する
 *
 * returns UserList
 **/
exports.getUsersByCompany = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = [
      {
        firstName: "太郎",
        lastName: "山田",
        password: "12345",
        userStatus: 1,
        phone: "12345",
        id: 10,
        email: "yamada.taro@email.com",
        username: "山田太郎",
      },
      {
        firstName: "太郎",
        lastName: "山田",
        password: "12345",
        userStatus: 1,
        phone: "12345",
        id: 10,
        email: "yamada.taro@email.com",
        username: "山田太郎",
      },
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * 指定されたユーザーの詳細情報を更新する
 * This can only be done by the logged in user.
 *
 * body User Update an existent user in the store (optional)
 * userId String name that need to be deleted
 * no response value expected for this operation
 **/
exports.updateUser = function (body, userId) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};
