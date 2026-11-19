var nextGreaterElements = function(nums) {
    const ans= new Array(nums.length).fill(-1);
    const stack=[];
    for(let i=2*nums.length-1;i>=0;i--){
        let num=nums[i%nums.length];
        while(stack.length>0 && stack[stack.length-1]<=num){
            stack.pop();
        }
        if(i<nums.length && stack.length>0){
            ans[i]=stack[stack.length-1];
        }
        stack.push(num);
    }
    return ans;
};