// PART 1

// const menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
//   ];

// 5 Replace the menuLinks array in script.js with this version that adds sub-menu data:
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// 1 Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector('main')

// 1.1 Set the background color of mainEl using the --main-bg CSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)'

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
//console.log(linkEl)

// PART 2

// 4 Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.querySelector('#sub-menu')

// 4.1 Set the height subMenuEl element to be 100%.
subMenuEl.style.height = '100%'

// 4.2 Set the background color of subMenuEl using the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

// 4.3 Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around')

// 4.4 Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute'

// 4.5 Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = 0

// 5.1 Select and cache all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
// Declare a global showing SubMenu variable and initialize it to false;
const topMenuLinks = document.querySelectorAll('a');
let showingSubMenu = false;

// 5.2 Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', function(e){
  // console.dir(e.target)
  // The first line of code of the event listener function should call the event object’s preventDefault() method.
  e.preventDefault();
  // The second line of code function should immediately return if the element clicked was not an <a> element.
  if (e.target.tagName !== 'A'){
    return;
  }else{
    console.log(e.target.innerText.toLowerCase())
  }
  // console.log the content of the <a> to verify the handler is working.
  // console.log(topMenuEl)

// 5.3 This feature “deselects” the menu item if it’s clicked when it’s currently active,
// resulting in the sub-menu sliding up as well.
  // Next in the event listener, if the clicked <a> link has a class of active:
    if (e.target.className === 'active'){
    // Remove the active class from the clicked <a> element.
    e.target.classList.remove('active');
    // Set the showingSubMenu to false.
    showingSubMenu = false;
    // Set the CSS top property of subMenuEl to 0.
    subMenuEl.style.top = 0;
    // return; from the event listener function.
    return;
  }

// 5.4 At this point, a new menu item has been clicked and it’s time to “reset” any currently
//  active menu item…
  // Add code to the bottom of the the event listener that iterates over each <a> element in
  // topMenuLinks and removes the class name of active, regardless of whether the <a> element has a
  // class of active or not.
  topMenuLinks.forEach(e => {
    e.classList.remove('active')
  })

// 5.5 Next, the event listener should add a class name of active to the <a> element that was clicked.
  e.target.classList.add('active')
  //console.log(e)

// 5.6 Next, add code in the event listener that sets showingSubMenu to true if the clicked <a>
// element’s “link” object within menuLinks has a subLinks property (all do, except for the “link”
// object for ABOUT), otherwise, set it to false.
  let links = e.target.text
  const containSubs = menuLinks.find(link=>{
    if (link.text == links){
      return link;
    // {
    //   showingSubMenu = true}
    // } else {
    //   return showingSubMenu = false
    // }
    // console.dir(link.text)
    // console.log(links)
    }
  })
  console.log(containSubs)
  if (containSubs.subLinks){
    showingSubMenu = true
  } else {
    showingSubMenu = false
  }
  console.log(showingSubMenu)

  // const containSubs = (e => {(e === 'subLinks')
    
  // links.some
  //   if (menuLinks.links === 'subLinks'){
  //     showingSubMenu = true;
  //   } else {
  //     showingSubMenu = false;
  //   }
  //   console.log(links)
})
