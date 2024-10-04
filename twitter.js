import express from "express";
import crypto from "crypto";
import fetch from "node-fetch";
import OAuth from "oauth-1.0a";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3000;

// Replace this URL with the API endpoint you want to call
const url =
    "URl of Sheet of tweet";

const oauth = OAuth({
    consumer: {
        key: "",
        secret: "",
    },
    signature_method: "HMAC-SHA1",
    hash_function: (baseString, key) =>
        crypto.createHmac("sha1", key).update(baseString).digest("base64"),
});

async function writeTweet() {
    console.log("enterd write tweet");
    const token = {
        key: "", // key for divyanshi
        secret: "",
    };

    const tweetUrl = "https://api.twitter.com/2/tweets";

    const headers = oauth.toHeader(
        oauth.authorize(
            {
                url: tweetUrl,
                method: "POST",
            },
            token
        )
    );

    try {
        // Fetch data from the API
        const response = await axios.get(url);
        console.log("Fetched Data:", response.data);
        const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
        const day = today.split("-")[2]; // Extract the day part
        const { emoji, content, hashtag } = response.data.data[day]; // Adjust as necessary

        let tweetText =
            `📌100 days 100 health tip make your life better Day ${day} \n` +
            emoji +
            " " +
            content +
            "\n \n" +
            "follow me to improve your life \n \n" +
            hashtag;
        // Post the tweet
        const tweetResponse = await fetch(tweetUrl, {
            method: "POST",
            headers: {
                Authorization: headers["Authorization"],
                "user-agent": "V2CreateTweetJS",
                "content-type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify({ text: "tweefxftText" }),
        });

        const tweetData = await tweetResponse.json();
        console.log("Tweet posted:", tweetData);
        return tweetData;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

function checkAndPostTweet() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    if (currentHour === 12 && currentMinute === 53) {
        console.log("Posting tweet at 8:20 AM");
        writeTweet().catch((err) => {
            console.error("Error:", err);
        });
    }
}

// Check every minute if it's time to post the tweet
setInterval(checkAndPostTweet, 60 * 1000);

app.get("/tweet", async (req, res) => {
    try {
        const tweetData = await writeTweet();
        res.json({ success: true, tweetData });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    checkAndPostTweet(); // Initial check in case the server starts at 8:20 AM
});