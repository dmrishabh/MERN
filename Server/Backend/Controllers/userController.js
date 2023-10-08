import asyncHandler from 'express-async-handler';
// @desc Auth user/set token
// route POST /api/users/auth
// @access Public

const authUser = asyncHandler( async (req, res) => {
  res.status(404);
  const error = new Error('Oops minti you got an error ...');
  throw error;
  res.status(200).json({minti: 'HI'});
});

export {authUser};
