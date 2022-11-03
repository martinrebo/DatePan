// DOCS: https://www.mongodb.com/docs/atlas/api/data-api-resources/#std-label-data-api-resources
const config = {
    method: "post",
    url: "https://data.mongodb-api.com/app/data-ftset/endpoint/data/beta/action/",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key":
        "C7GoSGjfGKgUUyRed2k0Aw4lvW2xfM9snUOePYFHjwp4bxjVBuac6ccQwyoJ05C8",
    },
    data: {
      collection: "events",
      database: "wudtimeDB",
      dataSource: "clusterWudTime0",
    },
  } as const;

  export default config

