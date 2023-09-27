function arrayStat(arr){

    let min = arr[0]
    let max = arr[0]
    let sum = 0
    let avg = 0

    for(let i = 0 ;  i < arr.length ; i++){
        sum = sum + arr[i]
        if(arr[i] < min) min = arr[i]
        if(arr[i] > max) max = arr[i]
    }
    avg = sum/arr.length
    return {min:min , max:max , sum:sum , avg:avg}
}

console.log(arrayStat([1,2,3,4,5]))