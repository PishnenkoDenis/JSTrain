async function retry(url, retries, delay) {
  let attemptCount = 0;

  try {
    attemptCount++;

    // if (attemptCount <= 2) {
    //   throw new Error("Simulated network failure");
    // }
    const response = await fetch(url);

    if (response.ok) {
      console.log(`Success: ${response.status}`);
      const data = await response.json();

      return data;
    }
  } catch (error) {
    // console.log(
    //   `Attempt ${attemptCount} failed with error: ${error.message}. Waiting ${delay} ms before retrying.`
    // );
    if (retries > 0) {
      await new Promise((res) => setTimeout(res, delay));
      return retry(url, retries - 1, delay);
    } else {
      throw new Error("All retries failed");
    }
  }
}

const url = "https://jsonplaceholder.typicode.com/posts/1";

retry(url, 4, 1000).then(console.log).catch(console.error);
