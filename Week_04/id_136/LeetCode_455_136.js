/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    var sortg = g.sort((a,b) => a-b);
    var sorts = s.sort((a,b) => a-b);

    var si = 0, gi = 0;
    var res = 0
    while(gi < sortg.length && si < sorts.length) {
        if(sorts[si] >= sortg[gi]) {
            res++
            si++
            gi++
        }else{
            si++
        }
    }
    return res
};