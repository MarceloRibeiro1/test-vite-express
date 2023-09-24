const bookController = {
    getAll: async(req, res) => {
        try {
            res.json({msg: "OK", data: "Hello World!"})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },

}

module.exports = bookController