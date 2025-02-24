export const Uint8ArrayToString=(data)=>{
    let str = "";
    for (let i = 0; i < data.length; i++) {
    str += String.fromCharCode(data[i]);
    }
    return str; 
};
export const StringToUint8Array=(str)=>{
    let arr = [];
    for (let i = 0, j = str.length; i < j; ++i) {
    arr.push(str.charCodeAt(i));
    } 
    let tmpUint8Array = new Uint8Array(arr);
    return tmpUint8Array;
}