const express = require("express")

const router = express.Router()

const imageURL = "https://www.google.com/imgres?q=mern%20image&imgurl=https%3A%2F%2Fmarkovate.com%2Fwp-content%2Fuploads%2F2022%2F08%2Ftop-MERN-Stack.webp&imgrefurl=https%3A%2F%2Fmarkovate.com%2Fblog%2Fmern-stack-development%2F&docid=WnGklot0EiRmtM&tbnid=u6G4RKvLEWK4TM&vet=12ahUKEwjRtfT6mMSHAxXuRmwGHS6iN8gQM3oECGoQAA..i&w=1280&h=960&hcb=2&ved=2ahUKEwjRtfT6mMSHAxXuRmwGHS6iN8gQM3oECGoQAA"

const fetchRandomImage = async () => {
    const response = await fetch(imageURL)
    // const data = await response.json()
    console.log(response.url)
    return response.url;
}

router.get("/random-image", (req, res) => {
    fetchRandomImage().then((imgUrl) => {
        res.status(200).json({
            success: true,
            message: "Random image API",
            imageUrl: imgUrl
        })
    })
})

module.exports = router