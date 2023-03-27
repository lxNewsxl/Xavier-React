(async function(){   class ARTICLE {
constructor(data){
this.title = "\u0027\u0027";
this.Author = null;
this.description = "\u0027\u0027";
this.Route = '';
this.ShouldRender = true;
this.item = "This is the item";
this.author = "\u0027\u0027";
this.Name = "Article";
this.Path = '';
this.dataset = null;
this.Xid = "45d31ac2-f269-4cd6-8737-e1c611097a20";
this.Controller = null;
this.state = {"Id":null,"Hash":null};
this.Scripts = ``;
this.BaseUrl = null;
this.ActionMethods = null;
this.Authorize = false;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
    console.log(body);
  // Add it to the InnerHTML property of the object
//  window[`5744d275-db0b-433a-8ad0-1211fd8cc993${elCount}`].InnerHTML = body;
//  window[`5744d275-db0b-433a-8ad0-1211fd8cc993${elCount}`].Render(window[`5744d275-db0b-433a-8ad0-1211fd8cc993${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`<div>
      <div class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
        <img src="https:\/\/images.unsplash.com\/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover">
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900\/40"><\/div>
          <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900\/10"><\/div>

          <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            <time datetime="2020-03-16" class="mr-8">Mar 16, 2020<\/time>
            <div class="-ml-4 flex items-center gap-x-4">
              <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white\/50">
                <circle cx="1" cy="1" r="1" \/>
              <\/svg>
              <div class="flex gap-x-2.5">
                <img src="https:\/\/images.unsplash.com\/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 flex-none rounded-full bg-white\/10">
             ${this.author} 
            <\/div>
            <\/div>
          <\/div>
          <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
            <a href="#">
              <span class="absolute inset-0"><\/span>
              ${this.description}
            <\/a>
          <\/h3>
        <\/div>
<\/div>
`);


    window.addEventListener('load', (event) => {
        console.log('Article fully loaded and parsed');
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',``);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

async continue()
{
    let Search = await setInterval(async ()=>{
        window[this.Xid].Render();
},50);
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new ARTICLE()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('load', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new ARTICLE(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
      element.addEventListener("change", () => {
        console.log(`${this.Name} Changed!`);
        console.log(this);
      });
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('article');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
  class LANDING {
constructor(data){
this.Route = '/';
this.ShouldRender = true;
this.Name = "Landing";
this.Path = '';
this.dataset = null;
this.Xid = "1aa9f242-6469-47f7-8b82-3fc47c3c05c2";
this.Controller = null;
this.state = {"Id":null,"Hash":null};
this.Scripts = ``;
this.BaseUrl = null;
this.ActionMethods = null;
this.Authorize = false;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
    console.log(body);
  // Add it to the InnerHTML property of the object
//  window[`f0a95527-6995-4d4a-8a68-64fb14698e99${elCount}`].InnerHTML = body;
//  window[`f0a95527-6995-4d4a-8a68-64fb14698e99${elCount}`].Render(window[`f0a95527-6995-4d4a-8a68-64fb14698e99${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`<div class="relative isolate overflow-hidden bg-white">
  <svg class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
    <defs>
      <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
        <path d="M.5 200V.5H200" fill="none" \/>
      <\/pattern>
    <\/defs>
    <rect width="100%" height="100%" stroke-width="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" \/>
  <\/svg>
  <div class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
      <img class="h-11" src="https:\/\/tailwindui.com\/img\/logos\/mark.svg?color=indigo&shade=600" alt="Your Company">
        <div class="mt-24 sm:mt-32 lg:mt-16">
          <a href="#" class="inline-flex space-x-6">
            <span class="rounded-full bg-indigo-600\/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600\/10">What's new<\/span>
            <span class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
              <span>Just shipped v1.0<\/span>
              <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" \/>
              <\/svg>
            <\/span>
          <\/a>
        <\/div>
        <h1 class="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Deploy to the cloud with confidence<\/h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.<\/p>
        <div class="mt-10 flex items-center gap-x-6">
          <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started<\/a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→<\/span>
          <\/a>
        <\/div>
      <\/div>
    <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
      <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
        <div class="-m-2 rounded-xl bg-gray-900\/5 p-2 ring-1 ring-inset ring-gray-900\/10 lg:-m-4 lg:rounded-2xl lg:p-4">
          <img src="https:\/\/tailwindui.com\/img\/component-images\/project-app-screenshot.png" alt="App screenshot" width="2432" height="1442" class="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900\/10">
        <\/div>
      <\/div>
    <\/div>
  <\/div>
<\/div>

<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog<\/h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.<\/p>
    <\/div>
    <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">

      <!-- More posts... -->
      <article title="Build once, run anywhere!" description="Let's make this easy on ourselves">
      <\/article>
      
    <\/div>
  <\/div>
<\/div>

`);


    window.addEventListener('load', (event) => {
        console.log('Landing fully loaded and parsed');
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',``);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

async continue()
{
    let Search = await setInterval(async ()=>{
        window[this.Xid].Render();
},50);
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new LANDING()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('load', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new LANDING(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
      element.addEventListener("change", () => {
        console.log(`${this.Name} Changed!`);
        console.log(this);
      });
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('landing');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
  class MAINNAV {
constructor(data){
this.Title = "This is the title";
this.ShouldRender = true;
this.Route = '';
this.JSON = "This is a description";
this.Products = '[{"Id":"a21579c4-25c7-4920-99f8-ac9a7c7c5344","Name":"Apple","Cost":"0.55"},{"Id":"245619c7-7066-43cd-a47d-6cb9247968ee","Name":"Orange","Cost":"0.55"},{"Id":"dfd92632-1df9-4dc6-a03d-bb860f1be07f","Name":"Banana","Cost":"0.55"},{"Id":"c0c6fa85-c0f7-4364-b95f-36c790b7b00c","Name":"Strawberry","Cost":"0.55"}]';
this.Name = "MainNav";
this.Path = '';
this.dataset = null;
this.Xid = "1ab21cd9-bf95-447b-9e4a-e024317b02e1";
this.Controller = null;
this.state = {"Id":null,"Hash":null};
this.Scripts = ` 
      console.log('This is working');
        function Toggle(){
        var menu = document.getElementById("Menu");
        if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
        }
        else{
         menu.classList.add("hidden");
        }
      }
      window.Toggle = () => Toggle();
 `;
this.BaseUrl = null;
this.ActionMethods = null;
this.Authorize = false;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
    console.log(body);
  // Add it to the InnerHTML property of the object
//  window[`fa5d3d79-0e1e-498b-9e08-5c6e7b401836${elCount}`].InnerHTML = body;
//  window[`fa5d3d79-0e1e-498b-9e08-5c6e7b401836${elCount}`].Render(window[`fa5d3d79-0e1e-498b-9e08-5c6e7b401836${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`
<div class="fixed top-0 w-full z-50 mx-0 overflow-hidden shadow-sm">



<div id="Products">
<\/div>
  <div class="isolate bg-white">
    <div class="px-6 pt-6 lg:px-8">
      <nav class="flex items-center justify-between" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="\/" class="-m-1.5 p-1.5">
          <div class="text-2xl ">Xavier | ${this.Title} <\/div>
        <\/a>
        <\/div>
        <div class="flex lg:hidden">
          <button type="button" onclick="Toggle()" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Open main menu<\/span>
            <!-- Heroicon name: outline\/bars-3 -->
            <svg class="h-6 w-6" xmlns="http:\/\/www.w3.org\/2000\/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" \/>
            <\/svg>
          <\/button>
        <\/div>
        <div class="hidden lg:flex lg:gap-x-12">


    <div>
      <a href='\/Counter' class='text-sm font-semibold leading-6 text-gray-900'>Counter<\/a>    
    <\/div>
  

    <div>
      <a href='\/Documentation' class='text-sm font-semibold leading-6 text-gray-900'>Documentation<\/a>    
    <\/div>
  

    <div>
      <a href='\/try it out' class='text-sm font-semibold leading-6 text-gray-900'>try it out<\/a>    
    <\/div>
  

        <\/div>
        <div class='hidden lg:flex lg:flex-1 lg:justify-end'>
          <a href="\/" class="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;<\/span>
          <\/a>
        <\/div>
      <\/nav>
      <!-- Mobile menu, show\/hide based on menu open state. -->
      <div role="dialog" aria-modal="true">
        <div focus="true" id="Menu" class="fixed hidden inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
          <div class="flex items-center justify-between">
            <a href="\/" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company<\/span>
              <img class="h-8" src="https:\/\/tailwindui.com\/img\/logos\/mark.svg?color=indigo&shade=600" alt=""\/>
          <\/a>
            <button type="button" onclick="Toggle()" class="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span class="sr-only">Close menu<\/span>
              <!-- Heroicon name: outline\/x-mark -->
              <svg class="h-6 w-6" xmlns="http:\/\/www.w3.org\/2000\/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" \/>
              <\/svg>
            <\/button>
          <\/div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500\/10">
              <div class="space-y-2 py-6">
          
              <\/div>
              <div class="py-6">
                <a href="\/" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400\/10">Log in<\/a>
              <\/div>
            <\/div>
          <\/div>
        <\/div>
      <\/div>
    <\/div>
  <\/div>
<\/div>
`);


    window.addEventListener('load', (event) => {
        console.log('MainNav fully loaded and parsed');
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',` 
      console.log('This is working');
        function Toggle(){
        var menu = document.getElementById("Menu");
        if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
        }
        else{
         menu.classList.add("hidden");
        }
      }
      window.Toggle = () => Toggle();
 `);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

async continue()
{
    let Search = await setInterval(async ()=>{
        window[this.Xid].Render();
},50);
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new MAINNAV()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('load', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new MAINNAV(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
      element.addEventListener("change", () => {
        console.log(`${this.Name} Changed!`);
        console.log(this);
      });
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('mainnav');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
  class TEST {
constructor(data){
this.Title = "This is only a test";
this.Description = "How will we know when we\u0027ve reached the stars?";
this.Route = '/';
this.ShouldRender = true;
this.item = "This is the item";
this.Name = "Test";
this.Path = '';
this.dataset = null;
this.Xid = "5910a575-480f-4ab1-842f-155a9f364fd0";
this.Controller = null;
this.state = {"Id":null,"Hash":null};
this.Scripts = ` 
  
  

 
   `;
this.BaseUrl = null;
this.ActionMethods = null;
this.Authorize = false;
this.Types = null;
this.Parameters = null;

this.ScriptRender = true;
this.Element = {};
this.InnerHTML = 'unset';
}
findLargestNodeDepth(node = document, currentDepth = 0) {
  if (!node.hasChildNodes()) {
    return currentDepth;
  } else {
    let maxDepth = currentDepth;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childDepth = this.findLargestNodeDepth(child, currentDepth + 1);
        maxDepth = Math.max(maxDepth, childDepth);
      }
    }
    return maxDepth;
  }
}
async replaceElements(target){
    const allTargets = document.getElementsByTagName(target);
    let attempts = 0;
    try{
    let elCount = 0;
    Array.from(allTargets).forEach(async (elem) => {
    if(elem.hasAttribute('xid')) return;
    this.Element = elem;
        elCount++;
        let attrs = this.evalAttrs();
        this.setAttrs(attrs, elCount);
        this.setPropertyFromAttribute(this.Element);
        let body = "";
  body = this.Element.innerHTML;
   while(this.Element.firstChild) this.Element.removeChild(this.Element.lastChild);
    console.log(body);
  // Add it to the InnerHTML property of the object
//  window[`ef83c72a-4acb-4acb-bfed-5deec1941e08${elCount}`].InnerHTML = body;
//  window[`ef83c72a-4acb-4acb-bfed-5deec1941e08${elCount}`].Render(window[`ef83c72a-4acb-4acb-bfed-5deec1941e08${elCount}`]);
        
        this.InnerHTML = body;
        this.Element.insertAdjacentHTML('afterbegin',`
<div>
  <div>Xavier | ${this.Title}<\/div>
  
  <ul role='list' class='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

    
      <div>
        <li>
          <article title='new item' description='item name'>
            
          <\/article>
       <\/li>
      <\/div>
      

      <div>
        <li>
          <article title='new item' description='item height'>
            
          <\/article>
       <\/li>
      <\/div>
      

      <div>
        <li>
          <article title='new item' description='item width'>
            
          <\/article>
       <\/li>
      <\/div>
      

    
    
    <div class='text-2xl bg-gray-700 text-white'>${this.item}<\/div>


  <\/ul>

  <div>
    
  <\/div>
  
<\/div>
`);


    window.addEventListener('load', (event) => {
        console.log('Test fully loaded and parsed');
            this.renderXidElements(document.body);
       });
      if(this.ScriptRender === true){
  var script = document.createElement('script');
  script.setAttribute("async", "async");
  script.setAttribute("type", "module");
  script.setAttribute("xid",`${this.Xid}`)
        if(window.location.pathname === this.Route && this.ScriptRender === true || this.Route === '' && this.ScriptRender === true){
            script.insertAdjacentHTML('afterbegin',` 
  
  

 
   `);
            document.body.append(script);
            this.ScriptRender = false; 
        }
         this.bindToWindow();
      }
  });
}
  catch(ex){console.log(ex);}
}

async continue()
{
    let Search = await setInterval(async ()=>{
        window[this.Xid].Render();
},50);
}

evalAttrs(){
    let attrs = {};
    let attributes = this.Element.attributes;
    for (let i=0 ; i<attributes.length ; i++){
        let attr = attributes[i];
            this[attr.name] = attr.value;
            attrs[attr.name] = attr.value;
   }
    return attrs;

}

setAttrs(attrs, count){
    for (let attrName in attrs){
        this.Element.setAttribute(attrName, attrs[attrName]);
    }
            this.Element.setAttribute('xid',`${this.Xid}${count.toString()}`);            
}
async renderXidElements(el){
    try{
            let item = eval(`new TEST()` );

            if(el.hasAttribute('xid'))
            {
                item.ShouldRender = false;
                item.ScriptRender = false;
            }
            await item.Render();
             Array.from(el.children).forEach(async (child)=> 
                {  
                    await item.renderXidElements(child);
                        window.addEventListener('load', (event) => {
       
                    Array.from(child.children).forEach(async (gchild)=> 
                    {  
                        await item.renderXidElements(gchild)
                        });
                    });


                });
     }
  catch(ex){console.log(ex);}
}
setPropertyFromAttribute(elem) {
  for (let attr in elem.attributes){
      this[attr.name] = attr.value;
  }
}

bindToWindow(){
  let xid = this.Element.getAttribute('xid');
  let className = this.Element.className;
  let data = this.Element.dataset;


    this.Element.className = className; //this line sets the className back to the original for consistency
    this.Element.setAttribute('xid', xid); //this line sets the xid to the original for consistency

    if(!window[xid]){
    window[xid] = new TEST(this); //this line instantiates the class with the given data
    this.scanWindowObjectsForRoutes();
     window[xid].Element = this.Element;
let element = window[xid].Element

let attributeObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "attributes") {
      element.addEventListener("change", () => {
        console.log(`${this.Name} Changed!`);
        console.log(this);
      });
    }
  });
});

attributeObserver.observe(element, {
  attributes: true
});     
  
}

return window[xid];
}
  async scanWindowObjectsForRoutes() {
}
getElementByXid(xid)
    {
        if(xid){
            return document.querySelector("[xid='" + this.xid + "']"); 
    }

                return document.querySelector("[xid='" + xid + "']"); 
    }
ScriptInit(){
}

async Render(){
    try{
        if(this.ShouldRender === true){
          await this.replaceElements('test');
          this.ShouldRender = false;
        }
    }
    catch(ex){console.log(ex);

}
    
} }
 var Article = new ARTICLE();if(window.location.pathname === Article.Route && Article.ShouldRender === true || Article.Route === '' && Article.ShouldRender === true){await Article.renderXidElements(document.body);}var Landing = new LANDING();if(window.location.pathname === Landing.Route && Landing.ShouldRender === true || Landing.Route === '' && Landing.ShouldRender === true){await Landing.renderXidElements(document.body);}var MainNav = new MAINNAV();if(window.location.pathname === MainNav.Route && MainNav.ShouldRender === true || MainNav.Route === '' && MainNav.ShouldRender === true){await MainNav.renderXidElements(document.body);}var Test = new TEST();if(window.location.pathname === Test.Route && Test.ShouldRender === true || Test.Route === '' && Test.ShouldRender === true){await Test.renderXidElements(document.body);} })()