const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

// 1 Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector('main')

// 1.1 Set the background color of mainEl using the --main-bg CSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)';

// 1.2 Set the content of mainEl to <h1>SEI Rocks!</h1>.
const newHeaderEl = document.createElement('h1')
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'

// 1.3 Add a class of flex-ctr to mainEl.
mainEl.classList.add('flex-ctr')
//console.log(mainEl.outerHTML)


// 2 Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector('#top-menu')

// 2.1 Set the height topMenuEl element to be 100%.
topMenuEl.style.height = '100%'

// 2.2 Set the background color of topMenuEl using the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

// 2.3 Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around')
//console.log(topMenuEl)

// 3.1 Iterate over the entire menuLinks array and for each “link” object:
const linkEl = menuLinks.forEach(element => {
    // Create an <a> element
    const aEl = document.createElement('a');
    // On the new element, add an href attribute with its value set to the href property of the “link” object.
    aEl.setAttribute('href', element.href);
    // Set the new element’s content to the value of the text property of the “link” object.
    aEl.textContent = element.text;
    // Append the new element to the topMenuEl element.
    topMenuEl.appendChild(aEl)
})
    

console.log(linkEl)