// src/utils/chartUtils.js
export const filterPostsByUserId = (posts, userId) => {
  return posts.filter((post) => post.userId === 1);
};

export const generateChartData = (posts) => {
  // Implement logic to generate chart data from posts
  // For example, counting the number of posts for each user
  const userPostCount = posts.reduce((countMap, post) => {
    countMap[post.userId] = (countMap[post.userId] || 0) + 1;
    // console.log(post);
    return countMap;
  }, {});

  // Convert the count map into an array of objects for chart data
  const chartData = Object.entries(userPostCount).map(([userId, count]) => ({
    userId: parseInt(userId, 10),
    count,
}));

// console.log(chartData);
return chartData;
};
