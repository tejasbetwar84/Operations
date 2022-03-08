let Arr=[];

Arr.push(user.operations.value1);
Arr.push(user.operations.value2);
Arr.push(user.operations.value3);
Arr.push(user.operations.value4);
Arr.push(user.operations.value5);

let Average1=0;
let Mini1=Arr[0];
let Maxi1=Arr[0];
 for(let i=0;i<Arr.length;i++){
   Average+=Arr[i];
   Mini1=min(Mini1,arr[i]);
   Maxi1=max(Maxi1,arr[i]);
 }

 document.querySelector('#average').textContent=`Average : ${Average1}`;
 document.querySelector('#mini').textContent=`Minimum : ${Mini1}`;
 document.querySelector('#maxi').textContent=`Maximum :${Maxi1}`;

