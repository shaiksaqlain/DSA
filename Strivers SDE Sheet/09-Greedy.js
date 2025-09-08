//#################################### N meetings in one room ###############################################

function nMeetingsInOneRoom(start, end, n) {
    const meetings = start.map((startTime, index) => ({ startTime: startTime, endTime: end[index] }))
    meetings.sort((a, b) => (a.endTime - b.endTime))
    let total = 0;
    let lastEndTime = 0;
    for (let meeting of meetings) {
        if (meeting.startTime >= lastEndTime) {
            lastEndTime = meeting.endTime
            total++;
        }
    }

    return total
}

// const n = 3;
// const start = [1, 3, 0, 5, 8, 5]
// const end = [2, 4, 6, 7, 9, 9]
// console.log(nMeetingsInOneRoom(start, end, n));


//#################################### Minimum number of platforms required for a railway ###############################################

function findMinimumFlatforms(arrival, departure, n) {
    arrival = arrival.sort()
    departure = departure.sort()
    let platforms = 1, maxPlatforms = 0;
    let i = 1, j = 0;
    while (i < n && j < n) {
        if (arrival[i] <= departure[j]) {
            platforms++
            maxPlatforms = Math.max(maxPlatforms, platforms);
            i++
        } else {
            platforms--
            j++
        }
    }
    return maxPlatforms
}

// const n = 6;
// const arrival = [900, 945, 955, 1100, 1500, 1800];
// const departure = [910, 1200, 1120, 1130, 1900, 2000];
// console.log(findMinimumFlatforms(arrival, departure, n));


//#################################### Job Sequencing Problem ###############################################

function jobSequenc(jobs) {
    jobs = jobs.sort((a, b) => (b.profit - a.profit));
    const maxDealine = Math.max(...jobs.map((job, indes) => { return job.deadline }))
    const deadlines = Array(maxDealine + 1).fill(false);
    let profit = 0
    let count = 0;
    for (let job of jobs) {
        for (let t = job.deadline; t > 0; t--) {
            if (deadlines[t] == false) {
                deadlines[t] = true;
                profit += job.profit;
                count++;
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
    items.sort((a, b) => (b.value / b.weight - a.value / a.weight))
    let totalValue = 0;
    for (let item of items) {
        if (item.weight <= capacity) {
            totalValue += item.value
            capacity -= item.weight
        } else {
            const remainingCapacityValue = capacity * (item.value / item.weight)
            totalValue += remainingCapacityValue;
            break;
        }
    }
    return totalValue;
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
            child++
            cookie++
        } else {
            child++
        }
    }
    return cookie
}


// const childrens = [1, 2], cookies = [1, 2, 3]
// console.log(assignCookies(childrens, cookies));
