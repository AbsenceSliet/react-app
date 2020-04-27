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
