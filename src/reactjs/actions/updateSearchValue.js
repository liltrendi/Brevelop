const updateSearchValue = (value) => {
  return {
    type: "KEYSTROKE",
    payload: value
  }
}

export default updateSearchValue
