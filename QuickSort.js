/* 
  Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be
        the last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
  Steps:
  1. Pick an number out of the arr to be your pivot value
    - usually the middle idx but can be any.
  2. Partition the array IN PLACE such that all values less than the pivot
      value are to the left of it and all values greater than the pivot value
      are to the right (not perfectly sorted).
  3. return: the index where the left section of smaller items ends.
  "Choosing a random pivot minimizes the chance that you will encounter
  worst-case O(n^2) performance (always choosing first or last would cause
  worst-case performance for nearly-sorted or nearly-reverse-sorted data).
  Choosing the middle element would also be acceptable in the majority of
  cases."
  https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];

// original : [11, 8, 14, 3, 6, 2, 7]
// if we pick 7 as the pivot
// new.    :  [ 3, 6, 2, 7, 11, 8, 14] 
// return the pivot index :3

/* 
There are many possible answers for nums1 depending on which number is chosen
as the pivot.
E.g., if 3 is chosen as the pivot, the below are some solutions because
numbers smaller than 3 are to the left and larger numbers are to the right
[2, 3, 7, 6, 11, 8, 14]
[2, 3, 11, 8, 7, 6, 14]
[2, 3, 8, 7, 11, 6, 14]
[2, 3, 8, 6, 14, 7, 11]
*/
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization of quickSort. Focus only on the first cycle of the visualization
 *    for the partition portion only.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {Array<number>} The idx where left section of smaller items ends.
 */
//  function partition(nums = [], left = 0, right = nums.length - 1) {
//     let middleIndex = Math.floor(nums.length/2);
//     let arr1 = [];
//     let arr2 = [];
  
//     if(nums.length < 2) return nums;
  
//     for(let i = left; i < right; i++){
//       if(nums[i] < middleIndex){
//         arr1.push(nums[i])
//       }
//       if(nums[i] > middleIndex){
//         arr2.push(nums[i])
//       }
//     }
//       return arr1.concat(nums[right], arr2);
    
//   }
  
//   console.log(partition(nums2));
//   console.log(partition(nums3));
//   console.log(partition(nums4));

// // Here the 0 index is the pivot
function quickSort(nums) {
	var smaller = []; var larger = [];
    // defining an empty array for smaller numbers than pivot and larger numbers than pivot
	if (nums.length <= 1)
		return nums;
        // edge case, is the length less than or equal to one?
	
	for (var i = 1; i < nums.length; i++) { 
        // for loop to go through all the numbers in the array
		if (nums[i] < nums[0])
			smaller.push(nums[i]); 
            // if nums @ i is less than the pivot number ()
		if (nums[i] >= nums[0]) 
            // if nums @ i is greater than the pivot number ()
			larger.push(nums[i]); 
	}
    // recursively call quickSort to go through the smaller array's contents, this will then concat nums[0] after that is processed. Then we concatenate the function to run quickSort with the larger array
    // returning the smaller numbers array and adding on our pivot of nums[0] and the larger numbers array
	return quickSort(smaller).concat(nums[0], quickSort(larger));
}
console.log(quickSort(nums1));
console.log(quickSort(nums2));
console.log(quickSort(nums3));
console.log(quickSort(nums4));