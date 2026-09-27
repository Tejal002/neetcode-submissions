class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let map=new Map();

        for(let i=0;i<nums.length;i++){
            let key=nums[i];
            if(map.has(key)){
                map.set(key,map.get(key)+1)
            }else{
                map.set(key,1)
            }
        }

        let arr=[...map.entries()];
        arr.sort((a,b)=>b[1]-a[1]);
        let newArry=arr.slice(0,k).map((item)=>item[0]);
        return newArry
    }
}
