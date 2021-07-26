document.addEventListener('click', async (event) => {
  
  if (event.target.id === 'signup') {
    event.preventDefault()
    const { pathname } = event.target
    const response = await fetch(pathname, { method: 'GET', headers: { 'Content-Type': 'application/json' } })
    const result = await response.text();
    const body = document.querySelector('body');
    body.innerHTML = result;
  }

  if (event.target.id === 'login') {
    event.preventDefault()
    const { pathname } = event.target
    const response = await fetch(pathname, { method: 'GET', headers: { 'Content-Type': 'application/json' } })
    const result = await response.text()
    const body = document.querySelector('body')
    body.innerHTML = result
  }

})
