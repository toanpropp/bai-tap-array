var arr =[];
var arrayFloat=[];

function getNumber(){
        var n=Number(document.getElementById("inputNum").value);
        arr.push(n),document.getElementById("txtArray").innerHTML=arr
}
function sum(){
    for (var n=0, i=0;i<arr.length;i++){
        arr[i]>0 && (n+=arr[i]);
    }
    document.getElementById("txtSum").innerHTML=("tổng số dương trong mảng: "+n);
}
function count(){
    for (var n=0, i=0;i<arr.length; i++){
        arr[i]>0 && n++;
    }
    document.getElementById("txtCount").innerHTML=("Số dương trong mảng: "+n);
}
function findmin(){
    for (var n=arr[0] , i=1 ; i < arr.length ; i++){
        arr[i]<n && (n= arr[i]);
        document.getElementById("txtMin").innerHTML=("Số nhỏ nhất trong mảng: "+n);
    }
}

function minPos(){
    for (var n = [] , i=0 ; i < arr.length ; i++)
    arr[i]>0 && n.push(arr[i]);
    if (n.length > 0){
        for (var j = n[0],i = 1 ; i < n.length ; i++){
            n[i]<j&&(j = n[i]);
        document.getElementById("txtFindMinPos").innerHTML="số dương bé nhất trong mảng là: "+j
        
        }
    }else 
    document.getElementById("txtFindMinPos").innerHTML="không có số dương nào trong mảng"
        
}
function FindLastEven(){
    for (var n=0 ,i=0; i<arr.length; i++)
    arr[i] % 2 == 0 && (n=arr[i]);

    document.getElementById("txtLastEven").innerHTML="số chẵn cuối cùng là: "+n;
}
function temp(n,i){
    var j = arr[n];
    arr[n]=arr[i],
    arr[i]=j
}
function changePosition(){
    temp(document.getElementById("inputNumA").value,document.getElementById("inputNumB").value),document.getElementById("txtExchange").innerHTML="Mảng sau khi đổi: "+ arr
}
function sortings(){
    for (var n =0; n < arr.length; n++){
        for(var i = 0; i < arr.length; i++){
            if (arr[i]>arr[i+1]){
                var tmp = arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=tmp
            }
        }
    }
    document.getElementById("txtSort").innerHTML="Mảng sau khi sắp xếp: "+arr;
}
function checkPrime(n){
    if(n<2)
    return!1;
    for(var r=2;r<=Math.sqrt(n);r++)
    if(n%r==0)
    return!1;
    return!0
}
function findPrime(){
    for(var n=-1,r=0;r<arr.length;r++){
        if(checkPrime(arr[r]))
        {
        n=arr[r];
        break
        }
    }
    document.getElementById("txtPrimeNum").innerHTML="Số nguyên đầu tiên là: "+n
}
function getFloat(){
    var n=Number(document.getElementById("inputFloat").value);
arrayFloat.push(n),document.getElementById("txtArrayFloat").innerHTML=arrayFloat
}
function findInt(){
    
    for(var n=0,r=0;r<arrayFloat.length;r++)
    
    Number.isInteger(arrayFloat[r])&&n++;
    
    document.getElementById("txtint").innerHTML="Số nguyên: "+n

}

function compNum(){
    for(var n=0 , i=0, j=0; j<arr.length; j++){
        if (arr[j]>0){
            n++;
        }else if (arr[j]<0){
            i++;
        }
    }
    console.log(i,n)
    if (n>i){
        document.getElementById("txtcomp").innerHTML="số dương > số âm";
    }else if (n<i){
        document.getElementById ("txtcomp").innerHTML="số dương < số âm"
    }else 
        document.getElementById("txtcomp").innerHTML="số dương = số âm";
    
}