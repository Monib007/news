require('dotenv').config();

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

const API_KEY = process.env.API_KEY;

const fetchNews = (url, res) => {
    axios.get(url)
        .then(response => {
            if (response.data.totalResults > 0) {
                res.json({
                    status: 300,
                    success: true,
                    message: 'Successfully fetched the data',
                    data: response.data,
                });
            } else {
                res.json({
                    status: 200,
                    success: true,
                    message: 'No results to show',
                });
            }
        })
        .catch(err => {
            res.json({
                status: 500,
                success: false,
                message: 'Failed to fetch data from the API',
                error: err.message,
            });
        });
};

app.get('/all-news', (req, res) => {
    let pageSize = parseInt(req.query.pageSize) || 40;
    let page = parseInt(req.query.page) || 1;
    let url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=pizza&page=${page}&pageSize=${pageSize}
`;
 
    fetchNews(url, res);
});

app.options('/top-headlines', cors());
app.get('/top-headlines', (req, res) => {
    let pageSize = parseInt(req.query.pageSize) || 40;
    let page = parseInt(req.query.page) || 1;
    let country = req.query.country || "us"
    let category = req.query.category || '';

    let url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&country=${country}&category=${category}&page=${page}&pageSize=${pageSize}`;

    fetchNews(url, res);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
