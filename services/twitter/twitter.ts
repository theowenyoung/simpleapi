export interface PostTweetParam {
  status: string;
}

let twitterInstance: SimpleTwitter | null = null;
export async function setupTwitter() {
  const twitterCretials = {
    consumer_key: Deno.env.get("TWITTER_CONSUMER_KEY"),
    consumer_secret: Deno.env.get("TWITTER_CONSUMER_SECRET"),
    access_token: Deno.env.get("TWITTER_ACCESS_TOKEN"),
    access_token_secret: Deno.env.get("TWITTER_ACCESS_TOKEN_SECRET"),
    bearer_token: Deno.env.get("TWITTER_BEARER_TOKEN"),
  };
  const twitterInstance = new SimpleTwitter(twitterCretials);
}
export async function postTweet(params: PostTweetParam) {
  if (!twitterInstance) {
    await setupTwitter();
  }

  const params = {
    status: params.status,
  };
  return new Promise((resolve, reject) => {
    simpleTwitter.post("statuses/update", params, function (
      error: unknown,
      response: unknown,
    ) {
      if (!error) {
        resolve(response);
      }
      reject(error);
    });
  });
}
