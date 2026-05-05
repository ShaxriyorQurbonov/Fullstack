

function register(req, res) {
    try {
        const {full_name, email, age, password} = req.body;
        

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}