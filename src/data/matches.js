"use strict";
exports.__esModule = true;
exports.mockMatches = void 0;
exports.mockMatches = [
    {
        id: 1,
        userId: 1,
        userName: "გიორგი გიორგაძე",
        userAvatar: "GG",
        userKnow: ["ინგლისური", "ვებ დიზაინი"],
        userWant: ["ფრანგული", "ფოტოგრაფია"],
        matchUserId: 2,
        matchUserName: "ნინო ნინოშვილი",
        matchUserAvatar: "ნნ",
        matchUserKnow: ["ფრანგული", "ფოტოგრაფია"],
        matchUserWant: ["ინგლისური", "ვებ დიზაინი"],
        matchPercentage: 95,
        status: "active"
    },
    {
        id: 2,
        userId: 1,
        userName: "გიორგი გიორგაძე",
        userAvatar: "GG",
        userKnow: ["ინგლისური"],
        userWant: ["პროგრამირება"],
        matchUserId: 3,
        matchUserName: "ლევან ლევანიძე",
        matchUserAvatar: "ლლ",
        matchUserKnow: ["პროგრამირება"],
        matchUserWant: ["ინგლისური"],
        matchPercentage: 87,
        status: "pending"
    },
    {
        id: 3,
        userId: 2,
        userName: "ნინო ნინოშვილი",
        userAvatar: "ნნ",
        userKnow: ["ფრანგული"],
        userWant: ["ინგლისური ლიტერატურა"],
        matchUserId: 1,
        matchUserName: "გიორგი გიორგაძე",
        matchUserAvatar: "GG",
        matchUserKnow: ["ინგლისური ლიტერატურა"],
        matchUserWant: ["ფრანგული"],
        matchPercentage: 82,
        status: "completed"
    }
];
