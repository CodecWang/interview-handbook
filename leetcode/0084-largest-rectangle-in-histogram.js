/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {
    const n = heights.length;
    const minLeftIndex = new Array(n).fill(0);
    const maxRightIndex = new Array(n).fill(0);

    minLeftIndex[0] = -1;
    for (let i = 1; i < n; i++) {
        let t = i - 1;
        while(t >= 0 && heights[t] >= heights[i]) t = minLeftIndex[t];
        minLeftIndex[i] = t;
    }

    maxRightIndex[n - 1] = n;
    for (let i = n - 2; i >= 0; i--) {
        let t = i + 1;
        while (t < n && heights[t] >= heights[i]) t = maxRightIndex[t];
        maxRightIndex[i] = t;
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = Math.max(ans, heights[i] * (maxRightIndex[i] - minLeftIndex[i] - 1));
    }

    return ans;
};