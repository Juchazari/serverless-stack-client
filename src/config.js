const config = {
  STRIPE_KEY: "pk_test_Ut3V8JGOlqqtGTJVHrRJzXtW00g8WufwRK",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-jc-2020"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://rm1wr2crpb.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_pOZxjgDfa",
    APP_CLIENT_ID: "pr8o7bie3hk3o80sjv29c1bbd",
    IDENTITY_POOL_ID: "us-east-1:bcbd16bb-81c5-4b99-a8bb-c6575e3052c7"
  }
};

export default config;