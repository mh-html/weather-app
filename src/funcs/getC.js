export default function retC(value){
    if(value){
        return (value - 273.15).toFixed();
    }else{
        return null;
    }
}