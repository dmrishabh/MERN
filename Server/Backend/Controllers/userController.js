import asyncHandler from 'express-async-handler';
import userModel from '../models/userModel.js';

// @desc Auth user/set token
// route POST /api/users/auth
// @access Public

const authUser = asyncHandler( async (req, res) => {
  res.status(200).json({message: 'Autheciated user'});
});

// @desc register a user
// route POST /api/users
// @access Public
const registerUser = asyncHandler( async (req, res) => {
  res.status(200).json({message: 'Register user'});
});

// @desc Logout a user
// route POST /api/users/logout
// @access Public
const logoutUser = asyncHandler( async (req, res) => {
  res.status(200).json({message: 'Logout user'});
});

// @desc Get a user profile
// route GET /api/users/profile
// @access Private
const profileUser = asyncHandler( async (req, res) => {
  res.status(200).json({message: 'User profile'});
});

// @desc  Update user profile
// route PUT/api/users/profile
// @access Private
const updateUserprofile = asyncHandler( async (req, res) => {
  res.status(200).json({message: 'Update User profile'});
});

export {authUser, registerUser, logoutUser, profileUser, updateUserprofile};
