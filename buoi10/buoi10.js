/**Cho một số nguyên dương N, 
 * viết hàm in ra màn hình những số hoàn hảo nhỏ hơn N 
 * (số hoàn hảo là số bằng tổng các ước số của nó mà không kể chính nó). */
function kiemTra(number){
    let sum = 0;
    for(let i = 1; i < number/2; i++){
        if(number % i == 0){
            sum+=i; 
        }
        if(sum == number){
            return true;
        }
        return false;
    }
      
}
/**Tìm số nhỏ nhất và lớn nhất trong mảng số nguyên */
function soMax(arr){
    let max = '';
    for(let number of arr){
        max = number;
    } 
}
var a = [1,2,3,4];
console.log(soMax(a));
