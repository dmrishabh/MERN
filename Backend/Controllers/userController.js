/* eslint-disable object-curly-spacing */
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js'
// @desc Auth user/set token
// route POST /api/users/auth
// @access Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    let name = user.firstName + " " + user.lastName
    res.status(201).json({
      _id: user._id,
      name: name,
      email: email
    })
  } else {
    res.status(401);
    throw new Error("Invalid Credentials");
  }

});
// @desc Reg user
// route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;

  const userExists = await User.findOne({ email: email })

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    phone,
    password
  })

  if (user) {
    generateToken(res, user._id);

    let name = user.firstName + " " + user.lastName
    res.status(201).json({
      message: "User created successfully",
      _id: user._id,
      name: name,
      email: email,
      phone: phone
    })
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }

  res.status(200).json({ message: 'Register  user' });
});
// @desc Logout user
// route POST /api/users/logout
// @access Public

const logoutUser = asyncHandler(async (req, res) => {
  try {
    res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0)
    })
    res.status(200).json({ message: 'User Logged out' });
  } catch (error) {
    res.status(500).json({ message: error })
  }
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
