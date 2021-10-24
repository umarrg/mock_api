const express = require('express');
const cors = require('cors');
const VD = require("./videos").VIDEOS;
const { VIDEOS } = require('./videos');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/videos', (req, res) => {
    res.status(200).json({ status: 'success', payload: VD, message: 'All videos fetched successfully' });
});


app.get('/videos/:id', (req, res) => {
    const id = req.params.id;
    VIDEOS.find(video => {
        if (video.id == id) {
            res.status(200).json({ status: 'success', payload: video, message: 'Single video fetched successfully' });
        }

    })
})


app.listen(3000, () => {
    console.log('server listening on port 3000')
});

module.exports.app = app;