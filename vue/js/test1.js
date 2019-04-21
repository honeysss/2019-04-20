// !function (global) {
    function DetectorBase(configs){
        if(!this instanceof DetectorBase){
            throw new Error('不可以通过new方法');
        }
        this.configs = configs;

    }
    
    DetectorBase.prototype.detect = function () {
        console.log("该方法没有被重写");
    }

    DetectorBase.prototype.analyse = function () {
        console.log('analyzing...');
        this.data = "###...";
    }
    
// };

function LinkDetector(links){
    if(!this instanceof LinkDetector){
        throw new Error('不可以通过new方法');
    }
    this.links = links;
    DetectorBase.apply(this, arguments);
}

function ContainerDetector(containers){
    if(!this instanceof ContainerDetector){
        throw new Error('不可以通过new方法');
    }
    this.containers = containers;
    DetectorBase.apply(this, arguments);
}

inherit(LinkDetector, DetectorBase);
inherit(ContainerDetector, DetectorBase);


LinkDetector.prototype.detect = function () {
    this.analyse();
    console.log("loading data:" + this.data);
    console.log("Scanning links:" + this.links)
}

ContainerDetector.prototype.detect = function () {
    this.analyse();
    console.log("Loading data:" + this.data);
    console.log("Scanning links:" + this.containers);
}


Object.freeze(DetectorBase);
Object.freeze(DetectorBase.prototype);
Object.freeze(LinkDetector);
Object.freeze(LinkDetector.prototype);
Object.freeze(ContainerDetector);
Object.freeze(ContainerDetector.prototype);

Object.defineProperties(window,{
    LinkDetector:{value:LinkDetector},
    ContainerDetector:{value:ContainerDetector},
    DetectorBase:{value:DetectorBase}
});



function inherit(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;

}


var cd = new ContainerDetector("#abc #def #ghi");
var ld = new LinkDetector("http://libs.baidu.com/jquery/1.10.2/jquery.min.js/");

cd.detect();
ld.detect();