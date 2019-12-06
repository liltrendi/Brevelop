import { getTodayDate, chooseAvatar } from "../helpers/helperFunctions"

const getDummyData = () => {
  let tweetOpts = {
      tweet1: {
        displayName: "Lady Gaga",
        userName: "ladyGagA",
        avatar: chooseAvatar(10, 0),
        text:
          "This is an example of a tweet, that represents a similar outlook once the results you searched for are fetched",
        time: getTodayDate()[0],
        date: getTodayDate()[1],
        retweets: 39,
        favorites: 7,
        replies: 13
      },
      tweet2: {
        displayName: "Aubrey Graham",
        userName: "champagnepapi",
        avatar: chooseAvatar(0, 10),
        text:
          "We are retrieving all the data you requested, hang on tight and the tweets will display here shortly",
        time: getTodayDate()[0],
        date: getTodayDate()[1],
        retweets: 2131,
        favorites: 647,
        replies: 593
      }
    },
    profileOpts = {}
  return {
    tweetOpts,
    profileOpts
  }
}

const dummyData = getDummyData()

export { dummyData }
