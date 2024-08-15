const helloWorldMessage = { message: 'Hello World' };

const helloWorldController = async (req, res) => {
  res.status(200).send(helloWorldMessage);
};

module.exports = { helloWorldController };