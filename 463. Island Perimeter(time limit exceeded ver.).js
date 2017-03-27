/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let landindex = [],
        landlength = 0;
    grid.forEach((item,index) => {
        let exist = item.indexOf(1);
        while (exist !== -1) {
            landlength += 4;
            landindex.push([index,exist]);
            exist = item.indexOf(1, exist + 1);
        }
    })

    for (let i = 0; i < landindex.length; i++) {
        for (let j = i + 1; j < landindex.length; j++) {
            if (landindex[i][0] === landindex[j][0] &&
                Math.abs(landindex[i][1] - landindex[j][1]) === 1) {
                    landlength -= 2;
            }
            if (landindex[i][1] === landindex[j][1] &&
                Math.abs(landindex[i][0] - landindex[j][0]) === 1) {
                    landlength -= 2;
            }
        }
    }
    return landlength
};
