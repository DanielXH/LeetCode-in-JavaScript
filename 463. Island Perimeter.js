/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let islands = 0,
        neighbours = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][j] == 1) {
                islands++;
                if (i < grid.length - 1 && grid[i + 1][j] == 1)
                    neighbours++;
                if (j < grid.length - 1 && grid[i][j + 1] == 1)
                    neighbours++;
            }
        }
    }

    return islands * 4 - neighbours * 2
};