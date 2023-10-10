/* eslint-disable object-curly-spacing */
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc Auth user/set token
// route POST /api/users/auth
// @access Public

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Login user' });
});
// @desc Reg user
// route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Register  user' });
});
// @desc Logout user
// route POST /api/users/logout
// @access Public

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Logged out' });
});
// @desc Get user profile
// route GET /api/users/profile
// @access Private

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'User profile' });
});
// @desc Update user profile
// route PUT /api/users/profile
// @access Private

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update profile' });
});

// eslint-disable-next-line max-len
export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile };
