class BridgeHandler{
    constructor(){
        this.page = {};
    }
    getStore(key){
        // let key = context.$route && context.$route.name;
        return key? this.page[key]: this.page;
    }
    setStore(key,value){
        if( this.page[key] && typeof this.page[key] == 'object' ){
            this.page[key] = Object.assign({}, this.page[key], value);
        }else{
            this.page[key] = value;
        }
    }
    clear(key){
        if(key) delete this.page[key];
        else{
            this.page = {};
        }
    }
}
const bridgeHandler = new BridgeHandler();
export default bridgeHandler;