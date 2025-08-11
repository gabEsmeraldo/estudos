public class Solution {
    public static int[] twoSum(int[] nums, int target){
        int n1 = 0;
        int[] numbers = new int[100];
        for(int i = 1; i < nums.length; i++){
            int testValue = (nums[n1] + nums[i]);
            if(testValue == target){
                numbers[0] = n1;
                numbers[1] = i;
                break;
            }else{
                n1++;
            }
        }
        return numbers;
    }
    public static void main(String[] args) {
        int[] param_1 = {4,2,3};
        int param_2 = 6;
        int[] ret = twoSum(param_1, param_2);
        System.out.println("[" + ret[0] + ", " + ret[1] + "]");
    }
}