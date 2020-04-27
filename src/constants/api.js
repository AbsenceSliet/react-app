import service from "@/service/fetch";
/**
 * 获取默认搜索值
 */
export const searchDefault = () =>
  service({
    method: "get",
    url: "/search/default",
  });

/**
 * 获取热搜榜
 */
export const hotSearch = () =>
  service({
    method: "get",
    url: "/search/hot/detail",
  });

/**
 * 获取热搜建议
 * @param keywords 关键字
 */
export const getSearchSuggest = (keywords) =>
  service({
    method: "get",
    url: "/search/suggest",
    params: {
      type: "mobile",
      keywords,
    },
  });
