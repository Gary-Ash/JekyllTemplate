document.querySelector('#id').addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){
    document.querySelector('#searchBox').submit()
    return false
  }
})
