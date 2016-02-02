export function setInitialState() {
  return {
    type: 'SET_INITIAL_STATE'
  }
}

export function submit() {
  return {
    type: "SUBMIT",
    data: {
      query: ''
    }
  }
}