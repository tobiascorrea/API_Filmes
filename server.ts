import app from './src/infrastructure/adapters/express/config/app';

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
