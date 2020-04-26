let env = process.env.BRANCH_ENV || "dev";
const apiConfig = {
  dev: { apiHost: "" },
  stage: { apiHost: "" },
  pre: { apiHost: "" },
  prod: { apiHost: "" },
};
const apiToken = "";
const envConfig = apiConfig[env];
export { envConfig, apiToken };
