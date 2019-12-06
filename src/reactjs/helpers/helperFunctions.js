import FemaleAvatar from "../img/female.svg"
import MaleAvatar from "../img/male.svg"

const getTodayDate = () => {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]
  let today = new Date()
  let time = today
    .toLocaleTimeString("en-GB", { hour12: false })
    .split(":")
    .slice(0, 2)
    .join(":")
  let month = months[today.getMonth()]
  let dd = String(today.getDate()).padStart(2, "0")
  let yyyy = today.getFullYear()
  return [`${time}`, `${dd} ${month} ${yyyy}`]
}

const parseDate = date => {
  let stripped = date.split(" ")
  let newDate = stripped.slice(0, 3).concat(stripped.slice(-1))
  return [`${newDate[0]},`].concat(newDate.slice(1)).join(" ")
}

const parseTime = time => {
  let stripped = time.split(" ")
  let newArray = stripped.slice(0, 4)
  return newArray[newArray.length - 1]
    .split(":")
    .slice(0, 2)
    .join(":")
}

const chooseAvatar = (min = 1, max = 2) => {
  let num = Math.floor(Math.random() * max) + min
  if (min === 0 && max === 10) {
    return MaleAvatar
  }
  if (min === 10 && max === 0) {
    return FemaleAvatar
  }
  if (num === 1) {
    return MaleAvatar
  } else {
    return FemaleAvatar
  }
}

export { parseDate, parseTime, getTodayDate, chooseAvatar }
