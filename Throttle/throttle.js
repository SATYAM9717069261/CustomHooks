/* Restrict a User don't click Again and Again Button */
const throttal = (callBack,interval) =>{
    var flag = true;
    return ()=>{
        if(flag === true){
            flag = false;
            callBack();
            setTimeout(()=>{
                flag = true
            },interval);
        }
    }
}

function expenciveMethod(){
    var data =[]
    for( var i = 0;i<10000;i++){
        data.push(i);
    }
    console.log(" data =>" ,data);
}
const apicallTrottal = throttal(expenciveMethod,1000);
//  function apiCall(){
//      for( var i = 0;i<10000;i++)
//          apicallTrottal();
//  }

/**
    * Now Implement When User Call API and Button Disable Until Api Response
*/
const Apithrottal = (callBack) =>{
    var flag = true;
    return ()=>{
        if(flag === true){
            flag = false;
            callBack().then(()=>{
                flag = true; 
            });
        }
    }
}
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate receiving data from the server
            const data = { name: 'John', age: 30 };
            // Resolve the promise with the fetched data
            resolve(data);
        }, 1000); // Simulate 1 second delay
    });
}

async function fetchDataAsync() {
    try {
        const data = await fetchData();
        console.log('Fetched data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
const apiThrottal = Apithrottal(fetchDataAsync);
function apiCall(){
    for( var i = 0;i<10000;i++)
        apiThrottal();
}

