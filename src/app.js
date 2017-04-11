
import './css/common.css';
import Layer from './components/layer/layer';

const App =  function () {
    var dom = document.getElementById('app');
    var layer = new Layer();
    dom.innerHTML = layer.tpl({name: 'wheats', arr:["apple","orange","yello"]});
}
new App();