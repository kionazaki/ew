// Конструктор корневого элемента
var RootObject = function(id){
    this.id = id;
    const root = document.createElement('div');
    root.setAttribute('id', this.id);
    document.body.appendChild(root);
    this.element = root;
};

export default RootObject;