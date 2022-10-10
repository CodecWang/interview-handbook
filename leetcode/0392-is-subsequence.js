/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    // 我的方式：使用队列
    // if (!s) return true;

    // const queue = [...s];
    // let item = queue.shift();
    // for (const ch of t) {
    //     if (ch === item) {
    //         if (queue.length === 0) return true;
    //         item = queue.shift();
    //     }
    // }

    // return false;

    // 双指针法：更简单
    let i = 0;
    let j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) i++;
        j++;
    }

    return i === s.length;
};