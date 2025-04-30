function GCD(a,b){
    if(b === 0) return Math.abs(a);
    return GCD(b, a%b);
}
console.log(GCD(56,98)); // 14



function reverseArray(arr){
    let left = 0, right = arr.length-1
    while(left<right){
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    return arr
}
console.log(reverseArray([1,2,3,4,5])) // [5,4,3,2,1]



function findMax(arr){
    let max = -Infinity
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
console.log(findMax([3,7,1,9,4])) // 9



function gcd(a,b){
    if(b===0) return Math.abs(a)
        return gcd(b, a%b)
}
console.log(gcd(48, 18)) // 6



function reaverseArray(arr){
    let left = 0, right = arr.length-1
    while(left<right){
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    return arr
}
console.log(reverseArray([1,2,3,4,5])) // [5,4,3,2,1]



function FindMaximum(arr){
    let max = -Infinity
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}
console.log(FindMaximum([2,5,6,4,3])) // 6