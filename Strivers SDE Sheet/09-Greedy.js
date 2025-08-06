//#################################### N meetings in one room ###############################################

function nMeetingsInOneRoom(start, end, n) {
    const meetings = start.map((startTime, inddex) => ({ start: startTime, end: end[inddex] }));
    meetings.sort((a, b) => a.end - b.end);

    let total = 0;
    let lastEndTime = 0

    for (let i = 0; i < n; i++) {
        if (meetings[i].start > lastEndTime) {
            total++
            lastEndTime = meetings[i].end
        }
    }

    return total
}

// const n = 3;
// const start = [1, 1, 1];
// const end = [2, 2, 2];
// console.log(nMeetingsInOneRoom(start, end, n));


//#################################### Minimum number of platforms required for a railway ###############################################

function findMinimumFlatforms(arrival, depature, n) {
    arrival = arrival.sort();
    depature = depature.sort();

    let platforms = 1
    let maxPlatforms = 1
    let i = 1, j = 0;
    while (i < n && j < n) {
        if (arrival[i] <= depature[j]) {
            i++
            platforms++
        } else {
            j++;
            platforms--;
        }
        maxPlatforms = Math.max(platforms, maxPlatforms);
    }
    return maxPlatforms;
}

// const n = 6;
// const arrival = [900, 945, 955, 1100, 1500, 1800];
// const depature = [910, 1200, 1120, 1130, 1900, 2000];
// console.log(findMinimumFlatforms(arrival, depature, n));


//#################################### Job Sequencing Problem ###############################################

function jobSequenc(jobs) {
    jobs = jobs.sort((a, b) => b.profit - a.profit);
    const maxDealine = Math.max(...jobs.map((job) => (job.deadline)))
    const jobSequenc = Array(maxDealine + 1).fill(false);
    let profit = 0;
    let count = 0

    for (let job of jobs) {
        for (let t = job.deadline; t > 0; t--) {
            if (jobSequenc[t] == false) {
                jobSequenc[t] = true
                profit += job.profit
                count++
                break;
            }
        }
    }
    return { profit, count }
}
// const jobs = [
//     { id: 'a', deadline: 2, profit: 100 },
//     { id: 'b', deadline: 1, profit: 19 },
//     { id: 'c', deadline: 2, profit: 27 },
//     { id: 'd', deadline: 1, profit: 25 },
//     { id: 'e', deadline: 3, profit: 15 }
// ];
// console.log(jobSequenc(jobs));


//#################################### Fractional Knapsack Problem ###############################################


function fractionalKnapsack(capacity, items) {
    items = items.sort((a, b) => ((b.value / b.weight) - (a.value / a.weight)));

    let totalValue = 0
    for (let item of items) {
        if (item.weight <= capacity) {
            totalValue += item.value
            capacity -= item.weight
        } else {
            let remainingCapacity = item.value * (capacity / item.weight)
            totalValue += remainingCapacity
            break;
        }
    }

    return totalValue
}
// const items = [
//     { value: 60, weight: 10 },
//     { value: 100, weight: 20 },
//     { value: 120, weight: 30 }
// ];

// const capacity = 50;

// console.log(fractionalKnapsack(capacity, items)); // Output: 240.0

//#################################### Find minimum number of coins ###############################################


function coinChange(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity)
    // 0 amount needs 0 coins
    dp[0] = 0

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        }
    }
    return dp[amount];
}


// console.log(coinChange([1, 2, 5], 11)); 

//#################################### Assign Cookies ###############################################

function assignCookies(childrens, cookies) {
    childrens = childrens.sort((a, b) => (b - a))
    cookies = cookies.sort((a, b) => (b - a))
    let child = 0;
    let cookie = 0
    while (cookie < cookies.length && child < childrens.length) {
        if (cookies[cookie] >= childrens[child]) {
            cookie++
            child++
        }
        else {
            child++
        }
    }
    return cookie
}

const childrens = [1, 2], cookies = [1, 2, 3]
console.log(assignCookies(childrens, cookies));
