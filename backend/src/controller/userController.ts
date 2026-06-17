export const getProfile = async (req: any, res: any) => {
  res.json({
    user: req.user,
  });
};