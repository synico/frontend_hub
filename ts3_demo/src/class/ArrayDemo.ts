let list: any = {"columnList":[{"index":0,"aggType":null,"name":"aet","alias":null},{"index":1,"aggType":null,"name":"target_region","alias":null},{"index":2,"aggType":"count","name":"local_study_id","alias":null}],"data":[["GEMR750W","头","155"],["MRAWP157","胸","160"]]};

let data: string[] = list.data;
const obj1: any = {};
let result = data.reduce((acc, cur) => {
    if (acc[cur[1]] === undefined) {
        acc[cur[1]] = 0;
    }
    acc[cur[1]] += parseInt(cur[2]);
    return acc;
}, obj1);

console.log("result == obj1: " + (result == obj1));

let arr = [];
for (let i in obj1) {
    console.log("k: " + i + ", v: " + obj1[i]);
    arr.push({ k: i, v: obj1[i]});
}