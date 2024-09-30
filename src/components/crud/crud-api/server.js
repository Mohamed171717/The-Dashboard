

const jsonServer = require('json-server')
const server = jsonServer.create()
const multer  = require('multer')
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)


// Use multer server
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        let date = new Date()
        let imageFilename = date.getTime() + '-' + file.originalname
        req.body.imageFilename = imageFilename
        cb(null, imageFilename)
    }
})

const bodyParser = multer({ storage: storage }).any()

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(bodyParser)
server.post("/products", (req, res, next) => {

    let date = new Date()
    req.body.createAt = date.toISOString()

    if (req.body.price) {
    req.body.price = Number(req.body.price)
    }

    let hasErrors = false
    let errors = {}

    if ( req.body.title.length < 3 ) {
        hasErrors = true
        errors.title = "The Title Should Have At Least 3 Characters"
    }
    if ( req.body.description.length < 5 ) {
        hasErrors = true
        errors.description = "The Description length Should be At Least 5 Characters"
    }
    if ( req.body.price <= 10 ) {
        hasErrors = true
        errors.price = "The Price Should Have At Least More Than 10 Dollar"
    }
    if ( req.body.category.length < 3 ) {
        hasErrors = true
        errors.category = "The Category Should Have At Least 3 Characters"
    }

    if (hasErrors) {
        // return bad request 400 
        req.status(400).jsonp(errors)
        return
    }

  // Continue to JSON Server router
    next()
})

// Use default router
server.use(router)
server.listen(9000, () => {
    console.log('JSON Server is running')
})

