/*
    * check how much time passend from last key pressed
    * usedebounce({callback,interval})
*/
class usedebounce{
    constructor(){
        this.timer;
        this.interval = 5000;
        this.callbackresponse = ()=>{};
        this.callback = ()=>{};
    }
    debounce({callBack=this.callback,interval=this.interval,callBackResponse=this.callbackresponse}){
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            const callbackdata =  callBack();
            if(callBackResponse!= undefined )
                callBackResponse(callbackdata);
        },interval);
    }
}

function getUser(value){
    return value;
}

const useDebounce = new usedebounce();

function userList(value){
    useDebounce.debounce({
        callBack:()=>getUser(value),
        interval:500,
        callBackResponse:(data)=>{
            const dom = document.getElementById("userList");
            dom.append(data);
        }
    });
}

