module.exports = {
    login: (req, res, next) => {
        res.render("login");
    },

    signup: (req, res, next) => {
        res.render("signup");
    }
}