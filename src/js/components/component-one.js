const tmp = {
  initTemplate(image = []) {
    let el = document.createElement('div');
    el.className = 'component-container';
    el.innerHTML = `
      <ul>
        ${this.imageList(image)}
      </ul>
    `;
    return el;
  },

  imageList(imageList) {
    if (imageList.length === 0) return;
    let el = '';
    imageList.forEach((item, index) => {
      el += `<li class="component-one-image${index}"><img src="${item}"/></li>`
    });
    return el;
  }
};

class ComponentOne {
  constructor(wrap) {
    this.wrap = document.getElementById(wrap);
    this.init();
  }

  init() {
    const url = '../../images/';
    const imageList = [`${url}02.jpg`, `${url}03.jpg`, `${url}04.jpg`, `${url}05.jpg`];
    const el = tmp.initTemplate(imageList);
    console.log(this.wrap);
    this.wrap.appendChild(el);
  }
}

export default ComponentOne;
