export const getPersonas = async() => {
    const url = `https://freestyle.getsandbox.com/dummy/obtenerdatospersona`;
    

    const resp = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    });
    
    // const resp = await fetch(url);
    const { data } = await resp.json();
    const { tercero } = data;

    return tercero;
    // console.log(category)
    // console.log(data);
  }