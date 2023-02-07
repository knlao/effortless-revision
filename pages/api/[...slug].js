function CatchAll(req, res) {
    res.status(404).send(<h1>no such data</h1>)
}

export default CatchAll;