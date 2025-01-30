const app = require ("./app");
// const { Email } = require("./middlewares/notificationMiddleware");

const port = process.env.PORT || ''
app.listen(port, () => {
    // Email("francisricklartey@gmail.com", "Testing");
    // console.log('Database connected');
    console.log(`Server is running on port ${port}`);
});